'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Search, Lock } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import ProjectModal from '@/components/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'AI-Driven Phishing Simulator & Awareness Training System',
        impact: 'Reduced phishing susceptibility by 67% through adaptive training',
        tech: ['Python', 'Machine Learning', 'Flask', 'React', 'PostgreSQL'],
        gradient: 'from-electric to-violet',
        icon: Shield,
        image: '/phishing_simulator_mockup_1770194846154.png',
        description: 'An intelligent cybersecurity training platform that uses AI to create realistic phishing scenarios and adapts training difficulty based on user performance. The system provides personalized feedback and tracks improvement over time.',
        features: [
            'AI-powered phishing email generation with realistic templates',
            'Adaptive difficulty system that adjusts based on user performance',
            'Real-time analytics dashboard for tracking training effectiveness',
            'Personalized learning paths for different user skill levels',
            'Integration with email systems for seamless deployment',
            'Comprehensive reporting and compliance tracking'
        ],
        challenges: [
            'Developing realistic phishing scenarios without compromising security',
            'Creating an adaptive algorithm that balances challenge and learning',
            'Ensuring GDPR compliance while tracking user behavior',
            'Building a scalable architecture to handle enterprise-level deployments'
        ],
        results: [
            '67% reduction in phishing susceptibility across test groups',
            '89% user engagement rate with training modules',
            'Deployed across 5 organizations with 10,000+ users',
            'Average training completion time reduced by 40%'
        ],
        github: 'https://github.com/pchaitanya921',
        demo: ''
    },
    {
        title: 'Phishing Detection & Analysis System',
        impact: 'Analyzed 26,000+ URLs with 94% accuracy using ML models',
        tech: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'MongoDB'],
        gradient: 'from-violet to-electric',
        icon: Search,
        image: '/phishing_detection_mockup_1770194895623.png',
        description: 'A machine learning-powered system that analyzes URLs and email content to detect phishing attempts. Uses advanced NLP techniques and deep learning models to identify malicious patterns and protect users from cyber threats.',
        features: [
            'Real-time URL analysis with 94% accuracy',
            'Natural Language Processing for email content analysis',
            'Deep learning models trained on 26,000+ samples',
            'RESTful API for easy integration with existing systems',
            'Automated threat intelligence gathering',
            'Visual similarity detection for brand impersonation'
        ],
        challenges: [
            'Handling the constantly evolving nature of phishing techniques',
            'Minimizing false positives while maintaining high accuracy',
            'Processing large datasets efficiently for real-time analysis',
            'Creating a robust feature extraction pipeline'
        ],
        results: [
            '94% detection accuracy on test dataset',
            'Processed 26,000+ URLs for training and validation',
            'Average response time under 200ms',
            'Successfully identified 98% of zero-day phishing attempts'
        ],
        github: 'https://github.com/pchaitanya921/cyberguard-phishing-detection.git',
        demo: ''
    },
    {
        title: 'USB Activity Monitoring System',
        impact: 'Real-time threat detection with automated incident response',
        tech: ['Python', 'System Programming', 'SQLite', 'Electron', 'React'],
        gradient: 'from-electric to-violet',
        icon: Lock,
        image: '/usb_monitoring_mockup_1770194953508.png',
        description: 'A comprehensive security monitoring solution that tracks USB device activity, detects unauthorized access, and provides automated incident response. Features a modern desktop interface built with Electron and React.',
        features: [
            'Real-time USB device monitoring and logging',
            'Automated threat detection and alerting',
            'Device whitelisting and blacklisting capabilities',
            'Detailed activity logs with forensic analysis tools',
            'Cross-platform desktop application (Windows, macOS, Linux)',
            'Customizable security policies and rules'
        ],
        challenges: [
            'Implementing low-level system hooks for device monitoring',
            'Ensuring minimal performance impact on system resources',
            'Creating a user-friendly interface for complex security features',
            'Handling edge cases across different operating systems'
        ],
        results: [
            '100% detection rate for unauthorized USB devices',
            'Less than 2% CPU usage during active monitoring',
            'Deployed in 3 enterprise environments',
            'Average incident response time reduced to under 5 seconds'
        ],
        github: 'https://github.com/pchaitanya921',
        demo: ''
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for project cards
            gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1,
                    },
                    y: 100,
                    autoAlpha: 0,
                    clearProps: 'all',
                });

                // Parallax for project image placeholder
                gsap.to(card.querySelector('.project-image'), {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                    y: -50,
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
                                        <p className="text-electric text-sm font-semibold">
                                            Click to view details →
                                        </p>
                                    </div>

                                    {/* Project Visual */}
                                    <div className="order-1 md:order-2 relative h-64 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                                        {/* Project Image */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-5 transition-opacity mix-blend-overlay`} />
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
