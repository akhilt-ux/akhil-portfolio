import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaChevronDown } from "react-icons/fa";

const Hero = () => {
    const linkedinUrl = "https://linkedin.com/in/akhilreddy-ar";

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617]">

            {/* RESTORED: Background Animation Logic */}
            <div className="absolute inset-0 z-0">
                <div className="circle-rotator opacity-30"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">

                {/* LEFT COLUMN: Profile Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-[380px] bg-[#0f172a]/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 shadow-2xl text-center"
                >
                    <div className="relative inline-block mb-6">
                        <img
                            src="/profile.JPG"
                            alt="Akhil Reddy"
                            className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] mx-auto object-cover border-4 border-blue-500/20 shadow-blue-500/10 shadow-xl"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-blue-600 p-3 rounded-2xl border-4 border-[#020617]">
                            <span className="text-xl">👨‍💻</span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white">Akhil Reddy</h2>
                    <p className="text-blue-400 font-medium mb-6">Senior Software Engineer</p>

                    <div className="space-y-4 text-left text-sm border-t border-white/5 pt-6">
                        <div className="flex items-center gap-3 opacity-70">
                            <FaEnvelope className="text-blue-400 shrink-0" />
                            <span className="truncate text-white">akhilreddyar989@gmail.com</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 mt-8">
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all text-white"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Introduction Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 text-center md:text-left"
                >
                    <p className="text-blue-400 font-medium text-lg mb-2">Hello, I am</p>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
                        Akhil <span className="text-blue-500">Reddy</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                        Cloud-Native Architect | Senior Software Development Engineer | AI/ML Enthusiast.

                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-600/20 active:scale-95 text-white inline-block"
                        >
                            Let's Connect on LinkedIn
                        </a>

                        <a
                            href="/akhilreddy_resume.pdf"
                            download="Akhil_Reddy_Resume.pdf"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-lg transition-all text-white inline-block cursor-pointer"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="flex flex-col items-center md:items-start opacity-40">
                        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white">
                            <FaChevronDown className="animate-bounce" />
                            Scroll to explore
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;