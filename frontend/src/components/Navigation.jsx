import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="text-2xl font-bold tracking-tight text-slate-900 hover:text-cyan-600 transition-colors"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Victor
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Recent Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-cyan-600 transition-colors font-medium"
            >
              Contact
            </button>
            <a
              href="https://customer-assets.emergentagent.com/job_353d694e-e37c-4c94-8be4-1e5fa8028169/artifacts/o07r0crl_Victor%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2"
            >
              Recent Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2"
            >
              Contact
            </button>
            <a
              href="https://customer-assets.emergentagent.com/job_353d694e-e37c-4c94-8be4-1e5fa8028169/artifacts/o07r0crl_Victor%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                Download CV
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;