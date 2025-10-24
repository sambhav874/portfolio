'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Interface for project data
interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Number of projects to display initially
  const initialProjectCount = 4;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get<{ success: boolean; data: Project[] }>('/api/projects');
        if (response.data.success) {
          setProjects(response.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  // Determine which projects to show based on the expansion state
  const projectsToShow = isExpanded ? projects : projects.slice(0, initialProjectCount);

  return (
    <section id="projects" className="py-16 max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight text-center text-white mb-4">
          Selected Work
        </h2>
        <div className="h-px w-24 bg-primary" />
      </div>

      {/* Grid Container for Projects */}
      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 grid-cols-3 gap-8"
        >
          {projectsToShow.map((project) => (
            <motion.div
              key={project._id}
              layout // This prop animates layout changes (e.g., when new items are added)
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="group relative flex flex-col" // Added flex for consistent card height
            >
              {/* Project Card */}
              <div className="flex flex-col h-full border border-slate-800 hover:border-primary/50 transition-all duration-300 p-8 bg-black rounded-lg">
                <div className="flex-grow">
                  <h3 className="text-2xl font-light text-white tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 font-light leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-light px-3 py-1 border border-slate-700 rounded-full text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors" aria-label={`${project.title} GitHub repository`}>
                      <Github size={20} />
                    </a>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5 text-sm">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* "Show More" / "Show Less" Button */}
      {projects.length > initialProjectCount && (
        <div className="text-center mt-16">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-300 text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Projects;