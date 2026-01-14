import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../types.ts';
import { ABOUT_ME } from '../constants.ts';

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
      { threshold: 0.1 }
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
      className="py-24 border-y border-zinc-900"
    >
       <div className={`max-w-4xl mx-auto px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed text-center mb-16 font-light">
            {ABOUT_ME}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
            {[
                { label: 'Years Learning', value: '1.5+' },
                { label: 'Projects Built', value: '15+' },
                { label: 'Current Role', value: 'Student' }
            ].map((stat, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800"
                >
                    <span className="text-3xl font-black text-accent-500">{stat.value}</span>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest mt-2 font-bold">{stat.label}</span>
                </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default About;