"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Import projects from JSON
import projectsData from "../data/projects.json";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    projectsData.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Filter projects by search and tag
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );
      const matchesTag = selectedTag
        ? project.tags.includes(selectedTag)
        : true;
      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      <div className="relative z-10 text-center px-4">
        {/* Section Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 mt-12 text-center text-gray-900"
        >
          Projects
        </motion.h1>

        {/* Sticky Filter/Search Bar */}
        <div className=" flex-col mb-4 md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 focus:outline-blue-400 focus:ring-2"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-2 mb-4 md:mt-0">
          <button
            className={`px-3 py-1 rounded-full border font-semibold transition ${
              selectedTag === ""
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100"
            }`}
            onClick={() => setSelectedTag("")}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={String(tag)}
              className={`px-3 py-1 rounded-full border font-semibold transition ${
                selectedTag === String(tag)
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
              onClick={() => setSelectedTag(String(tag))}
            >
              {String(tag)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No projects found.
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener"
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.galerie[0] || "/code.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="text-xl font-bold mb-1 text-blue-900 group-hover:text-blue-700 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-2 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-1">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">
                      {project.start_date} - {project.end_date}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))
          )}
        </div>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/"
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition text-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
