import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/login", destination: "/auth/login" },
      { source: "/signup", destination: "/auth/signup" },
    ];
  },
};

module.exports = nextConfig;
