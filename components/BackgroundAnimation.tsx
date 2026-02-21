'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        // Floating orbs — organic, designer-friendly background
        class Orb {
            x: number;
            y: number;
            radius: number;
            speedX: number;
            speedY: number;
            color: string;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.radius = Math.random() * 150 + 80;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                const colors = [
                    'rgba(108, 99, 255,',   // electric indigo
                    'rgba(255, 107, 157,',  // coral accent
                    'rgba(167, 139, 250,',  // violet
                    'rgba(45, 212, 191,',   // teal
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.06 + 0.02;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvasWidth + this.radius) this.x = -this.radius;
                if (this.x < -this.radius) this.x = canvasWidth + this.radius;
                if (this.y > canvasHeight + this.radius) this.y = -this.radius;
                if (this.y < -this.radius) this.y = canvasHeight + this.radius;
            }

            draw() {
                if (!ctx) return;
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.radius
                );
                gradient.addColorStop(0, `${this.color} ${this.opacity})`);
                gradient.addColorStop(1, `${this.color} 0)`);
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Tiny floating particles (like design dust)
        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            opacity: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedY = -(Math.random() * 0.3 + 0.1);
                this.opacity = Math.random() * 0.3 + 0.1;
                this.color = Math.random() > 0.5 ? '#6C63FF' : '#FF6B9D';
            }

            update() {
                this.y += this.speedY;
                if (this.y < -5) {
                    this.y = canvasHeight + 5;
                    this.x = Math.random() * canvasWidth;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        // Create orbs and particles
        const orbs: Orb[] = [];
        for (let i = 0; i < 5; i++) {
            orbs.push(new Orb());
        }

        const particles: Particle[] = [];
        for (let i = 0; i < 40; i++) {
            particles.push(new Particle());
        }

        // Mouse interaction — subtle glow follows cursor
        let mouseX = -100;
        let mouseY = -100;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw orbs
            orbs.forEach(orb => {
                orb.update();
                orb.draw();
            });

            // Draw particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Mouse glow
            if (mouseX > 0 && mouseY > 0) {
                const mouseGlow = ctx.createRadialGradient(
                    mouseX, mouseY, 0,
                    mouseX, mouseY, 200
                );
                mouseGlow.addColorStop(0, 'rgba(108, 99, 255, 0.06)');
                mouseGlow.addColorStop(0.5, 'rgba(255, 107, 157, 0.03)');
                mouseGlow.addColorStop(1, 'rgba(108, 99, 255, 0)');
                ctx.fillStyle = mouseGlow;
                ctx.beginPath();
                ctx.arc(mouseX, mouseY, 200, 0, Math.PI * 2);
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    );
}
