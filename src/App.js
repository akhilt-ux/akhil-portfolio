import React from 'react';
import ProfileCard        from './components/ProfileCard';
import Hero               from './components/Hero';
import About              from './components/About';
import FunFact            from './components/FunFact';
import Experience         from './components/Experience';
// import Projects           from './components/Projects';
import Contact            from './components/Contact';
import SkillsSection      from './components/SkillsSection';
import SideNav            from './components/SideNav';
import Certifications     from './components/Certifications';



function App() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div class="circle-rotator"></div>
      
      {/* <ParticlesBackground /> */}

      {/* ✅ Floating card at left side */}
      <ProfileCard />

      {/* ✅ Side navigation */}
      <SideNav />

      {/* ✅ Hero section */}
      <Hero />
      
      {/* ✅ Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:pl-80">
        <About />
        <FunFact />
        <SkillsSection />
        <Experience />
        <Certifications />
        {/* <Projects /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
