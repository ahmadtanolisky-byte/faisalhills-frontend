import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces .next/standalone/server.js — the entry point Hostinger's
  // Node.js app hosting (and most self-hosted Node platforms) expects.
  // See DEPLOY.md.
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/faisalhills/fhwordpress/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "faisalhillsislamabadfh.com",
        pathname: "/**",
      },
      {
        // Production WordPress backend (adjust if your subdomain differs).
        protocol: "https",
        hostname: "cms.faisalhillsislamabadfh.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
