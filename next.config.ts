// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // ✅ Recommended

  // Performance tweaks
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    styledComponents: true,
  },

  images: {
    domains: ["marinate360.com", "images.unsplash.com", "res.cloudinary.com"],
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;

