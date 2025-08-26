import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "mages.unsplash.com" }],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
