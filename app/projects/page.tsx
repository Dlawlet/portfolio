"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ProjectDetails from "../components/ProjectDetails";
import ProjectCard from "../components/Projectcard";

// Import projects from JSON
import projectsData from "../data/projects.json";

type Project = (typeof projectsData)[number] & {
  link?: string;
};

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Collect all unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    projectsData.forEach((p) => p.tags?.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Filter projects by search and tag
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        (project.title?.toLowerCase() || "").includes(search.toLowerCase()) ||
        (project.description?.toLowerCase() || "").includes(
          search.toLowerCase()
        ) ||
        project.tags?.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        ) ||
        false;
      const matchesTag = selectedTag
        ? project.tags?.includes(selectedTag) || false
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
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
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
        <div
          className="grid gap-8 mt-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">
              No projects found.
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <div key={index} className="flex justify-center">
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  index={index}
                />
              </div>
            ))
          )}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <ProjectDetails
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {/* Back to Home Button */}
        <div className="flex justify-center mt-16">
          <Link
            href="/"
            className="px-8 mb-16 py-4 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition text-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

// Using reusable ProjectCard component from components/Projectcard.tsx
