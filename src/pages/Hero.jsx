import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaLaptopCode, FaDownload } from "react-icons/fa";

const Hero = () => {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // --- ANIMATION TIMING ---
    // Stage 1 (Profile) stays visible 0 -> 0.3, then fades
    const aboutOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
    const aboutScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

    return (
        <div ref={containerRef} className="relative h-[250vh] bg-[#020617]">
            {/* ANCHOR POINTS FOR SIDENAV
               These help your ScrollSpy detect which "section" you are in
            */}
            <div id="hero" className="absolute top-0 h-[50%] w-full pointer-events-none" />
            {/*<div id="about" className="absolute top-[50%] h-[50%] w-full pointer-events-none" />*/}

            {/* RADIANT MOUSE SPOTLIGHT */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
            />

            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6">

                {/* --- STAGE 1: PROFILE CARD --- */}
                <motion.div
                    style={{opacity: aboutOpacity, scale: aboutScale}}
                    className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-16 z-20"
                >
                    <div
                        className="w-full max-w-[380px] bg-[#0b1120] border border-white/10 rounded-[3rem] p-10 shadow-2xl relative">
                        <div className="relative w-40 h-40 mx-auto mb-8">
                            <div
                                className="w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-blue-500/20 shadow-inner">
                                <img src="/profile.JPG" alt="Akhil Reddy" className="w-full h-full object-cover"/>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-[#3b82f6] p-3 rounded-2xl shadow-lg">
                                <FaLaptopCode className="text-white text-xl"/>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-blue-500 font-bold mb-4 tracking-widest uppercase text-xs">Hello, I
                                am</p>
                            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight italic">
                                Akhil <span className="text-blue-600">Reddy</span>
                            </h2>

                            <div className="space-y-4 border-t border-white/5 pt-8 text-left">
                                <a href="mailto:akhilreddyar989@gmail.com"
                                   className="flex items-center gap-3 text-gray-400 bg-white/5 p-3 rounded-2xl group hover:bg-white/10 transition-colors">
                                    <FaEnvelope
                                        className="text-blue-500 shrink-0 group-hover:scale-110 transition-transform"/>
                                    <span
                                        className="text-[10px] md:text-xs truncate font-medium">akhilreddyar989@gmail.com</span>
                                </a>

                                <div className="flex gap-3">
                                    <a href="http://linkedin.com/in/akhilreddy-ar" target="_blank" rel="noreferrer"
                                       className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-blue-600 border border-white/10 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                                        <FaLinkedin className="text-base"/> LinkedIn
                                    </a>
                                    <a href="/akhilreddy_resume.pdf" download
                                       className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/30">
                                        <FaDownload className="text-base"/> Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-blue-400 font-medium text-lg uppercase tracking-[0.5em] mb-4">
                        Senior Software Engineer
                    </h2>
                    <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
                        KROGER <span className="text-blue-600">&</span> AMAZON
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Building high-performance cloud solutions and backend architectures.
                    </p>
                </motion.div>


                {/* --- MOUSE SCROLL INDICATOR --- */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.85, 0.95], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
                >
                    <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 15, 0], opacity: [1, 0, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-[4px] h-[8px] bg-blue-500 rounded-full"
                        />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Scroll</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;