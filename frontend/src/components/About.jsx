import React from 'react';
import { Code2, Database, Server, GitBranch, Sparkles, Terminal } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const About = () => {
  const techStack = [
    { name: 'Python', icon: Code2, color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { name: 'JavaScript', icon: Sparkles, color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { name: 'React', icon: Terminal, color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
    { name: 'Node.js', icon: Server, color: 'bg-green-100 text-green-700 border-green-200' },
    { name: 'MySQL', icon: Database, color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { name: 'Git', icon: GitBranch, color: 'bg-red-100 text-red-700 border-red-200' },
    { name: 'Vibe Coder', icon: Code2, color: 'bg-purple-100 text-purple-700 border-purple-200' },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern web applications.
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a strong foundation in both frontend and backend technologies,
              I create seamless digital experiences that users love. From responsive user interfaces
              to robust server-side applications, I bring ideas to life with clean, efficient code.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects,
              and staying up-to-date with the latest industry trends.
            </p>
            <div className="pt-4">
              <a
                href="https://customer-assets.emergentagent.com/job_353d694e-e37c-4c94-8be4-1e5fa8028169/artifacts/o07r0crl_Victor%20CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold group"
              >
                <span className="border-b-2 border-cyan-600 group-hover:border-cyan-700">View Full Resume</span>
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <h3
              className="text-2xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-2 hover:border-cyan-600 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className={`p-3 rounded-lg ${tech.color} border-2 group-hover:scale-110 transition-transform`}>
                        <Icon size={24} />
                      </div>
                      <span
                        className="font-semibold text-slate-700 group-hover:text-cyan-600 transition-colors"
                        style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                      >
                        {tech.name}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;