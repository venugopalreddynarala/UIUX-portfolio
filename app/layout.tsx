import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import AnimatedGradient from "@/components/AnimatedGradient";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Narala Venu Gopal Reddy — UI/UX Designer Portfolio",
    description: "UI/UX Designer with hands-on experience designing end-to-end product flows — from user research and wireframes to high-fidelity prototypes. Strong in Figma, Adobe XD, and design systems.",
    keywords: ["UI/UX Designer", "Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems", "Portfolio", "Narala Venu Gopal Reddy", "UX Design", "Interaction Design", "Accessibility"],
    authors: [{ name: "Narala Venu Gopal Reddy" }],
    openGraph: {
        title: "Narala Venu Gopal Reddy — UI/UX Designer Portfolio",
        description: "UI/UX Designer crafting end-to-end product flows — from user research and wireframes to high-fidelity prototypes.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
            <body suppressHydrationWarning>
                <BackgroundAnimation />
                <AnimatedGradient />
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
