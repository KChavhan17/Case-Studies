/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-supabase-project.supabase.co',
      },
    ],
  },
  async redirects() {
    return [
      // Add your redirects here
    ];
  },
};

module.exports = nextConfig;

