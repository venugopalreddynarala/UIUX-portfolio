'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CertificationModal from '@/components/CertificationModal';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
    {
        name: 'AWS Academy Cloud Foundations',
        issuer: 'AWS',
        year: 'Graduate',
        highlight: true,
        image: '/aws_certificate.png',
        logo: '/aws_logo.png',
        description: 'Fundamental understanding of AWS Cloud concepts, security, architecture, pricing, and support.',
        skills: ['Cloud Computing', 'AWS Services', 'Security', 'Architecture'],
        credentialUrl: '',
    },
    {
        name: 'Python & Networking',
        issuer: 'Cisco',
        year: 'Completed',
        highlight: false,
        image: '/cisco_certificate.png',
        logo: '/cisco_logo.png',
        description: 'Certification in Python programming and networking fundamentals from Cisco.',
        skills: ['Python', 'Networking', 'Programming'],
        credentialUrl: '',
    },
    {
        name: 'Data Science',
        issuer: 'Wipro TalentNext',
        year: 'Completed',
        highlight: false,
        image: '/wipro_datascience.png',
        logo: '/wipro_logo.png',
        description: 'Comprehensive program on Data Science methodologies and tools.',
        skills: ['Data Science', 'Machine Learning', 'Analysis'],
        credentialUrl: '',
    },
    {
        name: 'Software Engineering Virtual Program',
        issuer: 'JPMorgan',
        year: 'Completed',
        highlight: false,
        image: '/jpmorgan_certificate.png',
        logo: '/jpmorgan_logo.png',
        description: 'Virtual experience program covering software engineering practices and financial technology.',
        skills: ['Software Engineering', 'FinTech', 'Problem Solving'],
        credentialUrl: '',
    },
    {
        name: 'Data Analytics Program',
        issuer: 'Deloitte',
        year: 'Completed',
        highlight: false,
        image: '/deloitte_analytics.png',
        logo: '/deloitte_logo.png',
        description: 'Virtual Internship program focusing on data analytics and consulting.',
        skills: ['Data Analytics', 'Consulting', 'Problem Solving'],
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
                                ? 'border-electric bg-electric/5 hover:bg-electric/10 hover:glow-electric'
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
