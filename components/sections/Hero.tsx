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

            gsap.from('.hero-image', {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: 'power3.out',
            });

            // Floating design elements
            gsap.to('.design-float-1', {
                y: -15,
                rotation: 5,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });

            gsap.to('.design-float-2', {
                y: 10,
                rotation: -3,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
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

            {/* Floating UI/UX design elements */}
            <div className="design-float-1 absolute top-20 right-20 hidden lg:block">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                    <rect x="5" y="5" width="50" height="50" rx="8" stroke="#5B7CFF" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="15" cy="15" r="3" fill="#9B5CFF" />
                    <rect x="12" y="25" width="36" height="4" rx="2" fill="#5B7CFF" opacity="0.5" />
                    <rect x="12" y="33" width="24" height="4" rx="2" fill="#5B7CFF" opacity="0.3" />
                </svg>
            </div>
            <div className="design-float-2 absolute bottom-32 left-16 hidden lg:block">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
                    <path d="M25 5L45 15V35L25 45L5 35V15L25 5Z" stroke="#9B5CFF" strokeWidth="2" />
                    <circle cx="25" cy="25" r="6" fill="#5B7CFF" opacity="0.4" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Headline */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            <span className="hero-title inline-block">Hi, I&apos;m</span>{' '}
                            <span className="hero-title inline-block gradient-text">Narala Venu Gopal Reddy</span>
                        </h1>

                        {/* Subtext */}
                        <p className="hero-subtitle text-lg md:text-xl text-offwhite/80 mb-8 max-w-xl mx-auto lg:mx-0">
                            UI/UX Designer crafting end-to-end product flows — from user research and wireframes to high-fidelity prototypes. Strong in Figma, Adobe XD &amp; design systems.
                        </p>

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
                                href="/UIUX_Resume.pdf"
                                download="Narala_Venu_Gopal_Reddy_UIUX_Resume.pdf"
                                className="hero-cta px-8 py-4 glass border-2 border-electric/50 text-offwhite rounded-full font-semibold text-lg hover:border-electric hover:bg-electric/10 transition-all duration-300 shadow-lg"
                            >
                                Download Resume
                            </MagneticButton>
                        </div>

                        {/* Social Media Links */}
                        <div className="hero-subtitle flex gap-4 justify-center lg:justify-start mt-6">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/venugopalreddynarala/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 glass border border-electric/30 rounded-full flex items-center justify-center hover:border-electric hover:bg-electric/10 transition-all duration-300 cursor-hover group"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5 text-offwhite/70 group-hover:text-electric transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            {/* Portfolio */}
                            <a
                                href="https://venugopalreddynarala.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 glass border border-electric/30 rounded-full flex items-center justify-center hover:border-electric hover:bg-electric/10 transition-all duration-300 cursor-hover group"
                                aria-label="Portfolio Website"
                            >
                                <svg className="w-5 h-5 text-offwhite/70 group-hover:text-electric transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:naralavenugopalreddy@gmail.com"
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
                                    src="/profile.png"
                                    alt="Narala Venu Gopal Reddy — UI/UX Designer"
                                    fill
                                    className="object-cover object-center scale-125"
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
