import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { Code, Shield, Leaf } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Network Vulnerability Scanner",
      description: "Advanced security tool for real-time vulnerability assessment and port scanning",
      icon: <Shield className="text-primary" size={24} />,
      technologies: ["Python", "Nmap", "Streamlit", "NSE Scripts"],
      points: [
        "Built a comprehensive Network Vulnerability Scanner using Streamlit and Nmap",
        "Integrated advanced NSE scripts for detecting vulnerabilities in services like FTP, SMB, and MySQL",
        "Developed an intuitive interface with real-time progress tracking and detailed report generation"
      ],
      github: "https://github.com/jpravin664/network-scanner",
      index: 0
    },
    {
      title: "Car Rental Management System",
      description: "Full-stack platform for vintage and retro car rentals with secure payment integration",
      icon: <Code className="text-accent\" size={24} />,
      technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap", "jQuery"],
      points: [
        "Engineered a secure car rental platform with PHP and JavaScript",
        "Implemented comprehensive booking system with secure payment processing",
        "Developed admin dashboard for inventory and booking management"
      ],
      github: "https://github.com/jpravin664/car-rental",
      index: 1
    },
    {
      title: "Leafy Laughs - Gardening Platform",
      description: "Eco-friendly marketplace connecting farmers and consumers",
      icon: <Leaf className="text-glow" size={24} />,
      technologies: ["Python", "Flask", "EmailJS", "HTML/CSS", "JavaScript"],
      points: [
        "Created a sustainable marketplace connecting farmers with eco-conscious consumers",
        "Implemented real-time messaging and notification system",
        "Integrated educational blog platform for sharing farming knowledge"
      ],
      github: "https://github.com/jpravin664/leafy-laughs",
      live: "https://leafy-laughs.netlify.app",
      index: 2
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background-light/30 to-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Showcasing my expertise in cybersecurity, web development, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              points={project.points}
              github={project.github}
              live={project.live}
              icon={project.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/jpravin664"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-background font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            View More Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};