/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com, 64.media.tumblr.com', 'i.pinimg.com'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
