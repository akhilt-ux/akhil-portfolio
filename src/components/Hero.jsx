import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      {/* <motion.p
        className="text-lg md:text-xl max-w-2xl mb-6 typing-effect"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 2.8, ease: "easeOut" }}
      >
        Cloud-Native Architect | Sr. Full Stack Java Developer | AI/ML
        Enthusiast
      </motion.p> */}

      {/* {Animated waves} */}
      <p className="text-lg md:text-xl max-w-2xl mb-6 wave-effect">
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
        {/* <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a> */}
        <a
          href="https://linkedin.com/in/akhil-uf01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </motion.div>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 2.8 }}
      >
        Let’s Connect
      </motion.a>
    </section>
  );
}
