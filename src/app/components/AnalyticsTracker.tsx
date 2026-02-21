import { useEffect } from 'react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-67983b2b`;

export function AnalyticsTracker() {
  useEffect(() => {
    // Track page view
    trackPageView();

    // Track section views on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              trackPageView(sectionId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const trackPageView = async (page: string = window.location.pathname) => {
    try {
      await fetch(`${API_BASE_URL}/analytics/pageview`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
        }),
      });
    } catch (error) {
      // Silently fail - don't disrupt user experience
      console.debug('Analytics tracking failed:', error);
    }
  };

  return null; // This component doesn't render anything
}

// Helper function to track downloads
export async function trackDownload(fileName: string, language: string) {
  try {
    await fetch(`${API_BASE_URL}/analytics/download`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fileName,
        language,
      }),
    });
  } catch (error) {
    console.debug('Download tracking failed:', error);
  }
}
