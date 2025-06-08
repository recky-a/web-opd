/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'standalone',
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
