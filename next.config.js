/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    experimental: {
        optimizePackageImports: ['framer-motion', 'gsap'],
    },
}

export default nextConfig
