import React from 'react';
import Image from 'next/image';

interface SkillIconProps {
    name: string;
    className?: string;
}

export default function SkillIcon({ name, className = "w-6 h-6" }: SkillIconProps) {
    // Map skill names to image paths
    const iconPaths: { [key: string]: string } = {
        // Languages
        'Python': '/python.webp',
        'Java': '/java.webp',
        'JavaScript (Basics)': '/javascript.webp',
        'JavaScript': '/javascript.webp',

        // Web Development
        'HTML5': '/Html.webp',
        'CSS3': '/CSS.webp',
        'React.js (Basics)': '/React.webp',
        'Bootstrap': '/Bootstrap.png',
        'Tailwind CSS (Basics)': '/Tailwindcss.webp',

        // Databases
        'MongoDB': '/mongodb.webp',

        // UI/UX Design
        'Figma': '/figma.webp',

        // Tools & Platforms
        'Git & GitHub': '/github.webp',
        'Postman': '/postman.webp',
        'VS Code': '/vs code.webp',
    };

    const iconPath = iconPaths[name];

    // If we have an image for this skill, use it
    if (iconPath) {
        return (
            <div className={className} style={{ position: 'relative' }}>
                <Image
                    src={iconPath}
                    alt={name}
                    fill
                    className="object-contain"
                    unoptimized
                />
            </div>
        );
    }

    // Fallback to bullet point for skills without logos
    return <span className="text-2xl">•</span>;
}
