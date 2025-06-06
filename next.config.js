/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // ✅ Required for static export
    domains: [
      "worldofweirdthings.com",
      "th.bing.com",
      "media.licdn.com"
    ],
  },
}

module.exports = nextConfig


