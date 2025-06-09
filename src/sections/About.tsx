import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Server, Cpu, Lock, Terminal } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-background-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-4xl font-medium rounded-full bg-primary/10 text-primary mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
            Building Secure Digital Experiences
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary text-lg">
            Developer & Security Enthusiast with a passion for creating robust systems
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column - Image & Quick Facts */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-background rounded-xl p-1 border border-app-border h-full">
                <div className="bg-gradient-to-br from-background to-background-light/30 rounded-lg p-6 h-full">
                  <div className="aspect-square w-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-5xl">👨‍💻</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Cpu className="text-primary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text">Technical Stack</h4>
                        <p className="text-sm text-text-secondary">
                          Python, JavaScript, React, Node.js, SQL
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Lock className="text-accent" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text">Security Focus</h4>
                        <p className="text-sm text-text-secondary">
                          Network Security, Ethical Hacking, Cryptography
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Detailed Content */}
          <motion.div 
            className="lg:w-2/3 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-background to-background-light/30 border border-app-border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                My Journey
              </h3>
              <div className="space-y-6 text-text-secondary">
                <p className="leading-relaxed">
                  My fascination with technology began early, taking apart computers and writing my first programs as a teenager. 
                  This curiosity evolved into a dual passion for both creating software and understanding how to protect it.
                </p>
                <p className="leading-relaxed">
                  Currently pursuing my <span className="font-medium text-primary">B.Tech in Computer Science</span> with a specialization in 
                  <span className="font-medium text-accent"> Cyber Security</span> at SRM University, I'm building a strong foundation 
                  in secure systems design while staying active in the security community through CTF competitions and workshops.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background border border-app-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Terminal className="text-primary" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-text">Development</h4>
                </div>
                <p className="text-text-secondary text-sm">
                  Building full-stack applications with modern frameworks while implementing security best practices throughout the development lifecycle.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background border border-app-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Shield className="text-accent" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-text">Security</h4>
                </div>
                <p className="text-text-secondary text-sm">
                  Vulnerability assessment, penetration testing, and implementing robust security measures using industry-standard tools and methodologies.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background border border-app-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-glow/20 text-glow">
                    <Server size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-text">Systems</h4>
                </div>
                <p className="text-text-secondary text-sm">
                  Designing and maintaining secure infrastructure with experience in cloud platforms, server management, and network security configurations.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-background border border-app-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Code className="text-primary" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-text">Problem Solving</h4>
                </div>
                <p className="text-text-secondary text-sm">
                  Combining technical skills with analytical thinking to solve complex challenges in both development and security contexts.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};