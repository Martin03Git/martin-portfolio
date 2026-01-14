import React, { useState, useEffect } from 'react';
import { SectionId } from '../types.ts';
import { Menu, X, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.HOME, label: 'Home' },
    { id: SectionId.ABOUT, label: 'About' },
    { id: SectionId.SKILLS, label: 'Skills' },
    { id: SectionId.PROJECTS, label: 'Projects' },
    { id: SectionId.CONTACT, label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection(SectionId.HOME)}
        >
          <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-accent-500/50 transition-colors">
            <Terminal className="w-5 h-5 text-accent-500" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Martin<span className="text-accent-500">.dev</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a 
            href="#" 
            className="px-4 py-2 bg-accent-600 text-white text-sm font-semibold rounded hover:bg-accent-500 transition-all shadow-lg shadow-accent-600/20"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-zinc-300 hover:text-accent-500 py-2 text-lg font-medium border-b border-zinc-800/50"
            >
              {link.label}
            </button>
          ))}
          <a 
            href="#" 
            className="mt-2 w-full text-center py-3 bg-accent-600 text-white font-bold rounded"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;