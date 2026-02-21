'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CertificationModal from '@/components/CertificationModal';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
    {
        name: 'Google UX Design Professional Certificate',
        issuer: 'Google',
        year: 'Completed',
        highlight: true,
        image: '',
        logo: '',
        description: 'Comprehensive UX Design program covering the full design process — from empathizing with users and defining pain points, to ideating, prototyping, and testing designs. Includes hands-on projects in Figma and Adobe XD.',
        skills: ['UX Design', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
        credentialUrl: '',
    },
    {
        name: 'IBM UI/UX Designer Professional Certificate',
        issuer: 'IBM',
        year: 'Completed',
        highlight: true,
        image: '',
        logo: '',
        description: 'Professional certification covering UI/UX design principles, design thinking, user research, and practical application of design tools for creating user-centered digital experiences.',
        skills: ['UI Design', 'UX Design', 'Design Thinking', 'User-Centered Design'],
        credentialUrl: '',
    },
    {
        name: 'Capstone: Applying UI/UX Design in the Real World',
        issuer: 'IBM',
        year: 'Completed',
        highlight: false,
        image: '',
        logo: '',
        description: 'Capstone project applying UI/UX design principles to a real-world scenario, demonstrating end-to-end design process from research to high-fidelity prototyping.',
        skills: ['Real-World Application', 'End-to-End Design', 'Prototyping'],
        credentialUrl: '',
    },
    {
        name: 'UX Research and Information Architecture',
        issuer: 'IBM',
        year: 'Completed',
        highlight: false,
        image: '',
        logo: '',
        description: 'Focused certification on UX research methodologies, information architecture principles, content strategy, and structuring digital experiences for optimal usability.',
        skills: ['UX Research', 'Information Architecture', 'Content Strategy'],
        credentialUrl: '',
    },
    {
        name: 'Introduction to Agile Development and Scrum',
        issuer: 'IBM',
        year: 'Completed',
        highlight: false,
        image: '',
        logo: '',
        description: 'Foundation course on Agile development methodologies and Scrum framework, essential for working effectively in product-driven design teams.',
        skills: ['Agile', 'Scrum', 'Product Development', 'Team Collaboration'],
        credentialUrl: '',
    },
    {
        name: 'Generative AI: The Future of UX UI Design',
        issuer: 'SkillUp',
        year: 'Completed',
        highlight: false,
        image: '',
        logo: '',
        description: 'Exploration of how generative AI is transforming the UX/UI design landscape, covering AI-assisted design tools, automated prototyping, and the future of human-AI collaboration in design.',
        skills: ['Generative AI', 'AI in Design', 'Future of UX', 'Innovation'],
        credentialUrl: '',
    },
];

export default function Certifications() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cert-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                x: -50,
                autoAlpha: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                clearProps: 'all',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleCertClick = (cert: typeof certifications[0]) => {
        setSelectedCert(cert);
        setIsModalOpen(true);
    };

    return (
        <section id="certifications" ref={sectionRef} className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center gradient-text">
                    Certifications
                </h2>

                <div className="space-y-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => handleCertClick(cert)}
                            className={`cert-item group cursor-hover p-6 rounded-xl border transition-all duration-300 cursor-pointer ${cert.highlight
                                ? 'border-accent bg-accent/5 hover:bg-accent/10 hover:glow-accent'
                                : 'border-mutedgray/20 hover:border-electric/50 hover:bg-electric/5'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-offwhite group-hover:text-electric transition-colors">
                                        {cert.name}
                                    </h3>
                                    <p className="text-mutedgray mt-1">{cert.issuer}</p>
                                </div>
                                <div className="text-electric font-semibold text-lg">{cert.year}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Certification Modal */}
            {selectedCert && (
                <CertificationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    certification={selectedCert}
                />
            )}
        </section>
    );
}
