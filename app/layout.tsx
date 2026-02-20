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
    title: "Narala Venu Gopal Reddy - Portfolio",
    description: "Portfolio of Narala Venu Gopal Reddy, Computer Science (AI & Data Science) Student.",
    keywords: ["AI", "Data Science", "Computer Science", "Portfolio", "Student", "Narala Venu Gopal Reddy", "Software Engineering"],
    authors: [{ name: "Narala Venu Gopal Reddy" }],
    openGraph: {
        title: "Narala Venu Gopal Reddy - Portfolio",
        description: "Portfolio of Narala Venu Gopal Reddy, Computer Science (AI & Data Science) Student.",
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
