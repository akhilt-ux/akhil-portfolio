import React from "react";
import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope, FaCertificate, FaProjectDiagram } from "react-icons/fa";

const SideNav = () => {
    return (
        <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 flex flex-col bg-white/10 backdrop-blur-lg rounded-full p-2 space-y-4 border border-white/30">
            <NavItem href="#hero" icon={<FaHome size={20} />} label="Home" />
            <NavItem href="#about" icon={<FaUser size={20} />} label="About" />
            <NavItem href="#skills" icon={<FaTools size={20} />} label="Skills" />
            <NavItem href="#experience" icon={<FaBriefcase size={20} />} label="Experience" />
            <NavItem href="#projects" icon={<FaProjectDiagram size={20} />} label="Projects" />
            <NavItem href="#certifications" icon={<FaCertificate size={20} />} label="Certifications" />
            <NavItem href="#contact" icon={<FaEnvelope size={20} />} label="Contact" />
        </div>
    );
};

const NavItem = ({ href, icon, label }) => (
    <div className="relative group">
        {/* Using standard anchor tag for reliable ID jumping */}
        <a
            href={href}
            className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-blue-500 rounded-full text-white transition"
        >
            {icon}
            <span className="absolute right-14 scale-0 group-hover:scale-100 transition-all bg-gray-900 text-white text-xs py-1 px-3 rounded shadow-xl whitespace-nowrap">
        {label}
      </span>
        </a>
    </div>
);

export default SideNav;