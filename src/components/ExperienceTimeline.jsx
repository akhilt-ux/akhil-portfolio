// components/ExperienceTimeline.jsx
import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(duration);
dayjs.extend(relativeTime);

const experiences = [
  {
    id: "us-bank",
    company: "US Bank",
    title: "Sr. Full Stack Developer",
    period: "Apr 2024 – Present",
    start: "2024-04-01",
    end: null,
  },
  {
    id: "elevance",
    company: "Elevance Health",
    title: "Sr. Full Stack Java Developer",
    period: "Aug 2022 – Mar 2024",
    start: "2022-08-01",
    end: "2024-03-01",
  },
  {
    id: "costco",
    company: "Costco Wholesale",
    title: "Full Stack Developer",
    period: "Feb 2021 – Jul 2022",
    start: "2021-02-01",
    end: "2022-07-01",
  },
  {
    id: "key-bank",
    company: "Key Bank",
    title: "Java Developer",
    period: "Apr 2019 – Jan 2021",
    start: "2019-04-01",
    end: "2021-01-01",
  },
  {
    id: "state-farm",
    company: "State Farm",
    title: "Java Developer",
    period: "Oct 2016 – Dec 2018",
    start: "2016-10-01",
    end: "2018-12-01",
  },
];

const formatDuration = (start, end) => {
  const startDate = dayjs(start);
  const endDate = end ? dayjs(end) : dayjs();
  const years = endDate.diff(startDate, "year");
  const months = endDate.diff(startDate.add(years, "year"), "month");
  return `${years ? `${years} yr${years > 1 ? "s" : ""}` : ""} ${
    months ? `${months} mo${months > 1 ? "s" : ""}` : ""
  }`;
};

const ExperienceTimeline = () => {
  return (
    <section className="py-6 px-2 bg-transparent text-white min-h-screen overflow-y-auto">
      <h2 className="text-3xl font-bold text-center mb-10 relative">
        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Experience
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-sm"></span>
      </h2>
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500"></div>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`mb-6 flex w-full items-start ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } animate-fade-in-up`}
          >
            <div className="w-1/2 px-2">
              <Link
                to={`/experience/${exp.id}`}
                className="group block bg-white/10 hover:bg-blue-800/20 p-4 rounded-md shadow border border-gray-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl relative"
              >
                <h3 className="text-sm font-semibold mb-1 group-hover:text-blue-300 transition-colors">
                  {exp.company}
                </h3>
                <p className="text-gray-300 text-xs mb-1">{exp.title}</p>
                <p className="text-xs text-blue-300 italic">{exp.period}</p>
                <p className="mt-1 text-blue-400 underline text-xs">
                  View Details →
                </p>
                <span className="absolute top-2 right-3 text-[10px] bg-blue-900/30 text-blue-200 rounded-full px-2 py-0.5">
                  {formatDuration(exp.start, exp.end)}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
