// pages/ExperienceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const experienceDetails = {
  "us-bank": {
    title: "Sr. Full Stack Developer",
    company: "US Bank",
    period: "Apr 2024 – Present",
    details: [
      "Led the migration of a major auto loan platform from monolithic to Spring Boot microservices, improving scalability and reducing infrastructure costs.",
      "Built secure REST APIs for loan processing, APR calculations, and decisioning, handling 1M+ daily transactions.",
      "Integrated Kafka, RabbitMQ, and AI/ML models (TensorFlow, Flask APIs) to enable real-time decisioning and predictive insights.",
      "Engineered modern UIs using Angular and React, optimizing performance and enhancing user experience.",
      "Automated deployments to AWS (EKS, Lambda, CloudWatch, Terraform) and containerized applications with Docker + Kubernetes for 99.99% uptime",
    ],
    tech: [
      "Java 8",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "AWS (EKS, Lambda, S3)",
      "Angular",
      "ReactJS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "AI/ML (TensorFlow + Flask)",
    ],
  },
  elevance: {
    title: "Sr. Full Stack Java Developer",
    company: "Elevance Health",
    period: "Aug 2022 – Mar 2024",
    details: [
      "Developed dynamic healthcare UIs with ReactJS, Redux, NextJS, boosting user engagement by 20%.",
      "Built and secured REST APIs with Node.js (Express) and Spring Boot, ensuring HIPAA-compliant data exchange.",
      "Integrated Kafka, ActiveMQ, and Redis caching to support real-time patient data and appointment scheduling.",
      "Containerized microservices using Docker, Kubernetes (AKS) and automated CI/CD with Jenkins + Azure DevOps.",
      "Managed cloud deployments on AWS and Azure, improving system resilience and performance.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "Node.js (Express)",
      "Kafka",
      "Azure (AKS, API Management)",
      "Docker",
      "Kubernetes",
      "Redis",
    ],
  },
  costco: {
    title: "Full Stack Developer",
    company: "Costco Wholesale",
    period: "Feb 2021 – Jul 2022",
    details: [
      "Built and optimized REST APIs with Spring Boot + Angular 8, powering seamless order and returns processing for millions of users.",
      "Deployed cloud-native services using Azure Functions, CosmosDB, AKS, and integrated Redis caching for fast, reliable cart and search functions.",
      "Developed hybrid apps with Ionic + NestJS, enabling cross-platform mobile access.",
      "Implemented CI/CD with Azure DevOps, Docker, Kubernetes.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Angular 8",
      "Vue.js",
      "Azure (Functions, CosmosDB, AKS)",
      "Docker",
      "Kubernetes",
      "Redis",
      "GraphQL",
    ],
  },
  "key-bank": {
    title: "Java Developer",
    company: "Key Bank",
    period: "Apr 2019 – Jan 2021",
    details: [
      "Modernized legacy banking apps with Spring Boot microservices and secure REST APIs, improving performance and scalability.",
      "Integrated ActiveMQ, JMS, and Redis for real-time payments and fund transfers.",
      "Automated deployments with Jenkins + ANT, enhancing release speed and reliability.",
      "Optimized Oracle database queries, reducing processing time by 20%.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "ActiveMQ",
      "Oracle",
      "Redis",
      "Jenkins",
    ],
  },
  "state-farm": {
    title: "Java Developer",
    company: "State Farm",
    period: "Oct 2016 – Dec 2018",
    details: [
      "Developed robust backend systems using Java, Servlets, JSP, JDBC, and optimized PL/SQL queries for smooth transaction processing.",
      "Designed UI components with HTML, CSS, JavaScript, and implemented secure payment workflows.",
      "Created scheduling tools, mail utilities, and detailed logs to support backend operations.",
    ],
    tech: [
      "Core Java",
      "Servlets/JSP",
      "Oracle",
      "JDBC",
      "HTML/CSS/JavaScript",
    ],
  },
};

const ExperienceDetail = () => {
  const { clientId } = useParams();
  const detail = experienceDetails[clientId];

  if (!detail)
    return <div className="text-white p-10">Experience not found.</div>;

  return (
    <section className="py-16 px-6 bg-transparent text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold gradient-text mb-2">
          {detail.title} @ {detail.company}
        </h2>
        <p className="italic text-sm text-gray-400 mb-4">{detail.period}</p>
        <ul className="list-disc ml-6 space-y-2">
          {detail.details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-6">
          {detail.tech.map((tech, idx) => (
            <span
              key={idx}
              className="bg-blue-400/20 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link to="/experience">
          <button className="mt-10 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded shadow text-white">
            ← Back to Experience
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExperienceDetail;
