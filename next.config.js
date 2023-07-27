/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["cdn.discordapp.com", "media.discordapp.net", "res.cloudinary.com", "drive.google.com"],
    },
}

module.exports = nextConfig
