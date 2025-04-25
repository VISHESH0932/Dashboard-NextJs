/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack(config: { resolve: { fallback: any; }; }) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      v8: false,
    };
    return config;
  },
};

module.exports = nextConfig;
