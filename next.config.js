/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl: "http://localhost:1337"
  },
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
