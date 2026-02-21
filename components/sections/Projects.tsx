'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Smartphone, Layout, CreditCard, Package } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import ProjectModal from '@/components/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Food Delivery App UI Design',
        impact: 'Multi-screen mobile app — Home, Menu & Checkout with intuitive UX',
        tech: ['Adobe XD', 'Wireframing', 'Prototyping', 'Color Theory', 'Typography'],
        gradient: 'from-electric to-violet',
        icon: Smartphone,
        image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80',
        description: 'Designed a multi-screen mobile application flow consisting of Home, Menu, and Checkout screens with a strong focus on simplicity, usability, and visual hierarchy. Created wireframes and high-fidelity prototypes in Adobe XD, applying principles of color theory, typography, and icon consistency to enhance the overall user experience.',
        features: [
            'Multi-screen mobile application flow',
            'Home, Menu, and Checkout screen designs',
            'Wireframes and high-fidelity prototypes in Adobe XD',
            'Color theory and typography principles applied',
            'Consistent icon system for enhanced UX',
        ],
        challenges: [
            'Balancing visual hierarchy across multiple screens',
            'Ensuring seamless navigation between app sections',
            'Maintaining consistency in design tokens and spacing',
        ],
        results: [
            'Clean, usable multi-screen mobile experience',
            'Strong visual hierarchy enhancing user flow',
            'Consistent design language across all screens',
        ],
        github: '',
        demo: '',
    },
    {
        title: 'Quiz App UI/UX Design',
        impact: 'Engaging quiz interface with focus on clarity & micro-interactions',
        tech: ['Adobe XD', 'User Flows', 'Prototyping', 'Color Psychology', 'Micro-interactions'],
        gradient: 'from-violet to-electric',
        icon: Layout,
        image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80',
        description: 'Designed an engaging Quiz App interface to enhance user learning and participation. Created complete user flows and high-fidelity prototypes in Adobe XD, focusing on clarity, usability, and visual consistency. Applied color psychology, typography hierarchy, and subtle micro-interactions to deliver an intuitive and enjoyable user experience.',
        features: [
            'Complete user flows for quiz interaction',
            'High-fidelity prototypes in Adobe XD',
            'Color psychology applied for engagement',
            'Typography hierarchy for readability',
            'Subtle micro-interactions for delight',
        ],
        challenges: [
            'Designing for varied content lengths and question types',
            'Creating engaging progress indicators',
            'Balancing gamification with usability',
        ],
        results: [
            'Intuitive and enjoyable quiz experience',
            'Strong visual consistency across screens',
            'Enhanced user engagement through micro-interactions',
        ],
        github: '',
        demo: '',
    },
    {
        title: 'Portfolio Website UI/UX Design',
        impact: 'Responsive personal portfolio — clean, modern & accessible',
        tech: ['Figma', 'Wireframing', 'Responsive Design', 'Accessibility', 'Design Systems'],
        gradient: 'from-electric to-violet',
        icon: Palette,
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        description: 'Designed a responsive personal portfolio website to showcase design projects and case studies. Created wireframes and high-fidelity mockups in Figma, maintaining a clean, modern, and minimal aesthetic. Applied accessibility principles such as proper contrast, spacing, and readable typography to ensure an inclusive and user-friendly experience.',
        features: [
            'Responsive personal portfolio design',
            'Wireframes and high-fidelity mockups in Figma',
            'Clean, modern, and minimal aesthetic',
            'Accessibility-first design approach',
            'Proper contrast, spacing, and typography',
        ],
        challenges: [
            'Designing for multiple screen sizes responsively',
            'Balancing minimal aesthetic with rich content',
            'Meeting WCAG accessibility standards',
        ],
        results: [
            'Inclusive and user-friendly portfolio experience',
            'Clean, responsive design across all devices',
            'Strong accessibility compliance',
        ],
        github: '',
        demo: '',
    },
    {
        title: 'Personal Finance Tracker Mobile App',
        impact: 'Income, expense & savings tracker with intuitive navigation',
        tech: ['Adobe XD', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
        gradient: 'from-violet to-electric',
        icon: CreditCard,
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
        description: 'Designed a mobile application that helps users monitor income, expenses, and savings with ease. Conducted user research to identify budgeting pain points and crafted intuitive navigation flows. Created high-fidelity prototypes in Adobe XD, applying consistent design systems, responsive layouts, and accessibility principles to enhance the overall user experience.',
        features: [
            'User research to identify budgeting pain points',
            'Intuitive navigation flow design',
            'High-fidelity prototypes in Adobe XD',
            'Consistent design system application',
            'Responsive layouts with accessibility principles',
        ],
        challenges: [
            'Simplifying complex financial data visualization',
            'Designing intuitive budget categorization',
            'Ensuring accessibility for financial literacy users',
        ],
        results: [
            'Research-backed intuitive finance tracking experience',
            'Consistent design system across all screens',
            'Accessible and responsive mobile design',
        ],
        github: '',
        demo: '',
    },
    {
        title: 'Food Delivery UI Kit — End-to-End Prototyping',
        impact: 'Reusable design system with interactive prototypes in Figma',
        tech: ['Figma', 'Design Systems', 'Interactive Prototyping', 'Component Library', 'Auto Layout'],
        gradient: 'from-electric to-violet',
        icon: Package,
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
        description: 'Created interactive prototypes for core user flows including product browsing, cart management, checkout, and order tracking. Developed reusable components and a structured design system to ensure consistency, scalability, and efficient handoff.',
        features: [
            'Interactive prototypes for core user flows',
            'Product browsing, cart, checkout & order tracking',
            'Reusable component library in Figma',
            'Structured design system for scalability',
            'Efficient design-to-developer handoff',
        ],
        challenges: [
            'Building a scalable component architecture',
            'Ensuring prototype interactions feel realistic',
            'Maintaining design system consistency across flows',
        ],
        results: [
            'Scalable and reusable design system',
            'Realistic interactive prototypes',
            'Efficient handoff-ready component library',
        ],
        github: '',
        demo: '',
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    clearProps: 'all',
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleProjectClick = (project: typeof projects[0]) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <>
            <section id="projects" ref={sectionRef} className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
                        Featured Projects
                    </h2>

                    <div className="space-y-12">
                        {projects.map((project, index) => (
                            <GlassCard
                                key={index}
                                className="project-card group cursor-hover overflow-hidden hover:border-electric/50 transition-all duration-300"
                                variant="strong"
                            >
                                <div
                                    className="grid md:grid-cols-2 gap-8 items-center cursor-pointer"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    {/* Project Info */}
                                    <div className="order-2 md:order-1">
                                        <h3 className="text-3xl font-bold mb-4 text-offwhite group-hover:text-electric transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-lg text-mutedgray mb-6">{project.impact}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-sm glass rounded-full text-offwhite/80 border border-electric/20"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-electric text-sm font-semibold group-hover:translate-x-2 transition-transform">
                                            Click to view details <span className="text-lg">→</span>
                                        </div>
                                    </div>

                                    {/* Project Visual */}
                                    <div className="order-1 md:order-2 relative h-64 rounded-xl overflow-hidden group-hover:shadow-[0_0_30px_rgba(91,124,255,0.3)] transition-all duration-500">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        {/* Gradient overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-25 transition-opacity duration-500`} />
                                        {/* Icon overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <project.icon className="w-16 h-16 text-white/40 group-hover:text-white/70 transition-all duration-500 group-hover:scale-110 transform drop-shadow-lg" />
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    project={selectedProject}
                />
            )}
        </>
    );
}
