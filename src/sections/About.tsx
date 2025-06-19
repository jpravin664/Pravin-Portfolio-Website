import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Server, Cpu, Lock, Terminal, GraduationCap } from 'lucide-react';
//import profilePic from '../image/ProfilePhoto2.jpg';
 
export const About = () => {
  const educationItems = [
    {
      institution: "SRM UNIVERSITY RAMAPURAM",
      degree: "B.Tech Computer Science Engineering with specialization in Cyber Security",
      duration: "2022-2026",
    },
    {
      institution: "LALCHAND MILAPCHAND DADHA SENIOR SECONDARY SCHOOL",
      degree: "Class XII",
      duration: "2021-2022",
    }
  ];

  return (
    <section id="about" className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-text">
            About Me
          </h2>
         <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: false }} // This makes it reset when exiting/re-entering view
            transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
          
          <p className="max-w-2xl mx-auto text-text-secondary text-lg leading-relaxed">
            Developer & Security Enthusiast passionate about building secure, efficient systems
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Profile Photo */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-1">
              <div className="bg-slate-800 rounded-lg p-6 flex flex-col items-center">
                {/* Large Portrait Photo Container */}
                <div className="w-90 h-[26rem] sm:h-[38rem] rounded-lg overflow-hidden mb-6 border-2 border-app-border/30 shadow-md">
                  <img 
                    src="/image/ProfilePhoto.jpg"
                    alt="Profile" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-text">SRM University</h3>
                <p className="text-sm text-text-secondary mb-4">B.Tech Computer Science with Cyber Security</p>
                
                <div className="flex gap-4 mt-2">
                  <div className="text-center">
                    <div className="p-3 rounded-full bg-primary/10 inline-block mb-2 hover:bg-primary/20 transition-colors">
                      <Cpu className="text-primary" size={20} />
                    </div>
                    <p className="text-xs text-text-secondary">Developer</p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 rounded-full bg-accent/10 inline-block mb-2 hover:bg-accent/20 transition-colors">
                      <Lock className="text-accent" size={20} />
                    </div>
                    <p className="text-xs text-text-secondary">Security</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="bg-background-light rounded-xl p-6 border border-app-border/50">
                <h3 className="text-xl font-semibold mb-4 text-text">My Journey</h3>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    I’ve been curious about technology since I was a kid — taking apart computers and writing my first bits of code just for fun.  
  Over time, that curiosity grew into a passion for not just building software, but also learning how to protect it.
                  </p>
                  <p>
                  I'm currently pursuing my <span className="font-medium text-primary">B.Tech in Computer Science</span> with a focus on 
                  <span className="font-medium text-accent"> Cyber Security</span> at SRM University.  
                  Along the way, I’ve been building a solid foundation in frontend development, while exploring backend systems and diving into machine learning.
                </p>

                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-medium mb-4 text-text">Skills & Interests</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-indigo-900/60 p-4 rounded-lg border border-app-border/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Terminal className="text-primary" size={18} />
                      <span className="font-medium text-text">Frontend Development</span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      Building responsive interfaces with React, JavaScript, and modern CSS.
                    </p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-indigo-900/60 p-4 rounded-lg border border-app-border/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="text-accent" size={18} />
                      <span className="font-medium text-text">Security Fundamentals</span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      Learning vulnerability assessment, ethical hacking principles, and secure coding.
                    </p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-indigo-900/60 p-4 rounded-lg border border-app-border/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Server size={18} className="text-glow" />
                      <span className="font-medium text-text">Backend & ML</span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      Exploring Node.js, databases, and introductory machine learning concepts.
                    </p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-indigo-900/60 p-4 rounded-lg border border-app-border/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="text-primary" size={18} />
                      <span className="font-medium text-text">Programming</span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      Python, JavaScript, C/C++ with focus on algorithms and problem-solving.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-background-light rounded-xl p-6 border border-app-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/50 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-text">Education</h3>
                </div>

                <div className="relative">
                  <div className="absolute left-6 top-0 h-full w-0.5 bg-primary/20 -z-10"></div>
                  {educationItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`pl-10 pb-6 relative ${index !== educationItems.length - 1 ? 'border-l border-primary/20' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <h4 className="font-medium text-lg text-text">{item.institution}</h4>
                      <p className="text-text-secondary text-sm mt-1">{item.degree}</p>
                      <p className="text-xs text-glow font-mono mt-2">{item.duration}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};