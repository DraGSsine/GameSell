/** @type {import('next').NextConfig} */
module.exports = {
  distDir:'dist',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'tailwindui.com',
          port: '',
          pathname: '/**/**',
        },
      ],
    },
  }