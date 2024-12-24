const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,  // This will ignore TypeScript errors during the build
  },
  rewrites() {
    return [
      { source: '/favicon.ico', destination: '/path/to/some/other/file' },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',  // Use the correct hostname
        port: '',
        pathname: '/**',  // Allow all paths under this domain
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',  // New hostname added
        port: '',
        pathname: '/**',  // Allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;
