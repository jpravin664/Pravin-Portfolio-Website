import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code, Layers, Home, User, Award, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home', icon: <Home className="w-4 h-4" /> },
    { name: 'About', to: 'about', icon: <User className="w-4 h-4" /> },
    { name: 'Projects', to: 'projects', icon: <Code className="w-4 h-4" /> },
    { name: 'Skills', to: 'skills', icon: <Layers className="w-4 h-4" /> },
    { name: 'Certification', to: 'education', icon: <Award className="w-4 h-4" /> },
    { name: 'Contact', to: 'contact', icon: <Mail className="w-4 h-4" /> }
  ];  

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 backdrop-blur-md bg-background/80 border-b border-app-border/30' : 'py-4 bg-gray-900'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center cursor-pointer group"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className={`p-2 rounded-lg ${
                scrolled ? 'bg-primary/10' : 'bg-primary/20'
              } transition-all`}>
                <Code className="text-primary" size={20} />
              </div>
              <div className="font-bold text-2xl tracking-tight">
                <span className="text-primary">Pravin</span>
                <span className="text-accent">.</span>
                <span className="text-glow">J</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative px-4 py-2 rounded-lg text-text-secondary hover:text-primary transition-all cursor-pointer group"
                activeClass="text-primary"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-[.active]:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${
                scrolled ? 'bg-primary/10' : 'bg-primary/20'
              } transition-all`}
            >
              {isOpen ? <X className="text-primary\" size={24} /> : <Menu className="text-primary" size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="backdrop-blur-lg bg-background/80 border border-app-border/30 rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 gap-1 p-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all cursor-pointer ${
                      link.to === 'home' ? 'bg-primary/10' : 'hover:bg-app-border/10'
                    }`}
                    activeClass="bg-primary/10 text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="p-2 mb-2 rounded-full bg-primary/10 text-primary">
                      {link.icon}
                    </div>
                    <span className="text-sm">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};