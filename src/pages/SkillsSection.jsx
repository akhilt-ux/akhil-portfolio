import React from "react";
import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDatabase,
  FaPython,
  FaGitAlt,
  FaJira,
  FaJenkins,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiKubernetes,
  SiApachekafka,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiTypescript,
  SiJavascript,
  SiRabbitmq,
  SiCplusplus,
  SiC,
  SiGo,
  SiRuby,
  SiKotlin,
  SiAmazonaws,
  SiBitbucket,
  SiAngular,
  SiMicrosoftazure,
} from "react-icons/si";

const cardVariants = {
  offscreen: (i) => ({
    y: 120,
    x: i % 2 === 0 ? -80 : 80,
    opacity: 0,
    rotate: i % 2 === 0 ? -8 : 8,
  }),
  onscreen: {
    y: 0,
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.2,
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        { icon: <FaJava size={32} color="#007396" />, label: "Java" },
        {
          icon: <SiSpringboot size={32} color="#6DB33F" />,
          label: "Spring Boot",
        },
        { icon: <FaPython size={32} color="#3776AB" />, label: "Python" },
        { icon: <FaReact size={32} color="#61DAFB" />, label: "ReactJS" },
        { icon: <SiAngular size={32} color="#DD0031" />, label: "Angular" },
        { icon: <FaNodeJs size={32} color="#339933" />, label: "NodeJS" },
        {
          icon: <SiTypescript size={32} color="#3178C6" />,
          label: "TypeScript",
        },
        {
          icon: <SiJavascript size={32} color="#F7DF1E" />,
          label: "JavaScript",
        },
        { icon: <SiGo size={32} color="#00ADD8" />, label: "Go" },
        { icon: <SiRuby size={32} color="#CC342D" />, label: "Ruby" },
        { icon: <SiKotlin size={32} color="#7F52FF" />, label: "Kotlin" },
        { icon: <SiCplusplus size={32} color="#00599C" />, label: "C++" },
        { icon: <SiC size={32} color="#A8B9CC" />, label: "C" },
      ],
    },
    {
      title: "Databases",
      skills: [
        {
          icon: <SiPostgresql size={32} color="#336791" />,
          label: "PostgreSQL",
        },
        { icon: <SiMysql size={32} color="#4479A1" />, label: "MySQL" },
        { icon: <SiMongodb size={32} color="#47A248" />, label: "MongoDB" },
        { icon: <SiRedis size={32} color="#DC382D" />, label: "Redis" },
        { icon: <FaDatabase size={32} color="#404040" />, label: "Cassandra" },
        { icon: <FaDatabase size={32} color="#4053D6" />, label: "DynamoDB" },
      ],
    },
    {
      title: "Cloud & DevOps Tools",
      skills: [
        { icon: <FaAws size={32} color="#FF9900" />, label: "AWS" },
        {
          icon: <SiMicrosoftazure size={32} color="#0078D4" />,
          label: "Azure",
        },
        { icon: <SiAmazonaws size={32} color="#FF9900" />, label: "DynamoDB" },
        { icon: <FaDocker size={32} color="#2496ED" />, label: "Docker" },
        {
          icon: <SiKubernetes size={32} color="#326CE5" />,
          label: "Kubernetes",
        },
        { icon: <FaJenkins size={32} color="#D24939" />, label: "Jenkins" },
        { icon: <FaLinux size={32} color="#FCC624" />, label: "Linux" },
      ],
    },
    {
      title: "Messaging & Other Tools",
      skills: [
        { icon: <SiApachekafka size={32} color="#231F20" />, label: "Kafka" },
        { icon: <SiRabbitmq size={32} color="#FF6600" />, label: "RabbitMQ" },
        { icon: <SiGraphql size={32} color="#E10098" />, label: "GraphQL" },
        { icon: <FaGitAlt size={32} color="#F05032" />, label: "Git" },
        { icon: <SiBitbucket size={32} color="#0052CC" />, label: "Bitbucket" },
        { icon: <FaJira size={32} color="#0052CC" />, label: "Jira" },
      ],
    },
  ];

  return (
    <section className="py-16 px-6 bg-transparent text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
          Skills
        </h2>
        {skillGroups.map((group, gi) => (
          <div className="mb-12" key={group.title}>
            <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
              {group.title}
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              {group.skills.map((skill, si) => (
                <motion.div
                  key={skill.label}
                  className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 rounded-lg p-4 shadow-lg"
                  custom={si}
                  variants={cardVariants}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: false, amount: 0.4 }}
                >
                  {skill.icon}
                  <span className="mt-2 text-sm text-center">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
