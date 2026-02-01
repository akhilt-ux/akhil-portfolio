import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaServer, FaBrain } from "react-icons/fa";

const About = () => {
  const roles = [
    {
      title: "Cloud-Native Architect",
      desc: "Specialist in AWS (EKS, Lambda, S3) and AL2 migrations, optimizing performance for global streaming services.",
      icon: <FaCloud className="text-blue-400" />,
    },
    {
      title: "Full-Stack Developer",
      desc: "Building responsive UIs with React/Angular and robust Java/Spring Boot microservices.",
      icon: <FaCode className="text-purple-400" />,
    },
    {
      title: "Backend Specialist",
      desc: "Expertise in event-driven architectures using Kafka and high-performance NoSQL/SQL databases.",
      icon: <FaServer className="text-green-400" />,
    },
    {
      title: "AI/ML Enthusiast",
      desc: "Generative AI professional building RAG-based chatbots and deep learning recognition models.",
      icon: <FaBrain className="text-pink-400" />,
    },
  ];

  return (
      <section id="about" className="container mx-auto px-6 py-24 relative z-10">
        {/* Section Heading */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-blue-400 font-medium text-lg uppercase tracking-widest mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Engineering Scalable Solutions & <span className="text-blue-500">Intelligent Systems</span>
          </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Professional Bio */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              I am an accomplished<span className="text-white font-bold"> Senior Software Development Engineer</span> with over 5 years of experience in architecting high-performance enterprise systems.
              My career is defined by technical excellence at industry leaders like <span className="text-blue-400 font-semibold">Amazon Prime Video</span> and <span className="text-blue-400 font-semibold">Kroger</span>.
            </p>
            <p className="text-lg leading-relaxed">
              With a <span className="text-white font-bold">MS in Information Technology </span> from the University of Cincinnati, I bridge the gap between robust backend engineering and cutting-edge innovation.
              I thrive at the intersection of <span className="text-white">system design and observability</span>, turning complex challenges into production-grade realities.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond core engineering, I am a certified <span className="text-white font-bold">Generative AI professional</span>.
              I've developed RAG-based chatbots and real-time gesture recognition applications using TensorFlow and PyTorch.
            </p>
          </motion.div>

          {/* Right Side: Role Cards (Divya-Style) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {roles.map((role, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="role-card p-8 rounded-[2.5rem]"
                >
                  <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                    {role.icon}
                  </div>
                  <h4 className="text-white font-bold text-xl mb-3">{role.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{role.desc}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default About;