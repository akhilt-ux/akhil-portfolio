import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        h-screen
        flex flex-col
        justify-center items-center
        bg-transparent
        text-white text-center
        px-4
        pl-30 md:pl-60
      "
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.8, ease: "easeOut" }}
      >
        Hello, I am
        <span className="text-blue-300"> Akhil</span>
      </motion.h1>

      {/* Animated Subtext */}
      <p className="text-lg md:text-xl max-w-2xl mb-4 wave-effect">
        {[
          "Cloud-Native Architect",
          "|",
          "Sr. Full Stack Java Developer",
          "|",
          "AI/ML Enthusiast",
        ].map((word, i) => (
          <span key={i} className="inline-block mr-2">
            {word}
          </span>
        ))}
      </p>

      {/* Social Icons */}
      <motion.div
        className="flex space-x-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 2.8 }}
      >
        <a
          href="https://linkedin.com/in/akhil-uf01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-300"
        >
          <FaLinkedin size={30} />
        </a>
      </motion.div>

      {/* CTA Button: Direct LinkedIn connect */}
      <motion.a
        href="https://www.linkedin.com/in/akhil-uf01"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 2.8 }}
      >
        Let’s Connect on LinkedIn
      </motion.a>

      {/* Pro Tip */}
      <motion.p
        className="mt-4 text-sm text-gray-400 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        Send me a LinkedIn request 🚀
      </motion.p>
    </section>
  );
}
