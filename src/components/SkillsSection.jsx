import React from "react";
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

const SkillsSection = () => {
  return (
    <section className="py-16 px-6 bg-transparent text-white" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center gradient-text">
          Skills
        </h2>

        {/* 🔹 Programming Languages & Frameworks */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Programming Languages & Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem
              icon={<FaJava size={32} color="#007396" />}
              label="Java"
            />
            <SkillItem
              icon={<SiSpringboot size={32} color="#6DB33F" />}
              label="Spring Boot"
            />
            <SkillItem
              icon={<FaPython size={32} color="#3776AB" />}
              label="Python"
            />
            <SkillItem
              icon={<FaReact size={32} color="#61DAFB" />}
              label="ReactJS"
            />
            <SkillItem
              icon={<SiAngular size={32} color="#DD0031" />}
              label="Angular"
            />
            <SkillItem
              icon={<FaNodeJs size={32} color="#339933" />}
              label="NodeJS"
            />
            <SkillItem
              icon={<SiTypescript size={32} color="#3178C6" />}
              label="TypeScript"
            />
            <SkillItem
              icon={<SiJavascript size={32} color="#F7DF1E" />}
              label="JavaScript"
            />
            <SkillItem icon={<SiGo size={32} color="#00ADD8" />} label="Go" />
            <SkillItem
              icon={<SiRuby size={32} color="#CC342D" />}
              label="Ruby"
            />
            <SkillItem
              icon={<SiKotlin size={32} color="#7F52FF" />}
              label="Kotlin"
            />
            <SkillItem
              icon={<SiCplusplus size={32} color="#00599C" />}
              label="C++"
            />
            <SkillItem icon={<SiC size={32} color="#A8B9CC" />} label="C" />
          </div>
        </div>

        {/* 🔹 Databases */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Databases
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem
              icon={<SiPostgresql size={32} color="#336791" />}
              label="PostgreSQL"
            />
            <SkillItem
              icon={<SiMysql size={32} color="#4479A1" />}
              label="MySQL"
            />
            <SkillItem
              icon={<SiMongodb size={32} color="#47A248" />}
              label="MongoDB"
            />
            <SkillItem
              icon={<SiRedis size={32} color="#DC382D" />}
              label="Redis"
            />
            <SkillItem
              icon={<FaDatabase size={32} color="#404040" />}
              label="Cassandra"
            />
            <SkillItem
              icon={<FaDatabase size={32} color="#4053D6" />}
              label="DynamoDB"
            />
          </div>
        </div>

        {/* 🔹 Cloud & DevOps */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Cloud & DevOps Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem icon={<FaAws size={32} color="#FF9900" />} label="AWS" />
            <SkillItem
              icon={<SiMicrosoftazure size={32} color="#0078D4" />}
              label="Azure"
            />
            <SkillItem
              icon={<SiAmazonaws size={32} color="#FF9900" />}
              label="DynamoDB"
            />
            <SkillItem
              icon={<FaDocker size={32} color="#2496ED" />}
              label="Docker"
            />
            <SkillItem
              icon={<SiKubernetes size={32} color="#326CE5" />}
              label="Kubernetes"
            />
            <SkillItem
              icon={<FaJenkins size={32} color="#D24939" />}
              label="Jenkins"
            />
            <SkillItem
              icon={<FaLinux size={32} color="#FCC624" />}
              label="Linux"
            />
          </div>
        </div>

        {/* 🔹 Messaging & Other Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Messaging & Other Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem
              icon={<SiApachekafka size={32} color="#231F20" />}
              label="Kafka"
            />
            <SkillItem
              icon={<SiRabbitmq size={32} color="#FF6600" />}
              label="RabbitMQ"
            />
            <SkillItem
              icon={<SiGraphql size={32} color="#E10098" />}
              label="GraphQL"
            />
            <SkillItem
              icon={<FaGitAlt size={32} color="#F05032" />}
              label="Git"
            />
            <SkillItem
              icon={<SiBitbucket size={32} color="#0052CC" />}
              label="Bitbucket"
            />
            <SkillItem
              icon={<FaJira size={32} color="#0052CC" />}
              label="Jira"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, label }) => (
  <div className="flex flex-col items-center bg-gray-800 hover:bg-gray-700 rounded-lg p-4 shadow-lg">
    {icon}
    <span className="mt-2 text-sm text-center">{label}</span>
  </div>
);

export default SkillsSection;
