import React from 'react';
import Image from 'next/image';
import {
    Search,
    Users,
    Network,
    Layout,
    Monitor,
    MousePointer,
    Accessibility,
    Layers,
    Eye,
    Type,
    Palette,
    Smartphone,
    MessageSquare,
    Lightbulb,
    RefreshCw,
    Sparkles,
    PenTool,
    Globe,
    ImageIcon,
    Circle,
} from 'lucide-react';

interface SkillIconProps {
    name: string;
    className?: string;
}

export default function SkillIcon({ name, className = "w-6 h-6 ml-2" }: SkillIconProps) {
    // Map skill names to image paths
    const iconPaths: { [key: string]: string } = {
        'Figma': '/figma.webp',
    };

    // Map skill names to Lucide icons
    const lucideIcons: { [key: string]: React.ElementType } = {
        // Design & UX
        'User Research': Search,
        'Personas & User Journeys': Users,
        'Information Architecture': Network,
        'Wireframing': Layout,
        'Interactive Prototyping': Monitor,
        'Usability Testing': MousePointer,
        'Responsive Design': Smartphone,
        'Accessibility (WCAG)': Accessibility,
        'Design Systems': Layers,
        'Visual Hierarchy': Eye,
        'Typography': Type,
        'Color Theory': Palette,

        // Tools
        'Adobe XD': PenTool,
        'Framer': Monitor,
        'Webflow': Globe,
        'Adobe Photoshop': ImageIcon,
        'Canva': Palette,

        // Soft Skills
        'Communication & Presentation': MessageSquare,
        'Problem Solving': Lightbulb,
        'Feedback-Oriented Mindset': RefreshCw,
        'Adaptability & Learning': RefreshCw,
        'Creativity': Sparkles,
    };

    // Check for image icon
    const iconPath = iconPaths[name];
    if (iconPath) {
        return (
            <div className={`${className} relative`}>
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

    // Check for Lucide icon
    const IconComponent = lucideIcons[name];
    if (IconComponent) {
        return <IconComponent className={`${className} text-electric`} />;
    }

    // Fallback
    return <Circle className={`${className} text-electric/50 p-1`} />;
}
