'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Line-by-line text reveal
            gsap.from('.about-line', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });

            // Glow animation
            gsap.to('.about-glow', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
                opacity: 0.6,
                duration: 2,
                ease: 'power2.inOut',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center py-32 px-6"
        >
            {/* Background glow */}
            <div className="about-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet/10 rounded-full blur-3xl opacity-0" />

            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="about-line text-5xl md:text-6xl font-bold mb-12 gradient-text">
                    About
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-offwhite/90 leading-relaxed">
                    <p className="about-line">
                        Hello, I’m <span className="text-electric font-semibold">K. Nanda Kishore Reddy</span>, a final-year B.Tech student specializing in <span className="text-violet font-semibold">Artificial Intelligence & Data Science</span> at Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology.
                    </p>
                    <p className="about-line">
                        I am passionate about building intelligent, scalable digital systems that combine <span className="text-electric font-semibold">AI, data analytics, and full-stack development</span>. My work focuses on transforming real-world problems into practical, technology-driven solutions — from deep learning–based medical image analysis to fraud detection systems and interactive AI applications.
                    </p>
                </div>

                <div className="mt-12 space-y-6">
                    <h3 className="about-line text-3xl font-bold text-offwhite mb-6">Education</h3>

                    <div className="about-line glass p-6 rounded-2xl border border-electric/20">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h4 className="text-xl font-bold text-electric">Bachelor of Technology in CS (AI & Data Science)</h4>
                            <span className="text-mutedgray">2022 – 2026</span>
                        </div>
                        <p className="text-lg text-offwhite/90">Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology</p>
                        <p className="text-mutedgray mt-1">CGPA: 8.2</p>
                    </div>

                    <div className="about-line glass p-6 rounded-2xl border border-violet/20">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h4 className="text-xl font-bold text-violet">Sri Saraswathi Junior College</h4>
                            <span className="text-mutedgray">2022</span>
                        </div>
                        <p className="text-lg text-offwhite/90">Board of Intermediate Education, Andhra Pradesh</p>
                        <p className="text-mutedgray mt-1">Percentage: 83%</p>
                    </div>

                    <div className="about-line glass p-6 rounded-2xl border border-electric/20">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h4 className="text-xl font-bold text-electric">Sri Mallikarjuna High School</h4>
                            <span className="text-mutedgray">2020</span>
                        </div>
                        <p className="text-lg text-offwhite/90">Board of Secondary Education, Andhra Pradesh</p>
                        <p className="text-mutedgray mt-1">Percentage: 100%</p>
                    </div>
                </div>

                {/* Abstract visual element */}
                <div className="about-line mt-16 flex gap-4">
                    <div className="w-20 h-1 bg-electric rounded-full" />
                    <div className="w-32 h-1 bg-violet rounded-full" />
                    <div className="w-16 h-1 bg-electric rounded-full" />
                </div>
            </div>
        </section>
    );
}
