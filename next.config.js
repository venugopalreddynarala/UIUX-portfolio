/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    experimental: {
        optimizePackageImports: ['framer-motion', 'gsap'],
    },
}

export default nextConfig
