import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={SectionId.PROJECTS} 
      ref={sectionRef}
      className="py-24 bg-zinc-100 dark:bg-zinc-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-md text-sm md:text-right">
            A selection of personal work that showcases my passion for clean code and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 flex flex-col transform transition-all duration-500 shadow-md dark:shadow-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent dark:from-zinc-900 dark:to-transparent opacity-60 dark:opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links - Only rendered if links exist */}
                {(project.github || project.link) && (
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    {project.github && (
                      <a href={project.github} className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="flex items-center gap-1 text-sm text-zinc-600 dark:text-zinc-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors ml-auto">
                        <span>Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                )}
                
                {/* Fallback for Coming Soon cards without links */}
                {(!project.github && !project.link) && (
                  <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 text-sm text-zinc-400 italic">
                    In development
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;