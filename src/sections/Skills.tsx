import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from '../components/SkillCard';
import { Code, Terminal, Database, Laptop, Server, Brain } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "C", "C++", "JavaScript"],
      icon: <Code size={24} />,
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "Tailwind", "React.js", "Typescript", "Flask", "Streamlit"],
      icon: <Laptop size={24} />,
    },
    {
      category: "Tools & IDEs",
      skills: ["VS Code", "Git", "GitHub", "Nmap", "Wireshark", "Nessus"],
      icon: <Terminal size={24} />,
    },
    {
      category: "Operating Systems",
      skills: ["Kali Linux", "Ubuntu", "Windows"],
      icon: <Server size={24} />,
    },
    {
      category: "Databases",
      skills: ["MySQL", "Firebase", "phpMyAdmin"],
      icon: <Database size={24} />,
    },
    {
      category: "Soft Skills",
      skills: ["Critical Thinking", "Problem Solving", "Adaptability", "Collaboration"],
      icon: <Brain size={24} />,
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-background border border-primary/20 mb-6 text-sm font-mono"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            My Toolkit
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          
         <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            viewport={{ once: false }} // This makes it reset when exiting/re-entering view
            transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
          
          <motion.p 
            className="text-text-secondary max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A curated collection of technologies and methodologies I've mastered through hands-on experience and continuous learning.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              category={category.category}
              skills={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};