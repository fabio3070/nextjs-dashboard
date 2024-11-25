import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* enables Partial Prerendering */
  experimental: {
    ppr: 'incremental',
  },
};

export default nextConfig;
