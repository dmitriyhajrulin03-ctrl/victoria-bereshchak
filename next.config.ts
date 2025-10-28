import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail build on type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
