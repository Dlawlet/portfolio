import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  context: string;
  problem: string;
  solution: string;
  actions: string[];
  difficulties: string;
  results: string;
  tags: string[];
  start_date: string;
  end_date: string;
  link?: string;
  galerie: string[];
}

interface ProjectDetailsProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetails({
  project,
  onClose,
}: ProjectDetailsProps) {
  if (!project) return null;
  const [imgSrc, setImgSrc] = useState(project.galerie[0] || "/code.jpg");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (lightboxIndex !== null && project) {
        if (e.key === "ArrowRight")
          setLightboxIndex((i) =>
            i === null
              ? null
              : Math.min(project.galerie.length - 1, (i ?? 0) + 1)
          );
        if (e.key === "ArrowLeft")
          setLightboxIndex((i) =>
            i === null ? null : Math.max(0, (i ?? 0) - 1)
          );
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, project.galerie.length]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-2xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="aspect-video mb-4 relative rounded-lg overflow-hidden">
          <Image
            src={imgSrc}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setImgSrc("/code.jpg")}
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-blue-900">
          {project.title}
        </h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="mb-2">
          <h3 className="font-semibold text-black">Context:</h3>
          <p className="text-justify text-gray-600">{project.context}</p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-black">Problem:</h3>
          <p className="text-justify text-gray-600">{project.problem}</p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-black">Solution:</h3>
          <p className="text-justify text-gray-600">{project.solution}</p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-black">Actions:</h3>
          <p className="text-justify text-gray-600">
            <ul className="list-disc ml-6 text-gray-600">
              {project.actions.map((action, i) => (
                <li key={i}>{action}</li>
              ))}
            </ul>
          </p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-black">Difficulties:</h3>
          <p className="text-justify text-gray-600">{project.difficulties}</p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-black">Results:</h3>
          <p className="text-justify text-gray-600">{project.results}</p>
        </div>
        <div className="mb-2">
          <h3 className="font-semibold text-black">Gallery:</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.galerie.map((image, i) => (
              <div key={i} className="w-1/3">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="w-full h-full p-0 m-0 rounded-lg overflow-hidden block"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Gallery Image ${i + 1}`}
                    width={300}
                    height={200}
                    className="object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      // Next/Image doesn't provide direct src mutation; rely on fallback thumbnail by replacing src attr
                      // This handler is mainly for the native img fallback; keep it minimal.
                      target.src = "/code.jpg";
                    }}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox overlay */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-90">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold z-70"
              aria-label="Close image"
            >
              &times;
            </button>

            <button
              onClick={() =>
                setLightboxIndex((i) =>
                  i === null ? null : Math.max(0, i - 1)
                )
              }
              className="absolute left-6 text-white text-4xl font-bold z-70"
              aria-label="Previous image"
            >
              ‹
            </button>

            <div className="max-w-full max-h-full w-full h-full flex items-center justify-center px-6">
              <div className="relative w-full h-full max-w-6xl max-h-[92vh]">
                <Image
                  src={project.galerie[lightboxIndex] || "/code.jpg"}
                  alt={`${project.title} - Image ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                  onError={() => {}}
                />
              </div>
            </div>

            <button
              onClick={() =>
                setLightboxIndex((i) =>
                  i === null
                    ? null
                    : Math.min(project.galerie.length - 1, i + 1)
                )
              }
              className="absolute right-6 text-white text-4xl font-bold z-70"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        )}

        <div className="mb-2">
          <span className="font-semibold text-gray-600">Tags:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-2 text-xs text-gray-400">
          {project.start_date} - {project.end_date}
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition"
          >
            Visit Project
          </a>
        ) : null}
      </motion.div>
    </div>
  );
}
