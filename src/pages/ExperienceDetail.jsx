// pages/ExperienceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const experienceDetails = {
  kroger: {
    title: "Sr. Full Java Stack Developer",
    company: "Kroger",
    period: "Feb 2025 – Present",
    details: [
      "Spearheaded enterprise-wide Java 8 to Java 21 migration across multiple production services, managing dependency upgrades, resolving complex compatibility issues, automated testing via GitHub Actions, and zero-downtime deployments.",
      "Revolutionized integration testing infrastructure by migrating from embedded Cassandra to TestContainers, creating production-parity environments that eliminated flaky tests, enabled parallel test execution, and improved CI/CD pipeline reliability by 40%.",
      "Developed backend infrastructure for next-generation video ad serving system launching across kroger.com and mobile apps, building scalable APIs for video content delivery, impression tracking, and engagement analytics.",
      "Engineered frontend ad placement systems identifying optimal ad spots and implementing real-time auction logic for UPC-based product advertising to maximize revenue and user engagement across web and mobile platforms.",
      "Built RESTful APIs for ad serving and bidding systems, integrating with third-party ad networks and internal inventory management services to deliver personalized product advertisements at scale.",
      "Developed comprehensive regression test suites and monitoring dashboards protecting revenue-critical ad placement functionality, preventing production incidents and revenue loss across all ad formats.",
      "Implemented advanced auction algorithms that dynamically select winning ads based on bid price, placement context, user behavior, and product relevance, optimizing eCPM and click-through rates.",
      "Collaborated cross-functionally with Product, Data Science, and UX teams to define ad placement strategies, A/B test new features including video ads, and iterate on monetization metrics driving business KPIs.",
      "Orchestrated production deployments using Harness and Rancher (Kubernetes), implementing blue-green deployments, progressive rollouts, canary releases, and automated health checks achieving 99.9% uptime for ad services.",
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
      "Kotlin",
      "Dynatrace",
      "Postman",
      "Grafana"
    ],
  },
  amazon: {
    title: "Software Development Engineer",
    company: "Amazon",
    period: "May 2022 – Jan 2025",
    details: [
      "Developed 'Prime Traffic Insights', a full-stack traffic analysis platform for Prime Video leadership, reducing routing decision-making time by 40% and enabling real-time traffic management for 10M+ concurrent viewers during high-profile events like Thursday Night Football.",
      "Built scalable backend workflow using Python and AWS S3 to preprocess raw JSON telemetry data, transforming petabytes of streaming metrics into actionable insights with Java/Spring Boot APIs and React.js dashboards.",
      "Re-architected monolithic URL Service into two microservices using Java and Spring Boot: URL transformation API and CDN routing engine with XML-based policy management, achieving 99.99% availability across multi-region Prime Video infrastructure.",
      "Engineered RESTful APIs serving Prime Video's global content delivery network, optimizing traffic distribution across regions, ISPs, and device types while maintaining sub-100ms response times for millions of daily requests.",
      "Optimized CI/CD pipelines using Jenkins, AWS CodePipeline, and Git, automating deployment workflows that saved engineering teams 20+ hours weekly and increased deployment frequency by 40% while maintaining zero-downtime releases.",
      "Spearheaded migration of Prime Video systems to Amazon Linux 2 (AL2), reducing infrastructure costs by 25% while enhancing performance, security, and stability for global streaming services supporting millions of concurrent streams.",
      "Led on-call operations during critical high-traffic events, reducing incident resolution time by 35% through automated runbooks and monitoring dashboards built with AWS CloudWatch and Splunk, ensuring seamless viewer experience.",
      "Implemented gradual deployment strategies (canary releases, blue-green deployments) for high-impact changes, reducing production downtime by 40% and mitigating risks across large-scale distributed systems.",
      "Established cloud infrastructure on AWS EKS for container orchestration and Lambda for serverless computing, containerizing microservices with Docker and managing custom images for scalable, resilient applications.",
      "Optimized SQL and Oracle databases supporting Prime Video's metadata and analytics pipelines through advanced indexing, query optimization, and performance tuning, reducing query latency by 50%.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Python",
      "React.js",
      "AWS (S3, EKS, Lambda, CloudWatch, CodePipeline, DynamoDB, EC2, IAM)",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
      "Splunk",
      "SQL",
      "Oracle",
      "XML",
      "JSON",
    ]
  },
  "subex": {
    title: "Software Developer",
    company: "Subex",
    period: "Jan 2019 – Aug 2021",
    details: [
      "Streamlined payment workflows by designing batch processing systems with scheduled jobs using Spring Framework, reducing transaction costs and saving $250,000 annually in operational expenses.",
      "Automated microservices deployment with Spring Boot and Kafka, cutting configuration time by 30% and enabling real-time inter-service communication for enhanced system scalability and resilience.",
      "Developed full-stack telecom billing application using Spring MVC, Hibernate ORM, and Angular 6, implementing dependency injection (DI/IOC), aspect-oriented programming (AOP), and transaction management for modular, maintainable code.",
      "Built reusable Angular components and services consuming RESTful APIs with component-based architecture, integrated with Node.js backend for server-side rendering and optimal performance.",
      "Designed robust microservice architecture following industry best practices, enhancing system modularity, scalability, and fault isolation across distributed services.",
      "Maintained and enhanced critical mainframe applications using COBOL, JCL, CICS, and DB2, ensuring 99.9% system availability and data integrity for business-critical telecom operations.",
      "Optimized build and release processes with Maven and Jenkins CI/CD pipelines, enabling consistent, error-free deployments and accelerating feature releases by 20% while automating testing workflows.",
      "Integrated Splunk for centralized log monitoring and troubleshooting, reducing mean time to resolution (MTTR) by 25% through proactive issue detection and real-time system observability.",
      "Reduced system downtime by 25% through expert Kubernetes troubleshooting and pod management, ensuring seamless operations during high-demand periods and maintaining SLA commitments.",
      "Engineered high-performance persistence layer using Hibernate with POJO mappings, and developed optimized PL/SQL stored procedures, functions, triggers, and indexes, reducing database query response time by 40%.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Hibernate",
      "Kafka",
      "Angular 6",
      "Node.js",
      "HTML5",
      "CSS3",
      "Maven",
      "Jenkins",
      "Kubernetes",
      "Docker",
      "Splunk",
      "COBOL",
      "JCL",
      "CICS",
      "DB2",
      "PL/SQL",
      "Oracle",
      "REST APIs",
    ]
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
