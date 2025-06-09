import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  points: string[];
  github?: string;
  live?: string;
  icon: React.ReactNode;
  index: number;
}

export const ProjectCard = ({ title, description, technologies, points, github, live, icon, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="group relative bg-gradient-to-br from-background to-background/50 rounded-2xl overflow-hidden border border-app-border hover:border-primary/20 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-background border border-app-border">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gradient">
            {title}
          </h3>
        </div>

        <p className="text-text-secondary mb-6">{description}</p>
        
        <div className="space-y-3 mb-6">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-accent mt-1.5">•</span>
              <span className="text-sm text-text-secondary">{point}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs px-3 py-1 rounded-full bg-background border border-app-border text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors group"
            >
              <Github size={16} />
              <span className="text-sm">Code</span>
            </a>
          )}
          {live && (
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors group"
            >
              <ExternalLink size={16} />
              <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};