'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: 'Web Development Intern',
        company: 'LearnFlu',
        period: 'Internship', // Date not provided, using generic term
        description: 'Worked on real-world web application modules, developing responsive UI components and backend integrations. Performed debugging, testing, and followed structured development workflows. Strengthened skills in product development, code quality, and system-level thinking.',
        skills: ['Web Development', 'UI/UX', 'Backend Integration', 'Debugging']
    }
];

export default function Experience() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.experience-item', {
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
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
                    Experience
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="experience-item glass p-8 rounded-3xl border border-electric/20 relative overflow-hidden group hover:border-electric/50 transition-all duration-300"
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-offwhite group-hover:text-electric transition-colors">
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xl text-mutedgray mt-1">
                                            <Briefcase className="w-5 h-5 text-violet" />
                                            <span>{exp.company}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-electric font-semibold glass px-4 py-2 rounded-full self-start md:self-auto">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <p className="text-lg text-offwhite/80 leading-relaxed mb-6">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm glass rounded-full text-violet border border-violet/20"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
