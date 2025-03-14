'use client';

export const preloadCommonPages = (): void => {
  // Only run in browser
  if (typeof window === 'undefined') return;

  // Preload common navigation paths after page load
  window.addEventListener('load', () => {
    const pagesToPreload = ['/login', '/register', '/dashboard', '/tier'];
    
    // Wait until page is fully loaded and idle
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        pagesToPreload.forEach(path => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = path;
          document.head.appendChild(link);
        });
      });
    }
  });
};

// Initialize reveal animation for elements as they scroll into view
export const initScrollReveal = (): (() => void) => {
  if (typeof window === 'undefined') return () => {};
  
  const handleScroll = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const revealTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (revealTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check
  handleScroll();
  
  // Add event listener
  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
};

// Image preloading utility
export const preloadImage = (src: string): void => {
  if (typeof window === 'undefined') return;
  
  const img = new Image();
  img.src = src;
};

// Optimize auth processes
export const optimizeAuthProcess = (): void => {
  // Warm up Firebase auth connection
  if (typeof window !== 'undefined') {
    // Preload auth-related domains
    const domains = [
      'https://identitytoolkit.googleapis.com',
      'https://securetoken.googleapis.com'
    ];
    
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }
}; 