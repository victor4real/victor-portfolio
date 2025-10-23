import React from 'react';
import { Mail, Twitter, Send } from 'lucide-react';
import { Card } from './ui/card';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'onyenamvictor4real@gmail.com',
      href: 'mailto:onyenamvictor4real@gmail.com',
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50 hover:bg-red-100'
    },
    {
      icon: Twitter,
      title: 'X / Twitter',
      value: '@___codehq',
      href: 'https://twitter.com/___codehq',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50 hover:bg-cyan-100'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className={`p-8 border-2 hover:border-cyan-600 transition-all duration-300 hover:shadow-xl group cursor-pointer ${method.bgColor}`}>
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${method.color} text-white group-hover:scale-110 transition-transform`}>
                        <Icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors"
                          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                        >
                          {method.title}
                        </h3>
                        <p
                          className="text-slate-600 font-mono text-sm break-all"
                          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
                        >
                          {method.value}
                        </p>
                        <div className="mt-3 flex items-center text-cyan-600 font-semibold group-hover:translate-x-1 transition-transform">
                          <span className="text-sm">Connect</span>
                          <Send size={14} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Additional CTA */}
          <div className="mt-12 text-center p-8 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl border-2 border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-slate-600 mb-6">
              Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
            </p>
            <a
              href="mailto:onyenamvictor4real@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg group"
            >
              Send Me an Email
              <Mail className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;