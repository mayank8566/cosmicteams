// Import the bundle analyzer conditionally
let withBundleAnalyzer = (config) => config;
try {
  const bundleAnalyzer = require('@next/bundle-analyzer');
  withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  });
} catch (e) {
  console.log('Bundle analyzer not available, continuing without it.');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Disable strict mode to help with hydration issues
  images: {
    domains: ['firebasestorage.googleapis.com'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
  },
  // Performance optimizations
  onDemandEntries: {
    // Keep the build page contents in memory for longer
    maxInactiveAge: 60 * 60 * 1000,
    // Number of pages to keep in memory
    pagesBufferLength: 5,
  },
  // SWC minification is handled automatically by Next.js 15+
  compiler: {
    // This helps with suppressing certain DOM attribute related warnings
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Add webpack optimization
  webpack: (config, { dev, isServer }) => {
    // Only run in production client-side build
    if (!dev && !isServer) {
      // Enable persistent caching for faster rebuilds
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    
    // Explicitly enable Fast Refresh in development
    if (dev && !isServer) {
      config.experiments = { 
        ...config.experiments, 
        topLevelAwait: true 
      };
      // Ensure React Fast Refresh is enabled
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single',
      };
    }
    
    return config;
  }
};

// Export the configuration with the bundle analyzer wrapper
module.exports = withBundleAnalyzer(nextConfig);