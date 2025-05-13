// pages/Experience.jsx
import React from "react";
import { Link } from "react-router-dom";

const experiences = [
  {
    id: "us-bank",
    title: "Sr. Full Stack Developer",
    company: "US Bank",
    period: "Apr 2024 – Present",
  },
  {
    id: "elevance",
    title: "Sr. Full Stack Java Developer",
    company: "Elevance Health",
    period: "Aug 2022 – Mar 2024",
  },
  {
    id: "costco",
    title: "Full Stack Developer",
    company: "Costco Wholesale",
    period: "Feb 2021 – Jul 2022",
  },
  {
    id: "key-bank",
    title: "Java Developer",
    company: "Key Bank",
    period: "Apr 2019 – Jan 2021",
  },
  {
    id: "state-farm",
    title: "Java Developer",
    company: "State Farm",
    period: "Oct 2016 – Dec 2018",
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
