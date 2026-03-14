'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImagePlus, X } from 'lucide-react';
import CircularGallery from '@/components/CircularGallery';

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
    { src: '/works/design-3.jpg', title: 'Birthday Poster — Deekshit Reddy', category: 'Poster' },
    { src: '/works/design-4.jpg', title: 'Swami — Fan Art Poster', category: 'Fan Art' },
];

export default function MyWorks() {
    const [filter, setFilter] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeWork, setActiveWork] = useState<typeof works[0] | null>(null);

    const categories = ['All', ...Array.from(new Set(works.map(w => w.category)))];

    const filteredWorks = filter === 'All'
        ? works
        : works.filter(w => w.category === filter);

    const galleryItems = filteredWorks.map((work) => ({
        image: work.src,
        text: work.title,
    }));

    const openLightbox = (work: typeof works[0]) => {
        setActiveWork(work);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
        setTimeout(() => setActiveWork(null), 240);
    };

    return (
        <>
            <section id="works" className="py-32 px-6">
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

                    {/* Circular Gallery */}
                    {filteredWorks.length > 0 ? (
                        <>
                            <div className="h-[560px] md:h-[620px] relative mb-10 rounded-3xl magic-bento-border magic-bento-violet">
                                <CircularGallery
                                    items={galleryItems}
                                    bend={1}
                                    textColor="#ffffff"
                                    borderRadius={0.05}
                                    scrollSpeed={2}
                                    scrollEase={0.05}
                                    onItemClick={(index) => {
                                        const work = filteredWorks[index];
                                        if (work) openLightbox(work);
                                    }}
                                />
                            </div>
                        </>
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

            {lightboxOpen && activeWork && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeLightbox}
                >
                    <div className="absolute inset-0 bg-graphite/95 backdrop-blur-md" />
                    <button
                        aria-label="Close image preview"
                        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-electric/20 transition-colors"
                        onClick={closeLightbox}
                    >
                        <X className="w-6 h-6 text-offwhite" />
                    </button>

                    <div
                        className="relative z-10 max-w-5xl max-h-[88vh] w-full animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-[72vh] rounded-2xl overflow-hidden bg-graphite-light">
                            <Image
                                src={activeWork.src}
                                alt={activeWork.title}
                                fill
                                className="object-contain"
                                sizes="95vw"
                                priority
                            />
                        </div>

                        <div className="text-center mt-4 px-2">
                            <p className="text-electric text-sm uppercase tracking-wider font-semibold">{activeWork.category}</p>
                            <h3 className="text-offwhite text-xl md:text-2xl font-bold mt-1">{activeWork.title}</h3>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
