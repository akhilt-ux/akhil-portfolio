import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaTools,
  FaBriefcase,
  FaEnvelope,
  FaCertificate,
} from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 flex flex-col bg-white/10 backdrop-blur-lg rounded-full p-2 space-y-4 border border-white/30">
      <NavItem href="/" icon={<FaHome size={20} />} label="Home" />
      <NavItem href="/about" icon={<FaUser size={20} />} label="About" />
      <NavItem href="/skills" icon={<FaTools size={20} />} label="Skills" />
      <NavItem
        href="/experience"
        icon={<FaBriefcase size={20} />}
        label="Experience"
      />
      <NavItem
        href="/certifications"
        icon={<FaCertificate size={20} />}
        label="Certifications"
      />
      <NavItem
        href="/contact"
        icon={<FaEnvelope size={20} />}
        label="Contact"
      />
    </div>
  );
};

const NavItem = ({ href, icon, label }) => (
  <div className="relative group">
    <Link
      to={href}
      className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-blue-500 rounded-full text-white transition"
    >
      {icon}
    </Link>
    <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-sm px-2 py-1 bg-black text-white rounded whitespace-nowrap z-50">
      {label}
    </span>
  </div>
);

export default SideNav;
