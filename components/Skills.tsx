import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../types';
import { SKILLS } from '../constants';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Layout': <Layout className="w-6 h-6" />,
  'Database': <Database className="w-6 h-6" />,
  'Terminal': <Terminal className="w-6 h-6" />,
  'Code2': <Code2 className="w-6 h-6" />,
};

const Skills: React.FC = () => {
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
      id={SectionId.SKILLS} 
      ref={sectionRef}
      className="py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-accent-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((category, idx) => (
            <div 
              key={idx} 
              className={`p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-accent-500/50 transition-all duration-500 group transform shadow-sm dark:shadow-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-lg flex items-center justify-center text-accent-600 dark:text-accent-500 mb-6 group-hover:scale-110 transition-transform border border-zinc-200 dark:border-zinc-800">
                {iconMap[category.icon] || <Code2 />}
              </div>
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full group-hover:bg-accent-500 transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;