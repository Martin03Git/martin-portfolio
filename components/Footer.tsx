import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Martin. Built with React, Tailwind & Gemini AI.
        </p>
        <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-accent-600 dark:hover:text-accent-500 transition-colors">Twitter</a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-accent-600 dark:hover:text-accent-500 transition-colors">LinkedIn</a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-accent-600 dark:hover:text-accent-500 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;