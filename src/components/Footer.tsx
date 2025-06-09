import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-8 mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-2xl font-bold mb-2">
              <span className="text-primary">Pravin</span>
              <span className="text-accent">.</span>
              <span className="text-glow">J</span>
            </div>
            <p className="text-text-secondary text-sm mb-4">Cybersecurity Enthusiast & Web Developer</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            <a 
              href="https://github.com/jpravin664" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-hover text-text-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/pravinj64/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glow-hover text-text-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:manopravin1@gmail.com" 
              className="glow-hover text-text-secondary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919962394348" 
              className="glow-hover text-text-secondary hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 text-text-tertiary text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Pravin J. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};