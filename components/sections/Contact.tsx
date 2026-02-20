'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-title', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 50,
                autoAlpha: 0,
                duration: 1,
                ease: 'power3.out',
                clearProps: 'all',
            });

            gsap.from('.contact-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                },
                y: 30,
                autoAlpha: 0,
                duration: 0.8,
                delay: 0.2,
                ease: 'power2.out',
                clearProps: 'all',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual email service integration)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus('idle'), 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" ref={sectionRef} className="py-32 px-6 min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="contact-title text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Let's build{' '}
                        <span className="gradient-text">secure digital experiences</span>{' '}
                        together.
                    </h2>
                    <p className="contact-title text-xl text-mutedgray max-w-2xl mx-auto">
                        Have a project in mind or want to discuss AI solutions? I'd love to hear from you.
                    </p>
                </div>

                <div className="contact-content grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="glass p-8 rounded-3xl border border-electric/20">
                        <h3 className="text-2xl font-bold mb-6 text-offwhite">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-mutedgray mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/90 border border-mutedgray/20 rounded-xl text-black placeholder-mutedgray focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-mutedgray mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white/90 border border-mutedgray/20 rounded-xl text-black placeholder-mutedgray focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-mutedgray mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white/90 border border-mutedgray/20 rounded-xl text-black placeholder-mutedgray focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-6 py-4 bg-electric text-white rounded-full font-semibold text-lg hover:bg-electric-light transition-all duration-300 glow-electric disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : submitStatus === 'success' ? (
                                    '✓ Message Sent!'
                                ) : (
                                    <>
                                        Send Message <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Social Links */}
                    <div className="space-y-8">
                        {/* Contact Information */}
                        <div className="glass p-8 rounded-3xl border border-violet/20">
                            <h3 className="text-2xl font-bold mb-6 text-offwhite">Get in Touch</h3>
                            <div className="space-y-4">
                                <a
                                    href="mailto:naralavenugopalreddy@gmail.com"
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-electric/5 transition-colors group"
                                >
                                    <Mail className="w-6 h-6 text-electric mt-1 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-sm text-mutedgray">Email</p>
                                        <p className="text-offwhite font-medium break-all">naralavenugopalreddy@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-4 rounded-xl">
                                    <Phone className="w-6 h-6 text-violet mt-1" />
                                    <div>
                                        <p className="text-sm text-mutedgray">Phone</p>
                                        <p className="text-offwhite font-medium">+91-9121499852</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl">
                                    <MapPin className="w-6 h-6 text-electric mt-1" />
                                    <div>
                                        <p className="text-sm text-mutedgray">Location</p>
                                        <p className="text-offwhite font-medium">Andhra Pradesh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass p-8 rounded-3xl border border-electric/20">
                            <h3 className="text-2xl font-bold mb-6 text-offwhite">Connect With Me</h3>
                            <div className="flex flex-col gap-4">
                                <MagneticButton
                                    href="https://www.linkedin.com/in/venugopalreddynarala/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-4 glass border-2 border-electric/50 text-offwhite rounded-full font-semibold hover:border-electric hover:bg-electric/10 transition-all duration-300"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    LinkedIn
                                </MagneticButton>

                                <MagneticButton
                                    href="https://github.com/venugopalreddynarala"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-4 glass border-2 border-violet/50 text-offwhite rounded-full font-semibold hover:border-violet hover:bg-violet/10 transition-all duration-300"
                                >
                                    <Github className="w-5 h-5" />
                                    GitHub
                                </MagneticButton>

                                <MagneticButton
                                    href="mailto:naralavenugopalreddy@gmail.com"
                                    onClick={() => {
                                        // Fallback: copy email to clipboard if mailto doesn't work
                                        navigator.clipboard.writeText('naralavenugopalreddy@gmail.com');
                                    }}
                                    className="flex items-center gap-3 px-6 py-4 bg-electric text-white rounded-full font-semibold hover:bg-electric-light transition-all duration-300 glow-electric"
                                >
                                    <Mail className="w-5 h-5" />
                                    Email Me
                                </MagneticButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-24 pt-12 border-t border-mutedgray/20 text-center">
                    <p className="text-mutedgray text-sm">
                        © 2026 Narala Venu Gopal Reddy.
                    </p>
                </div>
            </div>
        </section>
    );
}
