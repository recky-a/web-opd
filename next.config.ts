/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'standalone',

  compress: true,
  // TODO: remove/modify these remote patterns later because will use production service/storage
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.pexels.com',
      },
      {
        protocol: 'https',
        hostname: '**.youtube.com',
      },
    ],
  },

  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
