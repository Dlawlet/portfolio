"use client";

import { motion } from "framer-motion";

const skills_softwareDev = [
  { skill: "Java", level: 40 },
  { skill: "JavaScript", level: 50 },
  { skill: "C++", level: 40 },
  { skill: "Kotlin", level: 50 },
];
const skills_dataML = [
  { skill: "Python", level: 85 },
  { skill: "Pandas", level: 85 },
  { skill: "NumPy", level: 90 },
  { skill: "Scikit-Learn", level: 80 },
  { skill: "Matplotlib", level: 80 },
  { skill: "Seaborn", level: 75 },
  { skill: "SQL", level: 70 },
  { skill: "NoSQL", level: 65 },
  { skill: "Data Visualization", level: 75 },
  { skill: "Data Cleaning", level: 80 },
  { skill: "Data Analysis", level: 80 },
  { skill: "TensorFlow", level: 70 },
  { skill: "Machine Learning", level: 75 },
];

const skills_DevOps = [
  { skill: "Docker", level: 75 },
  { skill: "CI/CD", level: 75 },
  { skill: "AWS", level: 65 },
  { skill: "Linux", level: 80 },
  { skill: "Airflow", level: 75 },
  { skill: "Terraform", level: 70 },
  { skill: "PostgreSQL", level: 70 },
  { skill: "MongoDB", level: 65 },
];

const skills_WebDev = [
  { skill: "HTML", level: 95 },
  { skill: "CSS", level: 90 },
  { skill: "JavaScript", level: 50 },
  { skill: "React", level: 50 },
  { skill: "Next.js", level: 50 },
  { skill: "Responsive Design", level: 65 },
  { skill: "TypeScript", level: 50 },
];

const Annex = [
  "git",
  "GitHub",
  "Agile Methodologies",
  "Scrum",
  "XP Programming",
  "Slack",
  "Adobe Illustrator",
  "Canva",
  "Gantt Charts",
];

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900"
        >
          Technical Skills
        </motion.h2>

        {/* Data & Machine learning */}
        <h3 className="text-xl font-semibold mb-4 mt-10">
          Data & Machine Learning
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills_dataML.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm text-gray-700">
                <span>{item.skill}</span>
                <span>{item.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software Development */}
        <h3 className="text-xl font-semibold mb-4 mt-16">
          Software Development
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills_softwareDev.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm text-gray-700">
                <span>{item.skill}</span>
                <span>{item.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* DevOps */}
        <h3 className="text-xl font-semibold mb-4 mt-16">DevOps</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills_DevOps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm text-gray-700">
                <span>{item.skill}</span>
                <span>{item.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Web Development */}
        <h3 className="text-xl font-semibold mb-4 mt-16">Web Development</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills_WebDev.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between text-sm text-gray-700">
                <span>{item.skill}</span>
                <span>{item.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/*Extra Skills*/}
        <h3 className="text-xl font-semibold mb-4 mt-16">Annex</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {Annex.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 bg-white-100 text-blue-700 rounded-full border border-blue-200"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
