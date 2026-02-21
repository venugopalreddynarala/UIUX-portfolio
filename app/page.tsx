import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import MyWorks from '@/components/sections/MyWorks';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

function SectionDivider() {
    return <div className="section-divider" />;
}

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <SectionDivider />
                <About />
                <SectionDivider />
                <Skills />
                <SectionDivider />
                <MyWorks />
                <SectionDivider />
                <Projects />
                <SectionDivider />
                <Experience />
                <SectionDivider />
                <Certifications />
                <SectionDivider />
                <Contact />
            </main>
        </>
    );
}
