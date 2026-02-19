'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import MagneticButton from '@/components/MagneticButton';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered text reveal animation
            gsap.from('.hero-title', {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power4.out',
                stagger: 0.1,
            });

            gsap.from('.hero-subtitle', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power3.out',
            });

            // CTA buttons - always visible (no animation)
            // gsap.from('.hero-cta', {
            //     y: 30,
            //     opacity: 0,
            //     duration: 0.6,
            //     delay: 0.4,
            //     stagger: 0.15,
            //     ease: 'power2.out',
            // });

            gsap.from('.hero-image', {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: 'power3.out',
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
        >
            {/* Animated gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Small intro */}
                        <p className="hero-subtitle text-lg text-electric mb-4 font-semibold">
                            Hi, I'm
                        </p>

                        {/* Name */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            <span className="hero-title inline-block">Kamireddy</span>{' '}
                            <span className="hero-title inline-block">Nanda</span>{' '}
                            <span className="hero-title inline-block">Kishore</span>{' '}
                            <span className="hero-title inline-block gradient-text">Reddy</span>
                        </h1>

                        {/* Student Badge */}
                        <div className="hero-subtitle inline-flex items-center gap-2 px-4 py-2 glass border border-electric/30 rounded-full mb-8">
                            <span className="text-electric text-2xl">🎓</span>
                            <span className="text-offwhite/90 font-medium">CS (AI & Data Science) Student</span>
                        </div>

                        {/* CTAs */}
                        <div className="relative z-20 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                            <MagneticButton
                                onClick={() => {
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="hero-cta px-8 py-4 bg-electric text-white rounded-full font-semibold text-lg hover:bg-electric-light transition-all duration-300 glow-electric shadow-lg"
                            >
                                View Projects
                            </MagneticButton>

                            <MagneticButton
                                href="#"
                                download="Nanda_Kishore_Reddy_Resume.pdf"
                                className="hero-cta px-8 py-4 glass border-2 border-electric/50 text-offwhite rounded-full font-semibold text-lg hover:border-electric hover:bg-electric/10 transition-all duration-300 shadow-lg"
                            >
                                Download Resume
                            </MagneticButton>
                        </div>

                        {/* Social Media Links */}
                        <div className="hero-subtitle flex gap-4 justify-center lg:justify-start mt-6">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/kishorereddy1212/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 glass border border-electric/30 rounded-full flex items-center justify-center hover:border-electric hover:bg-electric/10 transition-all duration-300 cursor-hover group"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 text-offwhite/70 group-hover:text-electric transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/Kishorereddy-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 glass border border-electric/30 rounded-full flex items-center justify-center hover:border-electric hover:bg-electric/10 transition-all duration-300 cursor-hover group"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5 text-offwhite/70 group-hover:text-electric transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:kishorereddykamireddy9@gmail.com"
                                className="w-12 h-12 glass border border-electric/30 rounded-full flex items-center justify-center hover:border-electric hover:bg-electric/10 transition-all duration-300 cursor-hover group"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5 text-offwhite/70 group-hover:text-electric transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>

                        {/* Location */}
                        <p className="hero-subtitle mt-8 text-mutedgray text-sm tracking-wider uppercase">
                            📍 Andhra Pradesh, India
                        </p>
                    </div>

                    {/* Right - Profile Image */}
                    <div className="hero-image relative flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-electric to-violet opacity-40 blur-3xl" />

                            {/* Image container - enhanced border */}
                            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[6px] border-electric/60 shadow-2xl shadow-electric/30">
                                <Image
                                    src="/profile.jpg"
                                    alt="Kamireddy Nanda Kishore Reddy"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    unoptimized
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-electric/30 rounded-full" />
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-violet/30 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-electric/50 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-electric rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
