import React from 'react';
import Image from 'next/image';
import {
    Code,
    Database,
    Cloud,
    Terminal,
    Layout,
    Palette,
    Server,
    GitBranch,
    Cpu,
    Boxes,
    BarChart,
    PieChart,
    TrendingUp,
    FileSpreadsheet,
    FileText,
    BookOpen,
    Image as ImageIcon,
    Users,
    Search,
    Type,
    Circle,
    Monitor
} from 'lucide-react';

interface SkillIconProps {
    name: string;
    className?: string;
}

export default function SkillIcon({ name, className = "w-6 h-6 ml-2" }: SkillIconProps) {
    // Map skill names to image paths
    const iconPaths: { [key: string]: string } = {
        // Languages
        'Python': '/python.webp',
        'Java': '/java.webp',
        'JavaScript': '/javascript.webp',
        'Basic C': '/c-logo.png', // Fallback to icon if not found, but we'll try generic

        // Web
        'HTML': '/Html.webp',
        'CSS': '/CSS.webp',
        'React': '/React.webp',
        'Bootstrap': '/Bootstrap.png',
        'Tailwind CSS': '/Tailwindcss.webp',

        // Database
        'MongoDB': '/mongodb.webp',

        // Tools
        'Figma': '/figma.webp',
        'GitHub': '/github.webp',
        'VS Code': '/vs code.webp',
    };

    // Map skill names to Lucide icons
    const lucideIcons: { [key: string]: React.ElementType } = {
        // Programming
        'Basic C': Terminal,
        'Flask': Server,
        'PHP': Server,

        // Databases
        'SQL': Database,
        'MySQL': Database,

        // Cloud
        'AWS (Foundations)': Cloud,
        'Google Colab': Cloud,

        // Core CS
        'Data Structures': Boxes,
        'Algorithms': Cpu,
        'OOP': Boxes,

        // Data
        'Pandas': BarChart,
        'NumPy': PieChart,
        'Matplotlib': TrendingUp,
        'Power BI': BarChart,
        'Excel': FileSpreadsheet,
        'MS Office': FileText,

        // Tools
        'Git': GitBranch,
        'Jupyter Notebook': BookOpen,

        // Design Tools
        'Adobe XD': Palette,
        'Photoshop': ImageIcon,
        'Canva': Palette,

        // UX Methods
        'Wireframing': Layout,
        'Prototyping': Monitor,
        'User Flow': GitBranch,
        'Persona Creation': Users,
        'Usability Testing': Search,

        // UI Skills
        'Layout Design': Layout,
        'Typography': Type,
        'Color Theory': Palette,
        'Visual Hierarchy': Layout,
        'Responsive Design': Monitor,
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
