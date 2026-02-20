'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Lock, Activity, MousePointer, CreditCard, Box, Video, UserCheck } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import ProjectModal from '@/components/ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'AI-Powered X-Ray Visualization and Pneumonia Detection',
        impact: 'End-to-end AI system: data → model → explainability → UI',
        tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Flask'],
        gradient: 'from-electric to-violet',
        icon: Activity,
        image: '/pneumonia_detection.jpg', // Placeholder for now, can be updated later
        description: 'Designed and deployed an end-to-end AI product to detect pneumonia from chest X-ray images using deep learning. Integrated Grad-CAM explainability to generate visual heatmaps for clinical interpretation. Built a Flask-based web application enabling real-time image uploads and predictions.',
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
        github: 'https://github.com/venugopalreddynarala/AI-POWERED-X-RAY-VISUALIZATION-AND-DAMAGE-DETECTION-FOR-PNEUMONIA',
        demo: ''
    },
    {
        title: 'Smart Cursor Control System for Differently-Abled Users',
        impact: 'Hands-free cursor control with strong XR/immersive interaction alignment',
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
        github: 'https://github.com/venugopalreddynarala/Smart-Cursor-Control-System-for-Differently-Abled-Users',
        demo: ''
    },
    {
        title: 'Intelligent Payment Fraud Detection System',
        impact: 'ML pipeline to detect fraudulent financial transactions',
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
        github: 'https://github.com/venugopalreddynarala/online-payment-fraud-detection-ml',
        demo: ''
    },
    {
        title: 'Inventory Management Web Application',
        impact: 'Full-stack digital product with role-based authentication & CRUD',
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
        github: 'https://github.com/venugopalreddynarala/inventory',
        demo: ''
    },
    {
        title: 'AI Video Intelligence Surveillance System',
        impact: 'Real-time AI-powered video analytics for intelligent surveillance',
        tech: ['Python', 'OpenCV', 'Deep Learning', 'YOLO', 'TensorFlow'],
        gradient: 'from-electric to-violet',
        icon: Video,
        image: '/ai_surveillance.svg',
        description: 'Developed an AI-powered video intelligence surveillance system capable of real-time object detection, tracking, and anomaly recognition. Leveraged deep learning models for automated monitoring and alert generation from live video feeds.',
        features: [
            'Real-time object detection and tracking',
            'Anomaly detection in video feeds',
            'Automated alert generation',
            'Deep learning-based video analytics',
            'Live video stream processing'
        ],
        challenges: [
            'Processing high-resolution video in real-time',
            'Minimizing false positive alerts',
            'Optimizing model inference for live feeds'
        ],
        results: [
            'Real-time surveillance with AI-driven insights',
            'Accurate object detection and tracking',
            'Efficient anomaly detection and alerting'
        ],
        github: 'https://github.com/venugopalreddynarala/AI-VIDEO-INTELLIGENCE-SURVEILLANCE-SYSTEM',
        demo: ''
    },
    {
        title: 'Smart Attendance System',
        impact: 'Automated attendance tracking with face recognition technology',
        tech: ['Python', 'OpenCV', 'Face Recognition', 'Flask', 'MySQL'],
        gradient: 'from-violet to-electric',
        icon: UserCheck,
        image: '/attendance_system.svg',
        description: 'Built an intelligent attendance management system using face recognition technology. The system automates attendance tracking by identifying individuals through real-time facial detection and matching, eliminating manual roll calls and reducing errors.',
        features: [
            'Real-time face detection and recognition',
            'Automated attendance marking',
            'Database integration for record management',
            'Web-based dashboard for attendance reports',
            'Multi-user support with facial enrollment'
        ],
        challenges: [
            'Handling varying lighting conditions for accurate recognition',
            'Optimizing face matching speed for real-time use',
            'Managing large datasets of facial encodings efficiently'
        ],
        results: [
            'Automated attendance tracking with high accuracy',
            'Eliminated manual roll-call errors',
            'Streamlined attendance management workflow'
        ],
        github: 'https://github.com/venugopalreddynarala/attendance-system',
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
