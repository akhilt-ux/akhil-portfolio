// import React from "react";

// const projects = [
//   {
//     name: "Auto Reserve Price Admin",
//     description:
//       "A cloud-native auto lending platform for processing dealership loan applications with APR calculations, AI predictions, and real-time decisioning using Kafka and AWS.",
//     tech: ["Java", "Spring Boot", "Kafka", "AWS EKS", "Angular"],
//     link: "#",
//   },
//   {
//     name: "Smart Home Backend",
//     description:
//       "An IoT backend with APIs to manage smart devices and user profiles using AWS Lambda & DynamoDB.",
//     tech: ["Java", "AWS Lambda", "API Gateway", "DynamoDB"],
//     link: "#",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="py-16 px-6 bg-[#0a0f1f]" id="projects">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-8">
//           Featured Projects
//         </h2>
//         {projects.map((project, idx) => (
//           <div key={idx} className="mb-8 p-6 bg-[#0a0f1f] shadow rounded-lg">
//             <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
//             <p className="mb-2">{project.description}</p>
//             <div className="flex flex-wrap space-x-2 mb-4">
//               {project.tech.map((tech, i) => (
//                 <span
//                   key={i}
//                   className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <a href={project.link} className="text-blue-500 hover:underline">
//               See Live
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
