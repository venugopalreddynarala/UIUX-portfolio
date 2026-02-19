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
    title: "Kamireddy Nanda Kishore Reddy - Portfolio",
    description: "Portfolio of Kamireddy Nanda Kishore Reddy, Computer Science (AI & Data Science) Student.",
    keywords: ["AI", "Data Science", "Computer Science", "Portfolio", "Student", "Kamireddy Nanda Kishore Reddy"],
    authors: [{ name: "Kamireddy Nanda Kishore Reddy" }],
    openGraph: {
        title: "Kamireddy Nanda Kishore Reddy - Portfolio",
        description: "Portfolio of Kamireddy Nanda Kishore Reddy, Computer Science (AI & Data Science) Student.",
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
