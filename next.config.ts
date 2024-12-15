const nextConfig = {
  reactStrictMode: true,
  rewrites() {
    return [
      { source: '/favicon.ico', destination: '/path/to/some/other/file' },
    ];
  },
};

export default nextConfig;
