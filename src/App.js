import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="circle-rotator"></div>

      {location.pathname === "/" && <ProfileCard />}  
      <OffCanvasMenu />
      <SideNav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="/experience/:clientId" element={<PageWrapper><ExperienceDetail /></PageWrapper>} />
          <Route path="/certifications" element={<PageWrapper><Certifications /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
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
