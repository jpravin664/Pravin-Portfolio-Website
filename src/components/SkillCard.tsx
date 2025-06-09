import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

export const SkillCard = ({ category, skills, icon, index }: SkillCardProps) => {
  return (
    <motion.div 
      className="relative group h-full overflow-hidden"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -12, scale: 1.02 }}
    >
      {/* Dynamic background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 group-hover:bg-pos-100 opacity-0 group-hover:opacity-100 transition-all duration-1000 rounded-3xl blur-sm animate-gradient-x"></div>
      
      {/* Main card container */}
      <div className="glass-card relative h-full rounded-3xl backdrop-blur-xl bg-gradient-to-br from-background/80 via-background/60 to-background/40 border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Header section with icon */}
        <div className="relative p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className="relative"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              {/* Icon background glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
              
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 group-hover:border-primary/30 transition-all duration-500 backdrop-blur-sm">
                <div className="text-primary group-hover:text-accent transition-colors duration-500 transform group-hover:scale-110">
                  {icon}
                </div>
              </div>
            </motion.div>
            
            {/* Floating indicator dots */}
            <div className="flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-accent group-hover:animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-primary group-hover:animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
          
          {/* Category title */}
          <div className="relative">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent group-hover:from-accent group-hover:via-primary group-hover:to-accent transition-all duration-700">
              {category}
            </h3>
            
            {/* Animated underline */}
            <div className="relative h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="px-8 pb-8">
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill, i) => (
              <motion.div 
                key={i}
                className="relative group/skill"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.1 + i * 0.08,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{ x: 4, scale: 1.02 }}
              >
                {/* Skill item background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-all duration-300"></div>
                
                {/* Skill item border highlight */}
                <div className="absolute inset-0 border border-transparent group-hover/skill:border-primary/20 rounded-xl transition-all duration-300"></div>
                
                <div className="relative p-3 rounded-xl bg-background/30 backdrop-blur-sm border border-white/5 group-hover/skill:border-white/20 transition-all duration-300 hover:bg-background/50">
                  {/* Skill text */}
                  <div className="text-sm font-medium text-text-secondary group-hover/skill:text-primary transition-colors duration-300 flex items-center gap-2">
                    {/* Bullet point */}
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/skill:bg-primary group-hover/skill:animate-pulse transition-all duration-300"></div>
                    <span className="truncate">{skill}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Bottom accent gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
        
        {/* Corner decorative elements */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-500 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/20 group-hover:border-accent/40 transition-colors duration-500 rounded-bl-lg"></div>
      </div>
    </motion.div>
  );
};

