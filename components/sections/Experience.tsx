'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Workflow, PenTool, Palette, FlaskConical } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const designSteps = [
    {
        step: '01',
        title: 'Research & Discovery',
        description: 'Deep-dive into user needs through research, personas, user journeys, and competitive analysis. Understanding the problem before designing the solution.',
        icon: Search,
        skills: ['User Research', 'Personas', 'User Journeys', 'Competitive Analysis'],
    },
    {
        step: '02',
        title: 'Information Architecture',
        description: 'Structuring content and navigation through user flows, sitemaps, and content hierarchy to create intuitive information patterns.',
        icon: Workflow,
        skills: ['User Flows', 'Sitemaps', 'Content Hierarchy', 'Navigation Design'],
    },
    {
        step: '03',
        title: 'Wireframing & Prototyping',
        description: 'Translating research into tangible designs — from low-fidelity wireframes to interactive high-fidelity prototypes in Figma and Adobe XD.',
        icon: PenTool,
        skills: ['Low-Fidelity Wireframes', 'High-Fidelity Prototypes', 'Figma', 'Adobe XD'],
    },
    {
        step: '04',
        title: 'Visual Design',
        description: 'Crafting the visual identity with typography, color theory, design systems, and UI polish that aligns with brand and user expectations.',
        icon: Palette,
        skills: ['Typography', 'Color Theory', 'Design Systems', 'UI Polish'],
    },
    {
        step: '05',
        title: 'Testing & Iteration',
        description: 'Validating designs through usability testing, gathering feedback, running accessibility audits, and iterating toward perfection.',
        icon: FlaskConical,
        skills: ['Usability Testing', 'Feedback Loops', 'Accessibility Audits', 'Iteration'],
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.process-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 50,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                clearProps: 'all',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="py-32 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center gradient-text">
                    Design Process
                </h2>
                <p className="text-center text-mutedgray text-lg mb-16 max-w-2xl mx-auto">
                    My approach to crafting user-centered experiences — a structured workflow from research to delivery.
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-accent to-teal/20 hidden md:block" />

                    <div className="space-y-12">
                        {designSteps.map((item, index) => (
                            <div
                                key={index}
                                className="process-item group relative"
                            >
                                <div className="flex gap-8">
                                    {/* Step Number & Icon */}
                                    <div className="hidden md:flex flex-col items-center">
                                        <div className="w-16 h-16 glass border border-electric/30 rounded-2xl flex items-center justify-center group-hover:border-electric group-hover:bg-electric/10 transition-all duration-300 relative z-10">
                                            <item.icon className="w-7 h-7 text-electric group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 glass p-8 rounded-3xl border border-electric/20 group-hover:border-electric/50 transition-all duration-300 relative overflow-hidden">
                                        {/* Decorative background */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-electric/50 text-sm font-mono tracking-wider">STEP {item.step}</span>
                                                <div className="md:hidden">
                                                    <item.icon className="w-5 h-5 text-electric" />
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-offwhite group-hover:text-electric transition-colors mb-4">
                                                {item.title}
                                            </h3>

                                            <p className="text-lg text-offwhite/80 leading-relaxed mb-6">
                                                {item.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {item.skills.map((skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-sm glass rounded-full text-accent border border-accent/20"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
