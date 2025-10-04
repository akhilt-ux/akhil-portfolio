import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Bot, Brain, Code } from "lucide-react";

const projects = [
  {
    title: "Chat Bot Assistant",
    subtitle: "RAG-Powered AI Chatbot",
    description: "Full-stack conversational AI providing instant answers from 500+ page owner's manual using Retrieval-Augmented Generation, achieving 95% accuracy with locally-hosted LLM.",
    icon: <Bot size={40} className="text-blue-400" />,
    highlights: [
      "Custom RAG pipeline processing 500+ pages with semantic search",
      "95% answer accuracy with sub-2-second response times",
      "Responsive React.js chat interface with native app-like UX",
      "Privacy-focused local LLM deployment (Phi-3 via Ollama)",
      "ChromaDB vector search with cosine similarity ranking"
    ],
    tech: [
      "Python",
      "FastAPI",
      "React.js",
      "Ollama (Phi-3)",
      "ChromaDB",
      "Sentence-Transformers",
      "RAG Architecture",
      "Vector Embeddings",
      "styled-components",
      "REST API"
    ],
    github: "#", // Replace with your actual GitHub link
    demo: "#", // Replace with your actual demo link
    category: "AI/ML"
  },
  // Add more projects here later
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      bounce: 0.3
    }
  })
};

const Projects = () => {
  return (
      <section className="py-16 px-6 bg-transparent text-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Showcasing innovative solutions in AI, full-stack development, and cloud architecture
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => (
                <motion.div
                    key={idx}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    className="bg-white/5 backdrop-blur-md border border-blue-700/30 rounded-2xl p-8 shadow-xl hover:shadow-blue-800/40 transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div className="flex-shrink-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl">
                      {project.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {project.title}
                        </h3>
                        <span className="text-xs bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                      </div>
                      <p className="text-lg text-blue-300 mb-3">{project.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2">
                      <Brain size={16} />
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-blue-400 mt-1">▸</span>
                            <span>{highlight}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center gap-2">
                      <Code size={16} />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                          <span
                              key={i}
                              className="bg-blue-400/10 text-blue-300 px-3 py-1 rounded-full text-xs border border-blue-400/20"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
          >
            <p className="text-gray-400 italic">
              More innovative projects coming soon...
            </p>
          </motion.div>
        </div>
      </section>
  );
};

export default Projects;