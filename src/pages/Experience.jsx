// pages/Experience.jsx
import React from "react";
import { Link } from "react-router-dom";

const experiences = [
  {
    id: "kroger",
    company: "Kroger",
    title: "Sr. Full Stack Java Developer",
    period: "Feb 2025 – Present",
  },
  {
    id: "amazon",
    company: "Amazon",
    title: " Software Development Engineer",
    period: "August 2022 – Jan 2025",
  },
  {
    id: "subex",
    company: "Subex",
    title: "Software Developer",
    period: "Jan 2019 – Aug 2021",
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-6 bg-transparent text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
          Experience
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              to={`/experience/${exp.id}`}
              className="bg-white/5 backdrop-blur-md border border-blue-700/30 p-6 rounded-xl shadow-xl hover:shadow-blue-800/40 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                {exp.company}
              </h3>
              <p className="text-base text-gray-300">{exp.title}</p>
              <p className="text-sm text-blue-400 mt-2">{exp.period}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
