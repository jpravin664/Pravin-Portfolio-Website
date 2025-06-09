import React from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  index: number;
}

export const EducationCard = ({ institution, degree, duration, index }: EducationCardProps) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 w-4 h-4 rounded-full bg-primary"></div>
      
      {/* Card */}
      <div className="ml-10 glass-card p-6 relative">
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-primary"></div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-primary">{institution}</h3>
          <span className="text-accent font-mono text-sm px-2 py-0.5 glass-card">{duration}</span>
        </div>
        <p className="text-text-secondary">{degree}</p>
      </div>
    </motion.div>
  );
};