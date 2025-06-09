import React from 'react';
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-background/95 flex flex-col justify-center items-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative w-32 h-32 mb-8">
        {/* Outer ring with gradient border */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent"
          style={{
            background: 'linear-gradient(#0f172a, #0f172a) padding-box, linear-gradient(to right, #3b82f6, #8b5cf6) border-box'
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear"
          }}
        />
        
        {/* Middle ring with pulse effect */}
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-accent opacity-70"
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
        
        {/* Inner spinning element */}
        <motion.div
          className="absolute inset-8 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent, #ec4899, transparent)'
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }}
        />
        
        {/* Center dot */}
        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-primary to-accent" />
      </div>

      {/* Enhanced Name Animation */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          className="text-3xl font-bold"
          style={{
            background: 'linear-gradient(90deg, #FFF8F5, #FFEFE7, #FFDACC)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {["P", "r", "a", "v", "i", "n", " ", "J"].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ 
                y: -20,
                opacity: 0,
                textShadow: '0 0 8px rgba(59, 130, 246, 0)'
              }}
              animate={{ 
                y: 0,
                opacity: 1,
                textShadow: [
                  '0 0 8px rgba(59, 130, 246, 0)',
                  '0 0 8px rgba(59, 130, 246, 0.5)',
                  '0 0 8px rgba(59, 130, 246, 0)'
                ]
              }}
              transition={{
                y: { 
                  type: 'spring',
                  stiffness: 100,
                  damping: 12,
                  delay: 0.5 + index * 0.1
                },
                opacity: { 
                  duration: 0.3,
                  delay: 0.5 + index * 0.1
                },
                textShadow: {
                  duration: 2,
                  delay: 0.5 + index * 0.1,
                  repeat: Infinity,
                  repeatDelay: 1
                }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Loading text */}
      <motion.div className="flex justify-center gap-1 text-primary text-[20px] mb-8">
        {["L", "o", "a", "d", "i", "n", "g"].map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{ 
              y: [0, -5, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: index * 0.1,
              ease: "easeInOut"
            }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            repeat: Infinity,
            duration: 1.5,
            delay: 0.7
          }}
        >
          ...
        </motion.span>
      </motion.div>

      {/* Progress indicator */}
      <motion.div 
        className="w-48 h-1 bg-background-light rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
    </motion.div>
  );
};