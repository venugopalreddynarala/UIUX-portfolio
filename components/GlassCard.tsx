'use client';

import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'strong';
}

export default function GlassCard({
    children,
    className = '',
    variant = 'default',
}: GlassCardProps) {
    const baseClass = variant === 'strong' ? 'glass-strong' : 'glass';

    return (
        <div
            className={`${baseClass} card-shine rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-electric/30 ${className}`}
        >
            {children}
        </div>
    );
}
