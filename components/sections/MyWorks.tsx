'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn, ImagePlus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * To add your graphic designs:
 * 1. Drop your images into the /public/works/ folder
 * 2. Add an entry to the `works` array below with the filename, title, and category
 * 
 * Example:
 *   { src: '/works/my-poster.jpg', title: 'Event Poster', category: 'Poster' }
 */
const works: { src: string; title: string; category: string }[] = [
    { src: '/works/birthday-poster.png', title: 'Birthday Poster — Rohith', category: 'Poster' },
    { src: '/works/graphic-design-2.jpg', title: 'But Why — Double Exposure', category: 'Photo Manipulation' },
];

export default function MyWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeWork, setActiveWork] = useState<typeof works[0] | null>(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...Array.from(new Set(works.map(w => w.category)))];

    const filteredWorks = filter === 'All'
        ? works
        : works.filter(w => w.category === filter);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.work-item').forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    clearProps: 'all',
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [filter]);

    const openLightbox = (work: typeof works[0]) => {
        setActiveWork(work);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
        setTimeout(() => setActiveWork(null), 300);
    };

    return (
        <>
            <section id="works" ref={sectionRef} className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center gradient-text">
                        My Works
                    </h2>
                    <p className="text-mutedgray text-center text-lg mb-12 max-w-2xl mx-auto">
                        A collection of my graphic design work — posters, social media creatives, brand identities, and more.
                    </p>

                    {/* Show filters only when there are works */}
                    {works.length > 0 && categories.length > 1 && (
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                        ? 'bg-electric text-white glow-electric'
                                        : 'glass text-mutedgray hover:text-offwhite hover:border-electric/30'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Works Grid */}
                    {filteredWorks.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredWorks.map((work, index) => (
                                <div
                                    key={index}
                                    className="work-item group relative rounded-2xl overflow-hidden cursor-pointer card-shine border border-transparent hover:border-electric/30 transition-all duration-300"
                                    onClick={() => openLightbox(work)}
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] bg-graphite-light">
                                        <Image
                                            src={work.src}
                                            alt={work.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                                            <span className="text-electric text-xs font-semibold uppercase tracking-wider">{work.category}</span>
                                            <h3 className="text-offwhite text-lg font-bold mt-1">{work.title}</h3>
                                        </div>
                                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                            <ZoomIn className="w-5 h-5 text-offwhite" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* Empty State — shown when no works are added yet */
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div
                                    key={i}
                                    className="work-item relative rounded-2xl overflow-hidden border border-dashed border-mutedgray/20 transition-all duration-300 hover:border-electric/30"
                                >
                                    <div className="aspect-[4/3] bg-graphite-light/50 flex flex-col items-center justify-center gap-3">
                                        <ImagePlus className="w-10 h-10 text-mutedgray/30" />
                                        <p className="text-mutedgray/40 text-sm font-medium">Coming Soon</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && activeWork && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeLightbox}
                >
                    <div className="absolute inset-0 bg-graphite/95 backdrop-blur-md" />
                    <button
                        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-electric/20 transition-colors"
                        onClick={closeLightbox}
                    >
                        <X className="w-6 h-6 text-offwhite" />
                    </button>
                    <div
                        className="relative max-w-4xl max-h-[85vh] w-full animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden">
                            <Image
                                src={activeWork.src}
                                alt={activeWork.title}
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />
                        </div>
                        <div className="text-center mt-4">
                            <span className="text-electric text-sm font-semibold uppercase tracking-wider">{activeWork.category}</span>
                            <h3 className="text-offwhite text-xl font-bold mt-1">{activeWork.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
