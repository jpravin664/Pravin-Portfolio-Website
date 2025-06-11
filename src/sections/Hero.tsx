import React from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Phone, Code, Shield, Zap } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingIcons = [
    { icon: Code, position: "top-20 left-20", delay: 0 },
    { icon: Shield, position: "top-32 right-32", delay: 1 },
    { icon: Zap, position: "bottom-40 left-16", delay: 2 },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.position} text-primary/10 hidden sm:block`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: item.delay
            }}
          >
            <item.icon size={32} className="sm:size-40" />
          </motion.div>
        ))}
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 sm:w-32 sm:h-32 border border-accent/20 rounded-full hidden sm:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/5 w-16 h-16 sm:w-24 sm:h-24 border-2 border-primary/10 hidden sm:block"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div 
          className="w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div className="space-y-6 md:space-y-8 order-2 lg:order-1" variants={itemVariants}>
              
              {/* Greeting Badge */}
              <motion.div 
                className="inline-flex items-center gap-2 glass-card px-3 py-2 sm:px-4 rounded-full border border-primary/30"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm text-text-secondary">Available for opportunities</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-3 md:space-y-4">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none"
                  variants={itemVariants}
                >
                  <span className="block text-text-primary">Hello,</span>
                  <span className="block">I'm <span className="text-gradient">Pravin</span></span>
                </motion.h1>
                
                {/* Animated Role */}
                <motion.div 
                  className="h-12 sm:h-14 md:h-16 flex items-center"
                  variants={itemVariants}
                >
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-mono text-accent">
                    <TypeAnimation
                      sequence={[
                        '> Cybersecurity_Expert.exe',
                        2000,
                        '> Full_Stack_Developer.py',
                        2000,
                        '> Problem_Solver.js',
                        2000,
                        '> Innovation_Architect.cpp',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl"
                variants={itemVariants}
              >
                Transforming digital landscapes through cutting-edge cybersecurity solutions 
                and innovative web development. Let's build something extraordinary together.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                variants={itemVariants}
              >
                <motion.a 
                  href="mailto:manopravin1@gmail.com" 
                  className="group glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all relative overflow-hidden text-center sm:text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-sunset-gradient group-hover:bg-primary/10 transition-colors"></div>
                  <div className="relative flex items-center justify-center sm:justify-start gap-3">
                    <Mail size={18} sm:size={20} color="black"/>
                    <span className="font-medium text-black">Let's Connect</span>
                  </div>
                </motion.a>
                
                <motion.a 
                  href="https://github.com/jpravin664" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group glass-card px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border border-accent/30 hover:border-accent/60 transition-all relative overflow-hidden text-center sm:text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-sunset-gradient group-hover:bg-accent/10 transition-colors"></div>
                  <div className="relative flex items-center justify-center sm:justify-start gap-3">
                    <Github size={18} sm:size={20} color="black"/>
                    <span className="font-medium text-black">View Work</span>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Element - Now visible on all screens */}
            <motion.div 
              className="flex justify-center items-center order-1 lg:order-2"
              variants={itemVariants}
            >
              <div className="relative">
                {/* Outer Ring - Responsive sizing */}
                <motion.div
                  className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 border-2 border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Middle Ring - Responsive sizing */}
                <motion.div
                  className="absolute inset-4 sm:inset-6 md:inset-8 border border-accent/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center Card - Responsive sizing */}
                <motion.div 
                  className="w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 glass-card rounded-2xl sm:rounded-3xl border border-white/10 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
                  
                  {/* Code Grid Background */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 grid-rows-6 sm:grid-cols-8 sm:grid-rows-8 h-full">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="border-r border-b border-primary/10"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <motion.div 
                      className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-3 sm:mb-4"
                      animate={{ 
                        textShadow: [
                          "0 0 10px rgba(0,255,255,0.5)",
                          "0 0 20px rgba(255,0,255,0.5)",
                          "0 0 10px rgba(0,255,255,0.5)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      PJ
                    </motion.div>
                    
                    <div className="space-y-1 sm:space-y-2 font-mono text-sm sm:text-sm text-text-secondary">
                      <div className="text-accent">{"{ secure: true }"}</div>
                      <div className="text-primary">{"[ innovative ]"}</div>
                      <div className="text-glow">{"< creative />"}</div>
                    </div>
                  </div>
                  
                  {/* Floating Code Snippets - Responsive positioning */}
                  <motion.div
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 font-mono text-s text-primary/60"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="hidden sm:inline">import security</span>
                    <span className="sm:hidden">import security </span>
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 font-mono text-s text-accent/60"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    deploy()
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

         {/* Social Links Bar */}
<motion.div 
  className="mt-8 sm:mt-8 sm:mb-16 flex justify-center"
  variants={itemVariants}
>
  <div className="relative group">
    {/* Animated Gradient Border */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 rounded-full opacity-70 group-hover:opacity-100 blur-sm group-hover:blur-none transition-all duration-500 animate-gradient-xy"></div>
    
    {/* Rotating Border Animation */}
    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 rounded-full opacity-30 animate-spin-slow"></div>
    
    {/* Main Container */}
    <div className="relative flex items-center gap-1 glass-card p-3 rounded-full border border-white/20 backdrop-blur-xl bg-black/20 shadow-2xl">
      {/* Floating particles effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute top-2 left-4 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 right-6 w-1 h-1 bg-purple-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-4 right-3 w-0.5 h-0.5 bg-cyan-300/50 rounded-full animate-bounce delay-500"></div>
      </div>
      
      {[
        { icon: Linkedin, href: "https://www.linkedin.com/in/pravinj64/", label: "LinkedIn", color: "hover:text-blue-400" },
        { icon: Github, href: "https://github.com/jpravin664", label: "GitHub", color: "hover:text-gray-300" },
        { icon: Mail, href: "mailto:manopravin1@gmail.com", label: "Email", color: "hover:text-red-400" },
        { icon: Phone, href: "tel:+919962394348", label: "Phone", color: "hover:text-green-400" }
      ].map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : undefined}
          rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`relative p-2 sm:p-3 rounded-full transition-all duration-300 group/icon ${social.color}`}
          aria-label={social.label}
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Icon glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover/icon:opacity-100 group-hover/icon:scale-150 transition-all duration-500"></div>
          
          <social.icon 
            size={24} 
            className="relative z-10 transition-all duration-300 drop-shadow-lg group-hover/icon:drop-shadow-[0_0_8px_currentColor]" 
          />
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-sm border border-white/10">
            {social.label}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
</motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Link 
          to="about"
          spy={true}
          smooth={true} 
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer group"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="group-hover:text-primary transition-colors"
          >
            <ChevronDown size={22} />
          </motion.div>
          <span className="text-text-secondary text-xs mt-2 group-hover:text-primary transition-colors">
            Explore More
          </span>
        </Link>
      </motion.div>
    </section>
  );
};