import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const RecentWork = () => {
  const project = {
    title: 'Emotion Spotter App',
    description: 'An intelligent application that detects and analyzes human emotions using advanced machine learning algorithms. Built with modern web technologies for real-time emotion recognition.',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&q=80',
    technologies: ['Python', 'React', 'Machine Learning', 'Computer Vision'],
    liveUrl: 'https://emotion-spotter-app.vercel.app',
    features: [
      'Real-time emotion detection',
      'Advanced ML algorithms',
      'User-friendly interface',
      'Cross-platform compatibility'
    ]
  };

  return (
    <section id="work" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Recent Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcasing my latest project that demonstrates my skills in full-stack development and machine learning
          </p>
        </div>

        {/* Featured Project */}
        <Card className="overflow-hidden border-2 hover:border-cyan-600 transition-all duration-300 hover:shadow-2xl group">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 h-full min-h-[300px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            {/* Project Details */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <Badge className="bg-cyan-100 text-cyan-700 border border-cyan-300 text-xs font-mono uppercase tracking-wider">
                    Featured Project
                  </Badge>
                </div>
                <h3
                  className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="text-cyan-600 mr-2 flex-shrink-0 mt-1" size={16} />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-slate-300 text-slate-700 font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white group/btn">
                    View Live Site
                    <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* More Projects Coming Soon */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 italic">More exciting projects coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;