/** @type {import('next').NextConfig} */
const nextConfig = {
    swcPlugins: [
        ["next-superjson-plugin", {}]
    ],
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "https://kapi.kakao.com/v2/user/me",
        ]
    }
}

module.exports = nextConfig
