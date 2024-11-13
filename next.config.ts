// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xvmremjugkmeeowrfwfq.supabase.co',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;

