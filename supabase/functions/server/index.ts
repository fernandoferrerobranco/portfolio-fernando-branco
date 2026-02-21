import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// ========================================
// AUTHENTICATION MIDDLEWARE
// ========================================
async function requireAuth(c: any, next: any) {
  const accessToken = c.req.header('Authorization')?.split(' ')[1];
  
  console.log('🔐 requireAuth debug:', {
    hasAuthHeader: !!c.req.header('Authorization'),
    hasToken: !!accessToken,
    tokenPreview: accessToken ? `${accessToken.substring(0, 30)}...` : 'NO TOKEN',
    supabaseUrl: Deno.env.get('SUPABASE_URL'),
    hasServiceRoleKey: !!Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),
  });
  
  if (!accessToken) {
    console.error('❌ No token provided in Authorization header');
    return c.json({ error: 'Unauthorized - No token provided' }, 401);
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(accessToken);
    
    console.log('🔐 getUser result:', {
      hasUser: !!user,
      userId: user?.id,
      userEmail: user?.email,
      error: error ? error.message : 'no error',
    });
    
    if (error || !user?.id) {
      console.error('❌ Authorization error:', error);
      return c.json({ error: `Unauthorized - Invalid token: ${error?.message}` }, 401);
    }

    c.set('userId', user.id);
    await next();
  } catch (err) {
    console.error('❌ Auth exception:', err);
    return c.json({ error: `Auth failed: ${err}` }, 401);
  }
}

// ========================================
// AUTH ROUTES
// ========================================

// Sign up new admin user
app.post("/make-server-67983b2b/auth/signup", async (c) => {
  try {
    const { email, password, name } = await c.req.json();

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured
      email_confirm: true
    });

    if (error) {
      console.log('Signup error:', error);
      return c.json({ error: `Failed to create user: ${error.message}` }, 400);
    }

    return c.json({ success: true, user: data.user });
  } catch (error) {
    console.log('Signup exception:', error);
    return c.json({ error: `Signup failed: ${error}` }, 500);
  }
});

// ========================================
// CONTENT ROUTES (Protected)
// ========================================

// Get all content
app.get("/make-server-67983b2b/content/:section", requireAuth, async (c) => {
  try {
    const section = c.req.param('section');
    const content = await kv.get(`content:${section}`);
    
    return c.json({ success: true, content: content || null });
  } catch (error) {
    console.log('Get content error:', error);
    return c.json({ error: `Failed to fetch content: ${error}` }, 500);
  }
});

// Update content for a section
app.post("/make-server-67983b2b/content/:section", requireAuth, async (c) => {
  try {
    const section = c.req.param('section');
    const content = await c.req.json();
    
    await kv.set(`content:${section}`, content);
    
    return c.json({ success: true });
  } catch (error) {
    console.log('Update content error:', error);
    return c.json({ error: `Failed to update content: ${error}` }, 500);
  }
});

// ========================================
// ANALYTICS ROUTES
// ========================================

// Track page view (Public route - no auth required)
app.post("/make-server-67983b2b/analytics/pageview", async (c) => {
  try {
    const { page, referrer, userAgent } = await c.req.json();
    const timestamp = new Date().toISOString();
    
    // Get current analytics
    const todayKey = `analytics:${new Date().toISOString().split('T')[0]}`;
    const todayData = await kv.get(todayKey) || {
      totalViews: 0,
      uniqueVisitors: new Set(),
      pageViews: {},
      referrers: {},
    };
    
    // Update analytics
    todayData.totalViews = (todayData.totalViews || 0) + 1;
    todayData.pageViews[page] = (todayData.pageViews[page] || 0) + 1;
    
    if (referrer) {
      todayData.referrers[referrer] = (todayData.referrers[referrer] || 0) + 1;
    }
    
    await kv.set(todayKey, todayData);
    
    return c.json({ success: true });
  } catch (error) {
    console.log('Analytics tracking error:', error);
    return c.json({ error: `Failed to track analytics: ${error}` }, 500);
  }
});

// Track download (Public route)
app.post("/make-server-67983b2b/analytics/download", async (c) => {
  try {
    const { fileName, language } = await c.req.json();
    const todayKey = `downloads:${new Date().toISOString().split('T')[0]}`;
    
    const downloads = await kv.get(todayKey) || { total: 0, byFile: {} };
    downloads.total = (downloads.total || 0) + 1;
    downloads.byFile[fileName] = (downloads.byFile[fileName] || 0) + 1;
    
    await kv.set(todayKey, downloads);
    
    return c.json({ success: true });
  } catch (error) {
    console.log('Download tracking error:', error);
    return c.json({ error: `Failed to track download: ${error}` }, 500);
  }
});

// Get analytics dashboard data (Protected)
app.get("/make-server-67983b2b/analytics/dashboard", requireAuth, async (c) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    // Get last 30 days of analytics
    const last30Days = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date(Date.now() - i * 86400000).toISOString().split('T')[0];
      last30Days.push(date);
    }
    
    const analyticsKeys = last30Days.map(date => `analytics:${date}`);
    const downloadKeys = last30Days.map(date => `downloads:${date}`);
    
    const analyticsData = await kv.mget(analyticsKeys);
    const downloadData = await kv.mget(downloadKeys);
    
    // Calculate totals
    let totalViews = 0;
    let totalDownloads = 0;
    const dailyStats = [];
    const topPages = {};
    const topReferrers = {};
    
    analyticsData.forEach((data, index) => {
      if (data) {
        totalViews += data.totalViews || 0;
        
        dailyStats.push({
          date: last30Days[index],
          views: data.totalViews || 0,
          downloads: downloadData[index]?.total || 0,
        });
        
        // Aggregate page views
        if (data.pageViews) {
          Object.entries(data.pageViews).forEach(([page, count]) => {
            topPages[page] = (topPages[page] || 0) + count;
          });
        }
        
        // Aggregate referrers
        if (data.referrers) {
          Object.entries(data.referrers).forEach(([ref, count]) => {
            topReferrers[ref] = (topReferrers[ref] || 0) + count;
          });
        }
      }
    });
    
    downloadData.forEach(data => {
      if (data) {
        totalDownloads += data.total || 0;
      }
    });
    
    // Sort top pages and referrers
    const sortedPages = Object.entries(topPages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([page, count]) => ({ page, count }));
    
    const sortedReferrers = Object.entries(topReferrers)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([referrer, count]) => ({ referrer, count }));
    
    return c.json({
      success: true,
      data: {
        totalViews,
        totalDownloads,
        dailyStats: dailyStats.reverse(), // Most recent first
        topPages: sortedPages,
        topReferrers: sortedReferrers,
      }
    });
  } catch (error) {
    console.log('Dashboard analytics error:', error);
    return c.json({ error: `Failed to fetch dashboard data: ${error}` }, 500);
  }
});

// ========================================
// HEALTH CHECK
// ========================================
app.get("/make-server-67983b2b/health", (c) => {
  return c.json({ status: "ok" });
});

Deno.serve(app.fetch);
