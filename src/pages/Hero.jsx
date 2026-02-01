import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // 1. Mouse Spotlight Logic
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // 2. Scroll Animation Logic (Fades Hero as you scroll)
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

    return (
        <section className="relative h-screen w-full bg-[#020617] overflow-hidden flex items-center justify-center">

            {/* RADIANT MOUSE SPOTLIGHT */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
                }}
            />

            {/* CONTENT WRAPPER */}
            <motion.div
                style={{ opacity, scale }}
                className="container mx-auto px-6 text-center z-10"
            >
                <h2 className="text-blue-400 font-medium text-lg uppercase tracking-[0.5em] mb-4">
                    Senior Software Engineer
                </h2>

                <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-6">
                    KROGER <span className="text-blue-600">&</span> AMAZON
                </h1>

                <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                    Architecting scalable backend systems and high-concurrency
                    infrastructure for global streaming and retail.
                </p>
            </motion.div>

            {/* --- MOUSE SCROLL ANIMATION --- */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                {/* The Mouse Icon */}
                <div className="w-[30px] h-[50px] border-2 border-white/20 rounded-full flex justify-center p-2">
                    {/* The Scrolling Wheel */}
                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                            opacity: [1, 0, 1]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-[4px] h-[8px] bg-blue-500 rounded-full"
                    />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
          Scroll
        </span>
            </div>

            {/* BACKGROUND DECOR (Fixed) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Hero;