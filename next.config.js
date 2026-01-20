/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sumostrength.com.au',
      },
      {
        protocol: 'https',
        hostname: 'i5.walmartimages.com',
      },
      {
        protocol: 'https',
        hostname: 'befitnow.ca',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ebayimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.i-running.sg',
      },
      {
        protocol: 'https',
        hostname: 'www.littleblokefitness.com.au',
      },
      {
        protocol: 'https',
        hostname: 'www.smai.com.au',
      },
      {
        protocol: 'https',
        hostname: 'sc04.alicdn.com',
      },
    ],
  },
}

module.exports = nextConfig