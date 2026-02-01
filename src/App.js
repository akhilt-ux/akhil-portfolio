import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import SideNav from "./components/SideNav";
import ProfileCard from "./components/ProfileCard";
import OffCanvasMenu from "./components/OffCanvasMenu";
import PageWrapper from "./components/PageWrapper";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/SkillsSection";
import Experience from "./components/ExperienceTimeline";
import ExperienceDetail from "./pages/ExperienceDetail";
import Certifications from "./pages/Certifications";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// FIX: Automatically updates URL hash based on scroll position
function ScrollSpy() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname !== "/") return;

        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px", // Triggers when section is in the middle of the screen
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    // Update URL without adding to history (prevents back-button mess)
                    window.history.replaceState(null, "", `/#${id}`);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}

// Stacks all components for a continuous scroll
const LandingPage = () => (
    <PageWrapper>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="certifications"><Certifications /></section>
        <section id="contact"><Contact /></section>
    </PageWrapper>
);

function AppContent() {
    const location = useLocation();

    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <ScrollSpy />
            <div className="circle-rotator"></div>

            {location.pathname === "/" && <ProfileCard />}

            <OffCanvasMenu />
            <SideNav />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/experience/:clientId" element={<PageWrapper><ExperienceDetail /></PageWrapper>} />

                    {/* Redirect individual paths back to the scrollable landing page */}
                    <Route path="/about" element={<LandingPage />} />
                    <Route path="/skills" element={<LandingPage />} />
                    <Route path="/experience" element={<LandingPage />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;