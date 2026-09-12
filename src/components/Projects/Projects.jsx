"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const PROJECTS_URL = "https://raw.githubusercontent.com/Amine-Triki/projects-data/main/projects.json";

const normalizeProjects = (payload) => {
  const projects = Array.isArray(payload)
    ? payload
    : Array.isArray(payload?.projects)
      ? payload.projects
      : Array.isArray(payload?.data)
        ? payload.data
        : [];

  return projects.filter((project) => project && typeof project === "object");
};

const ExternalLink = ({ href, children, className = "", ...props }) => (
  <a href={href} className={className} target="_blank" rel="noreferrer" {...props}>
    {children}
  </a>
);

const ProjectActions = ({ project, onScreenshots }) => {
  if (Array.isArray(project.variants) && project.variants.length > 0) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {project.variants.map((variant) => (
          <div className="flex items-center rounded-full border border-cyan-400/60" key={variant.stack}>
            <ExternalLink href={variant.link} className="px-3 py-1 text-sm text-cyan-700 hover:bg-cyan-50">
              {variant.stack}
            </ExternalLink>
            {variant.github && (
              <ExternalLink href={variant.github} className="border-l border-cyan-400/60 px-2 py-1 text-slate-700 hover:text-cyan-600" aria-label={`GitHub repository for ${variant.stack}`}>
                <FaGithub aria-hidden="true" />
              </ExternalLink>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.link && <ExternalLink href={project.link} className="rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-white hover:bg-cyan-600">Live Preview</ExternalLink>}
      {project.github && <ExternalLink href={project.github} className="rounded-lg border border-slate-400 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">GitHub</ExternalLink>}
      {Array.isArray(project.screenshots) && project.screenshots.length > 0 && (
        <button type="button" onClick={() => onScreenshots(project.screenshots)} className="rounded-lg border border-cyan-500 px-3 py-2 text-sm font-semibold text-cyan-700 hover:bg-cyan-50">
          View Screenshots
        </button>
      )}
    </div>
  );
};

const ProjectCard = ({ project, featured, onScreenshots }) => (
  <article className={`flex h-full flex-col overflow-hidden rounded-xl border-2 border-slate-200 bg-white shadow-sm ${featured ? "lg:flex-row" : ""}`}>
    {project.imageSrc ? (
      <Image src={project.imageSrc} className={`w-full object-cover ${featured ? "lg:h-auto lg:w-2/5" : "h-48"}`} alt={project.title || "Project image"} width={featured ? 640 : 400} height={featured ? 360 : 220} unoptimized />
    ) : (
      <div className={`flex items-center justify-center bg-slate-100 text-sm text-slate-500 ${featured ? "min-h-48 lg:w-2/5" : "h-48"}`} aria-label="No project image available">
        No image available
      </div>
    )}
    <div className="flex flex-1 flex-col p-5 text-left">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-cyan-700">{project.title || "Untitled project"}</h3>
        <span className="shrink-0 rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">{project.category}</span>
      </div>
      <p className={`text-slate-700 ${featured ? "mb-5" : "mb-4"}`}>{project.description}</p>
      {Array.isArray(project.technologies) && project.technologies.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => <span key={technology} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">{technology}</span>)}
        </div>
      )}
      <div className="mt-auto"><ProjectActions project={project} onScreenshots={onScreenshots} /></div>
    </div>
  </article>
);

const ScreenshotModal = ({ screenshots, activeScreenshot, onSelect, onClose }) => {
  if (!screenshots?.length || !activeScreenshot) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-label="Project screenshots">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-xl bg-white p-4">
        <div className="mb-3 flex justify-end">
          <button type="button" onClick={onClose} className="rounded px-3 py-1 text-2xl leading-none text-slate-600 hover:bg-slate-100" aria-label="Close screenshots">&times;</button>
        </div>
        <Image src={activeScreenshot} alt="Project screenshot" width={1200} height={800} className="mx-auto max-h-[60vh] w-auto object-contain" unoptimized />
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {screenshots.map((screenshot) => (
            <button type="button" key={screenshot} onClick={() => onSelect(screenshot)} className={`shrink-0 rounded ${activeScreenshot === screenshot ? "ring-2 ring-cyan-500 ring-offset-2" : ""}`}>
              <Image src={screenshot} alt="" width={100} height={70} className="h-16 w-24 object-cover" unoptimized />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [screenshots, setScreenshots] = useState(null);
  const [activeScreenshot, setActiveScreenshot] = useState(null);

  useEffect(() => {
    fetch(PROJECTS_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load projects");
        return response.json();
      })
      .then((payload) => setProjects(normalizeProjects(payload)))
      .catch((loadError) => {
        console.error("Error loading projects:", loadError);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = ["all", ...new Set(projects.map((project) => project.category).filter(Boolean))];
  const featuredProjects = projects.filter((project) => project.featured === true);
  const filteredProjects = projects.filter((project) => project.featured !== true && (activeCategory === "all" || project.category === activeCategory));
  const openScreenshots = (images) => {
    const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
    if (validImages.length === 0) return;
    setScreenshots(validImages);
    setActiveScreenshot(validImages[0]);
  };

  if (loading) return <div className="flex min-h-[20rem] items-center justify-center"><div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" /></div>;
  if (error) return <p className="py-12 text-center text-slate-700">Projects could not be loaded right now.</p>;

  return (
    <main className="px-4 pb-12">
      <section className="mx-auto max-w-6xl pt-5">
        {featuredProjects.length > 0 && (
          <>
            <h2 className="mb-6 text-2xl font-bold text-cyan-700">Featured Projects</h2>
            <div className="mb-12 grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project) => <ProjectCard key={project.title} project={project} featured onScreenshots={openScreenshots} />)}
            </div>
          </>
        )}
        <h2 className="mb-6 text-2xl font-bold text-cyan-700">All Projects</h2>
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {categories.map((category) => (
            <button key={category} type="button" role="tab" aria-selected={activeCategory === category} onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-700 hover:bg-cyan-100"}`}>
              {category === "all" ? "All" : category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => <ProjectCard key={project.title} project={project} onScreenshots={openScreenshots} />)}
        </div>
      </section>
      <ScreenshotModal screenshots={screenshots} activeScreenshot={activeScreenshot} onSelect={setActiveScreenshot} onClose={() => setScreenshots(null)} />
    </main>
  );
};

export default Projects;
