'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Search, Lock, Activity, MousePointer, CreditCard, Box } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import ProjectModal from '@/components/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'AI-Powered X-Ray Visualization and Pneumonia Detection',
        impact: 'Automated pneumonia detection with visual explainability',
        tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
        gradient: 'from-electric to-violet',
        icon: Activity,
        image: '/pneumonia_detection.jpg', // Placeholder for now, can be updated later
        description: 'Designed and deployed an end-to-end AI product to detect pneumonia from chest X-ray images using deep learning. Integrated Grad-CAM explainability to generate visual heatmaps for clinical interpretation.',
        features: [
            'End-to-end AI pipeline for X-ray analysis',
            'Deep learning model for pneumonia detection',
            'Grad-CAM integration for visual heatmaps',
            'Flask-based web application for real-time predictions',
            'Real-time image uploads and processing'
        ],
        challenges: [
            'Improving model accuracy on diverse datasets',
            'Implementing Grad-CAM for transparent model decisions',
            'Optimizing inference time for real-time usage'
        ],
        results: [
            'Successfully detected pneumonia from X-ray images',
            'Provided visual heatmaps for clinical interpretation',
            'Deployed as a real-time web application'
        ],
        github: '',
        demo: ''
    },
    {
        title: 'Smart Cursor Control System',
        impact: 'Hands-free cursor control for differently-abled users',
        tech: ['Python', 'OpenCV', 'MediaPipe'],
        gradient: 'from-violet to-electric',
        icon: MousePointer,
        image: '/cursor_control.jpg', // Placeholder
        description: 'Developed an AI-driven human-computer interaction system enabling hands-free cursor control through facial landmark tracking. Translated real-time video input into system-level actions using computer vision.',
        features: [
            'Facial landmark tracking for cursor movement',
            'Hands-free interaction for differently-abled users',
            'Real-time video processing',
            'System-level action translation (click, scroll)'
        ],
        challenges: [
            'Ensuring precise cursor control via facial movements',
            'Minimizing latency in video processing',
            'Handling different lighting conditions'
        ],
        results: [
            'Enabled hands-free computer control',
            'High accuracy in facial tracking',
            'Strong alignment with XR/immersive interaction systems'
        ],
        github: '',
        demo: ''
    },
    {
        title: 'Intelligent Payment Fraud Detection System',
        impact: 'Detects fraudulent transactions using ML',
        tech: ['Python', 'Scikit-learn', 'Pandas'],
        gradient: 'from-electric to-violet',
        icon: CreditCard,
        image: '/fraud_detection.jpg', // Placeholder
        description: 'Built a machine learning pipeline to detect fraudulent financial transactions using classification algorithms. Implemented data preprocessing, feature engineering, and performance evaluation to improve model accuracy and reduce false positives.',
        features: [
            'ML pipeline for fraud detection',
            'Data preprocessing and feature engineering',
            'Classification algorithms for transaction analysis',
            'Performance evaluation metrics'
        ],
        challenges: [
            'Handling imbalanced datasets',
            'Reducing false positives while maintaining high detection rate',
            'Optimizing feature selection for model performance'
        ],
        results: [
            'Improved model accuracy',
            'Reduced false positives',
            'Effective detection of fraudulent patterns'
        ],
        github: '',
        demo: ''
    },
    {
        title: 'Inventory Management Web Application',
        impact: 'Role-based inventory and user management',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        gradient: 'from-violet to-electric',
        icon: Box,
        image: '/inventory_management.jpg', // Placeholder
        description: 'Developed a full-stack digital product with role-based authentication and complete CRUD operations for managing inventory and users. Designed responsive UI and integrated backend database for real-time updates.',
        features: [
            'Role-based authentication system',
            'Complete CRUD operations for inventory',
            'User management functionality',
            'Responsive UI design',
            'Real-time database updates'
        ],
        challenges: [
            'Implementing secure role-based access control',
            'Ensuring data consistency across real-time updates',
            'Designing a user-friendly responsive interface'
        ],
        results: [
            'Streamlined inventory management process',
            'Secure user authentication and role management',
            'Efficient real-time data handling'
        ],
        github: '',
        demo: ''
    },
    {
        title: 'AttendEase – Role-Based Employee Attendance Management System',
        impact: 'Secure MERN stack attendance tracking with analytics',
        tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
        gradient: 'from-electric to-violet',
        icon: Shield,
        image: '/attendease.jpg', // Placeholder
        description: 'Developed a full-stack role-based Employee Attendance System using the MERN stack. Designed to digitally manage employee attendance with support for Employee and Manager roles. Managers can monitor team performance, generate reports, and export CSV files, while employees can mark daily attendance and view summaries.',
        features: [
            'Role-Based Access Control (Employee & Manager)',
            'Secure JWT Authentication & bcryptjs hashing',
            'Attendance Trend Analysis & Visualizations',
            'CSV Report Generation for Managers',
            'Real-time Dashboard with Recharts',
            'Protected Routes & Middleware'
        ],
        challenges: [
            'Implementing secure role-based access control and JWT auth',
            'Optimizing MongoDB queries for attendance analytics',
            'Designing dynamic dashboard visualizations for real-time monitoring'
        ],
        results: [
            'Efficient digital attendance management',
            'Secure and scalable authentication system',
            'Actionable insights via data visualization and reports'
        ],
        github: '',
        demo: ''
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple fade-in animation for project cards
            gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%', // Trigger slightly earlier
                        toggleActions: 'play none none reverse', // Play once, reverse on scroll up
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
                                        {/* Project Image */}
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Gradient Overlay - Reduced opacity for better visibility */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-10 transition-opacity mix-blend-overlay`} />
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
