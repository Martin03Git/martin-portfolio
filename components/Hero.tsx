import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { ArrowRight, Download } from 'lucide-react';

const ROTATING_TEXTS = [
  "Frontend Development.",
  "Backend Integration.",
  "Workflow Automation."
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
      }, 500); // Wait for fade out transition
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id={SectionId.HOME} className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent-500/10 dark:bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-zinc-300/20 dark:bg-zinc-700/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs font-mono mb-8 animate-fade-in-up shadow-sm dark:shadow-none"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
          Open to Internships & Junior Roles
        </div>
        
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-zinc-900 dark:text-zinc-100 mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Exploring <br />
          <span 
            className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-900 dark:from-zinc-200 dark:to-zinc-600 transition-all duration-500 transform ${
              isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
             {ROTATING_TEXTS[currentTextIndex]}
          </span>
        </h1>
        
        <p 
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Hi, I'm Martin. I'm a university student and a web development enthusiast.
          I'm currently exploring everything from frontend layouts to backend databases.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <button 
            onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-accent-600 text-white dark:text-zinc-950 font-bold text-lg rounded hover:bg-accent-500 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
          >
            View My Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium text-lg rounded hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;