/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
