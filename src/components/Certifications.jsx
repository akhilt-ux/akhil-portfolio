import React from "react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
    issuer: "Oracle",
    date: "2024",
  },
  {
    title: "Machine Learning with Python: Foundations",
    issuer: "LinkedIn LEARNING",
    date: "2022",
  },
  // ➕ Add more as needed
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 px-6 bg-transparent text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
          Certifications
        </h2>
        <ul className="space-y-4">
          {certifications.map((cert, idx) => (
            <li
              key={idx}
              className="p-4 bg-transparent text-white rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600">
                {cert.issuer} • {cert.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
