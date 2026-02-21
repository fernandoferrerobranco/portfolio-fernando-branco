import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";

const app = new Hono();

// Enable CORS
app.use("/*", cors({
  origin: "*",
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}));

// Health check
app.get("/make-server-67983b2b/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Test route
app.get("/make-server-67983b2b/test", (c) => {
  return c.json({ 
    message: "Test route works!",
    timestamp: new Date().toISOString() 
  });
});

// Root route
app.get("/", (c) => {
  return c.json({ message: "Server is running!" });
});

Deno.serve(app.fetch);
