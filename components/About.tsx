import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../types';
import { ABOUT_ME } from '../constants';

const About: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id={SectionId.ABOUT} 
      ref={sectionRef}
      className="py-24 bg-zinc-50/50 dark:bg-zinc-900/50 border-y border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
       <div className={`max-w-4xl mx-auto px-6 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">About Me</h2>
          <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
            {ABOUT_ME}
          </p>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
                { label: 'Years Learning', value: '1.5+' },
                { label: 'Projects Built', value: '15+' },
                { label: 'Status', value: 'Student' }
            ].map((stat, i) => (
                <div 
                  key={i} 
                  className={`flex flex-col items-center transform transition-all duration-700 delay-[${i * 100}ms] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                    <span className="text-3xl font-bold text-accent-600 dark:text-accent-500">{stat.value}</span>
                    <span className="text-sm text-zinc-500 uppercase tracking-wider mt-2">{stat.label}</span>
                </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default About;