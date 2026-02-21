'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/MagneticButton';

const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'My Works', href: '#works' },
    { name: 'Projects', href: '#projects' },
    { name: 'Design Process', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Scroll spy: determine which section is currently in view
            const sections = navLinks
                .map((link) => {
                    if (link.href === '#') return { id: '#', offset: 0 };
                    const el = document.querySelector(link.href);
                    if (!el) return null;
                    const rect = el.getBoundingClientRect();
                    return { id: link.href, offset: rect.top };
                })
                .filter(Boolean) as { id: string; offset: number }[];

            // Find the section closest to the top of the viewport (with some offset)
            let current = '#';
            for (const section of sections) {
                if (section.id === '#') continue;
                if (section.offset <= 150) {
                    current = section.id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileMenuOpen(false);
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            className="text-2xl font-bold cursor-hover"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <span className="gradient-text">VGR</span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className={`transition-colors cursor-hover relative group ${activeSection === link.href
                                        ? 'text-electric font-semibold'
                                        : 'text-offwhite/80 hover:text-electric'
                                        }`}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-electric transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`} />
                                </motion.a>
                            ))}

                            <MagneticButton
                                href="#contact"
                                className="px-6 py-2.5 bg-electric text-white rounded-full font-semibold text-sm hover:bg-electric-light transition-all duration-300 glow-electric"
                            >
                                Contact Me
                            </MagneticButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden cursor-hover w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-offwhite transition-all"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 bg-offwhite transition-all"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-offwhite transition-all"
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="fixed top-0 right-0 bottom-0 w-full sm:w-80 glass-strong z-40 md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    className={`text-2xl font-semibold transition-colors cursor-hover ${activeSection === link.href
                                        ? 'text-electric'
                                        : 'text-offwhite hover:text-electric'
                                        }`}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('#contact');
                                }}
                                className="px-8 py-4 bg-electric text-white rounded-full font-semibold text-lg hover:bg-electric-light transition-all duration-300 glow-electric cursor-hover"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Contact Me
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="fixed inset-0 bg-graphite/80 backdrop-blur-sm z-30 md:hidden"
                    />
                )}
            </AnimatePresence>
        </>
    );
}
