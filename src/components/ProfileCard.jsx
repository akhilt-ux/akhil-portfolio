import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div
      className="
        fixed top-10 left-10
        w-80
        bg-black/50 backdrop-blur-lg
        rounded-2xl shadow-xl
        p-8 flex flex-col items-center
        text-white z-30
        hidden lg:flex   /* hide on small screens, show on desktop */
      "
    >
      <div className="flex flex-col items-center md:flex-row">
        <img
          src="/profile.JPG" /* put your image in public/ */
          alt="Akhil T"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mx-auto"
        />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Akhil T</h2>
      <p className="text-base text-white/80 mb-2">SR. FULL STACK DEVELOPER</p>
      <p className="text-base text-white/80 mb-6">akhil.uf01@gmail.com</p>
      <div className="flex space-x-6 mb-6">
        <a
          href="https://linkedin.com/in/akhil-uf01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300"
        >
          <FaLinkedin size={28} className="text-[#0A66C2]" />
        </a>
      </div>
      <a
        href="mailto:akhil.uf01@gmail.com"
        className="flex items-center justify-center px-6 py-3 bg-[#0e3c4c] hover:bg-[#0c3240] rounded-xl text-white text-base font-medium shadow-lg space-x-2 border border-gray-400 transition"
      >
        <FaEnvelope size={18} />
        <span>Message Me</span>
      </a>
    </div>
  );
}
