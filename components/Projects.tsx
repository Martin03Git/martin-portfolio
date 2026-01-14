import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../types.ts';
import { PROJECTS } from '../constants.ts';
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
      className="py-24 bg-zinc-900/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
            <div className="w-16 h-1 bg-accent-500 rounded-full"></div>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-right leading-relaxed">
            A showcase of my recent coding projects, from API experiments to dynamic web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 flex flex-col transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-zinc-800/50 rounded border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-800">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                      <Github size={16} />
                      <span>Source</span>
                    </a>
                  )}
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-accent-500 hover:text-accent-400 font-bold transition-colors">
                      <span>View Live</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-600 italic">Work in progress</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;