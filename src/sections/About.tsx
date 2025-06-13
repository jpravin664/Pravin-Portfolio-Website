import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Server, Cpu, Lock, Terminal } from 'lucide-react';
import profilePic from '../image/ProfilePhoto2.jpg';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
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
              <div className="bg-background rounded-lg p-6 flex flex-col items-center">
      
                  {/* Square Profile Photo Container */}
      <div className="w-80 h-90 rounded-lg overflow-hidden mb-6 border-2 border-app-border/30">
        <img 
          src={profilePic}
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div> 

                
                <h3 className="text-xl font-semibold mb-2 text-text">SRM University</h3>
                <p className="text-sm text-text-secondary mb-4">B.Tech Computer Science with Cyber Security</p>
                
                <div className="flex gap-4 mt-2">
                  <div className="text-center">
                    <div className="p-3 rounded-full bg-primary/10 inline-block mb-2">
                      <Cpu className="text-primary" size={20} />
                    </div>
                    <p className="text-xs text-text-secondary">Developer</p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 rounded-full bg-accent/10 inline-block mb-2">
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
              <div className="bg-background-light/20 rounded-xl p-6 border border-app-border/50">
                <h3 className="text-xl font-semibold mb-4 text-text">My Journey</h3>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    My fascination with technology began early, taking apart computers and writing my first programs as a teenager. 
                    This curiosity evolved into a dual passion for both creating software and understanding how to protect it.
                  </p>
                  <p>
                    Currently pursuing my <span className="font-medium text-primary">B.Tech in Computer Science</span> with a focus on 
                    <span className="font-medium text-accent"> Cyber Security</span> at SRM University. While developing my cybersecurity skills, I maintain strong foundations in frontend development and am expanding into backend systems and machine learning.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-text">Skills & Interests</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-background-light/10 p-4 rounded-lg border border-app-border/30"
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
                    className="bg-background-light/10 p-4 rounded-lg border border-app-border/30"
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
                    className="bg-background-light/10 p-4 rounded-lg border border-app-border/30"
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
                    className="bg-background-light/10 p-4 rounded-lg border border-app-border/30"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="text-primary" size={18} />
                      <span className="font-medium text-text">Programming</span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      Python, JavaScript, Java, C/C++ with focus on algorithms and problem-solving.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
