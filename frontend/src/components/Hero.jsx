import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block">
              <span
                className="text-cyan-600 font-mono text-sm font-medium tracking-wider uppercase"
                style={{ fontFamily: 'IBM Plex Mono, monospace' }}
              >
                Full-Stack Developer
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Victor
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Building elegant solutions with modern technologies.
              Passionate about creating impactful web experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('work')}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-slate-300 hover:border-cyan-600 hover:text-cyan-600 px-8 py-6 text-lg"
              >
                Get In Touch
              </Button>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6">
              <a
                href="https://twitter.com/___codehq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-cyan-600 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-cyan-600 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 hover:bg-cyan-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://customer-assets.emergentagent.com/job_353d694e-e37c-4c94-8be4-1e5fa8028169/artifacts/9mycuutf_4e5adcf477a69d0037ac4fdd6f6fa72c.jpeg"
                  alt="Victor Onyenam"
                  className="rounded-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;