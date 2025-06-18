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
  image?: string; // Added image prop to the interface
}

export const ProjectCard = ({ title, description, technologies, points, github, live, icon, image, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="group relative bg-slate-950 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8 }}
    >
      {/* Image/Icon Section */}
      <div className="relative h-48 bg-gradient-to-br from-slate-800/40 to-slate-900/60 overflow-hidden">
        {image ? (
          <div className="relative w-full h-full">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div className="absolute top-4 left-4 p-2 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-slate-700/50">
              {icon}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="p-6 rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
              <div className="text-4xl">
                {icon}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-400 mb-4 text-sm leading-relaxed line-clamp-4">
          {description}
        </p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-auto">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-[14px] px-2 py-1 rounded-md bg-slate-600/60 border border-slate-600/30 text-slate-300 hover:bg-slate-700/60 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Links - Only Code and Live buttons */}
        <div className="flex gap-3 pt-4 mt-4 border-t border-slate-800">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
             // Subtle dark with GitHub purple accent on hover
className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
           bg-purple-500/30  hover:bg-purple-900/30 
           border border-slate-700/50 hover:border-purple-500/30 
           text-slate-300 hover:text-white transition-all duration-200"
            >
              <Github size={16} />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
          {live && (
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-600/50 hover:bg-primary/20 border border-primary/20 text-primary hover:text-white transition-all duration-200"
            > 
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Live</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </motion.div>
  );
};