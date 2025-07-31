import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
  index: number;
}

export const SkillCard = ({ category, skills, index }: SkillCardProps) => {
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
        damping: 15,
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main card container */}
      <div className="relative h-full rounded-2xl bg-gradient-to-br from-sky-900/90 via-cyan-800/80 to-white/10 border border-cyan-400/20 group-hover:border-cyan-300/40 transition-all duration-500 shadow-xl group-hover:shadow-cyan-500/10 backdrop-blur-sm overflow-hidden">

        
        {/* Floating bubbles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-pink-500/10"
              initial={{ 
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2
              }}
              animate={{
                x: [null, Math.random() * 100],
                y: [null, Math.random() * 100],
                transition: {
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            />
          ))}
        </div>
        
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-pink-500/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Category Title */}
        <div className="relative p-6 pb-4">
          <div className="flex items-center">
            <motion.div 
              className="w-2 h-8 rounded-full bg-gradient-to-b from-pink-400 to-fuchsia-500 mr-3"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            />
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              {category}
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-pink-400 to-transparent"></span>

            </h3>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="px-6 pb-8">
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="relative group/skill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1 + i * 0.05,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <div className="relative p-4 rounded-xl bg-cyan-800/30 border border-cyan-600/60 group-hover/skill:border-cyan-300 transition-all duration-300 hover:bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center min-h-[100px]">

                  
                  {/* Skill Icon with enhanced glow */}
                  <div className="mb-3 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 blur-md scale-110"></div>
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10 object-contain group-hover/skill:scale-110 group-hover/skill:brightness-125 transition-transform duration-300 drop-shadow-lg"
                        style={{
                          filter: 'brightness(1.3) contrast(1.2) drop-shadow(0 0 4px rgba(236, 72, 153, 0.4))'
                        }}
                      />
                    </div>
                  </div>

                  {/* Skill Name with subtle animation */}
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-xs font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300 block leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500/5 to-fuchsia-500/5 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-pink-400/50 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-fuchsia-400/50 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom accent line with animation */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-60"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1, opacity: 0.6 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Enhanced corner accents */}
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-pink-500/30 group-hover:border-pink-400/60 transition-colors duration-500 rounded-tr-lg">
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-fuchsia-500/30 group-hover:border-fuchsia-400/60 transition-colors duration-500 rounded-bl-lg">
          <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 bg-fuchsia-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/60"
              initial={{ 
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: 1,
                height: 1,
                opacity: 0
              }}
              animate={{
                width: [1, 2, 1],
                height: [1, 2, 1],
                opacity: [0, 0.8, 0],
                transition: {
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }
              }}
            />
          ))} 
        </div>
      </div>
    </motion.div> 
  );
};
 