import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
    issuer: "Oracle",
    date: "2024",
  },
  {
    title: "Machine Learning with Python: Foundations",
    issuer: "LinkedIn Learning",
    date: "2022",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 px-6 bg-transparent text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-blue-500/20 transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <FaCertificate className="text-yellow-400 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
