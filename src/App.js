import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import SideNav from "./components/SideNav";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/SkillsSection";
import Experience from "./components/ExperienceTimeline";
import ExperienceDetail from "./pages/ExperienceDetail";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function ScrollSpy() {
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname !== "/") return;
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    window.history.replaceState(null, "", `/#${entry.target.id}`);
                }
            });
        }, { rootMargin: "-45% 0px -45% 0px" });
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [pathname]);
    return null;
}

const LandingPage = () => (
    <div className="flex flex-col items-center w-full">
        {/* Hero now contains BOTH the ProfileCard and the Introduction */}
        <section id="hero" className="w-full min-h-screen flex items-center justify-center pt-20 md:pt-0">
            <Hero/>
        </section>

        <section id="about" className="w-full min-h-screen flex items-center justify-center"><About/></section>
        <section id="skills" className="w-full min-h-screen flex items-center justify-center"><Skills/></section>
        <section id="experience" className="w-full min-h-screen flex items-center justify-center"><Experience/></section>
        <section id="projects" className="w-full min-h-screen flex items-center justify-center"><Projects/></section>
        <section id="certifications" className="w-full min-h-screen flex items-center justify-center"><Certifications/></section>
        <section id="contact" className="w-full min-h-screen flex items-center justify-center"><Contact/></section>
    </div>
);

function AppContent() {
    const location = useLocation();

    return (
        <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden">
            <ScrollSpy />
            <div className="circle-rotator fixed inset-0 pointer-events-none z-0 opacity-30"></div>

            <div className="relative z-10">
                <SideNav />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/experience/:clientId" element={<ExperienceDetail />} />
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}