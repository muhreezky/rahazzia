/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "ui-avatars.com",
        pathname: "/api/**"
      }
    ],
    dangerouslyAllowSVG: true
  }
}

module.exports = nextConfig
