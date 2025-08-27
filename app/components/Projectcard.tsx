import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  context: string;
  problem?: string;
  solution?: string;
  actions: string[];
  difficulties?: string;
  results: string;
  tags: string[];
  start_date: string;
  end_date: string;
  link?: string;
  galerie: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  index,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(
    project.galerie[0] || "/code.jpg"
  );
  // Update image source when project changes (fixes stale image after filtering)
  useEffect(() => {
    setImgSrc(project.galerie?.[0] || "/code.jpg");
  }, [project.galerie]);
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left"
      style={{ all: "unset", cursor: "pointer" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full h-full sm:w-[320px] sm:h-[420px] md:w-[340px] md:h-[440px] lg:w-[360px] lg:h-[460px] xl:w-[400px] xl:h-[500px]"
      >
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgSrc("/code.jpg")}
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
    </button>
  );
};

export default ProjectCard;
