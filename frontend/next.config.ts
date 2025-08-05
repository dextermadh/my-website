import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
    images: {
    unoptimized: true, // GitHub Pages does not support Image Optimization
  },
  basePath: '/my-website', // Replace with your repo name
  assetPrefix: '/my-website/', // Same as basePath
};

export default nextConfig;
