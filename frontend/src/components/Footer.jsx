import React from 'react';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              Victor Onyenam
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Full-Stack Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Recent Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://customer-assets.emergentagent.com/job_353d694e-e37c-4c94-8be4-1e5fa8028169/artifacts/o07r0crl_Victor%20CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/___codehq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-cyan-600 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-cyan-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-cyan-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-slate-400 mt-4 text-sm">
              <a
                href="mailto:onyenamvictor4real@gmail.com"
                className="hover:text-cyan-400 transition-colors"
              >
                onyenamvictor4real@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Victor Onyenam. All rights reserved.
            </p>
            <p className="flex items-center text-slate-400 text-sm">
              Built with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;