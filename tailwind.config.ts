import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                graphite: {
                    DEFAULT: '#0A0A0F',
                    light: '#13131A',
                },
                surface: '#1A1A24',
                electric: {
                    DEFAULT: '#6C63FF',
                    light: '#8B85FF',
                    dark: '#4F46E5',
                },
                accent: {
                    DEFAULT: '#FF6B9D',
                    light: '#FF8FB3',
                },
                teal: {
                    DEFAULT: '#2DD4BF',
                    light: '#5EEAD4',
                },
                violet: {
                    DEFAULT: '#A78BFA',
                    light: '#C4B5FD',
                    dark: '#7C3AED',
                },
                offwhite: '#F0F0F5',
                mutedgray: '#8B8B9E',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
                'glow': 'glow 3s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                },
                glow: {
                    '0%': {
                        'box-shadow': '0 0 20px rgba(108, 99, 255, 0.2), 0 0 60px rgba(167, 139, 250, 0.1)',
                    },
                    '100%': {
                        'box-shadow': '0 0 30px rgba(108, 99, 255, 0.4), 0 0 80px rgba(255, 107, 157, 0.15)',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-20px)',
                    },
                },
                marquee: {
                    '0%': {
                        transform: 'translateX(0%)',
                    },
                    '100%': {
                        transform: 'translateX(-50%)',
                    },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;
