// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xvmremjugkmeeowrfwfq.supabase.co',
      },
    ],
  },
  reactStrictMode: true
};

export default nextConfig;

