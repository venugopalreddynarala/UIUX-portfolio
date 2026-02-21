'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedGradient() {
    const gradientRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const gradient = gradientRef.current;
        if (!gradient) return;

        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        let animationId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            currentX += (mouseX - currentX) * 0.03;
            currentY += (mouseY - currentY) * 0.03;

            if (gradient) {
                gradient.style.background = `
                    radial-gradient(ellipse 600px 400px at ${currentX}px ${currentY}px, rgba(108, 99, 255, 0.08), transparent),
                    radial-gradient(ellipse 500px 300px at ${window.innerWidth - currentX}px ${currentY + 100}px, rgba(255, 107, 157, 0.06), transparent),
                    radial-gradient(ellipse 400px 400px at ${currentX * 0.5}px ${window.innerHeight - currentY}px, rgba(45, 212, 191, 0.05), transparent)
                `;
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div
            ref={gradientRef}
            className="fixed inset-0 pointer-events-none z-0 transition-all duration-300"
        />
    );
}
