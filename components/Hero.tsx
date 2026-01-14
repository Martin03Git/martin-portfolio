import React, { useState, useEffect } from 'react';
import { SectionId } from '../types.ts';
import { ArrowRight, Download } from 'lucide-react';

const ROTATING_TEXTS = [
  "Frontend Development",
  "Backend Integration",
  "Workflow Automation"
];

const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-accent-400/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-xs font-mono mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
          Available for Internships
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1] animate-fade-in-up">
          Exploring <br />
          <span 
            className={`inline-block text-accent-500 transition-all duration-500 transform ${
              isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
             {ROTATING_TEXTS[currentTextIndex]}
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          Hi, I'm Martin. I'm a university student dedicated to mastering the art of building scalable, 
          beautiful web applications. Currently bridging the gap between design and code.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <button 
            onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-accent-600 text-white font-bold text-lg rounded-xl hover:bg-accent-500 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center shadow-xl shadow-accent-600/20"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold text-lg rounded-xl hover:bg-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            <Download className="w-5 h-5" />
            Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;