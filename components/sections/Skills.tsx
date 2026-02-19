'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlassCard from '@/components/GlassCard';
import SkillIcon from '@/components/SkillIcon';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        category: 'Programming',
        items: ['Python', 'Basic C'],
        color: 'electric',
    },
    {
        category: 'App & Web',
        items: ['HTML', 'CSS', 'JavaScript', 'Flask', 'PHP', 'Bootstrap'],
        color: 'violet',
    },
    {
        category: 'Databases',
        items: ['SQL', 'MySQL', 'MongoDB'],
        color: 'electric',
    },
    {
        category: 'Cloud & Platforms',
        items: ['AWS (Foundations)', 'Google Colab'],
        color: 'violet',
    },
    {
        category: 'Core CS',
        items: ['Data Structures', 'Algorithms', 'OOP'],
        color: 'electric',
    },
    {
        category: 'Data & Analytics',
        items: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Excel', 'MS Office'],
        color: 'violet',
    },
    {
        category: 'Dev Tools',
        items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
        color: 'electric',
    },
    {
        category: 'Design Tools',
        items: ['Adobe XD', 'Figma', 'Photoshop', 'Canva'],
        color: 'violet',
    },
    {
        category: 'UX Methods',
        items: ['Wireframing', 'Prototyping', 'User Flow', 'Persona Creation', 'Usability Testing'],
        color: 'electric',
    },
    {
        category: 'UI Skills',
        items: ['Layout Design', 'Typography', 'Color Theory', 'Visual Hierarchy', 'Responsive Design'],
        color: 'violet',
    },
];

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.skill-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 80,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                clearProps: 'all',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <GlassCard
                            key={index}
                            className={`skill-card group cursor-hover ${skill.color === 'electric' ? 'hover:glow-electric' : 'hover:glow-violet'
                                }`}
                        >
                            <h3 className={`text-2xl font-bold mb-6 ${skill.color === 'electric' ? 'text-electric' : 'text-violet'
                                }`}>
                                {skill.category}
                            </h3>
                            <ul className="space-y-3">
                                {skill.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="text-offwhite/80 flex items-center gap-3 group-hover:text-offwhite transition-colors"
                                    >
                                        <SkillIcon name={item} className="w-6 h-6" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
