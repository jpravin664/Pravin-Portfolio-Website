import React from 'react';
import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-2xl font-bold mb-2 flex items-center">
              <span className="text-primary dark:text-primary">Pravin</span>
              <span className="text-gray-800 dark:text-gray-300">.</span>
              <span className="text-gray-700 dark:text-gray-200">J</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 text-center md:text-left">
              Cybersecurity Specialist & Full Stack Developer
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a 
              href="https://github.com/jpravin664" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://www.linkedin.com/in/pravinj64/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:manopravin1@gmail.com" 
              className="group text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="tel:+919962394348" 
              className="group text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
        
        {/* Copyright and additional links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm order-2 md:order-1">
            &copy; {currentYear} Pravin J. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 order-1 md:order-2">
            <a href="/privacy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};