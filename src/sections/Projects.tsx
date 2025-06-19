import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { Shield, Car, Leaf, Code, Database, Lock, FileText, Globe, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
  title: "Real-Time Phishing Detection Browser Extension",
  description: "A robust browser extension for phishing detection using machine learning and real-time threat intelligence APIs, delivering fast and accurate classification with visual alerts.",
  icon: <Globe className="text-yellow-400" size={28} />,
  image: "/images/projects/phishing-extension.png",
  technologies: ["Random Forest", "Python", "Google Safe Browsing API", "PhishTank", "Kaggle Dataset"],
  points: [
    "Developed a cross-browser extension that detects phishing websites using a trained Random Forest model",
    "Integrated Google Safe Browsing and PhishTank APIs, with fallback detection via a 15k+ URL Kaggle dataset",
    "Achieved <1s latency and real-time alerts across Chrome, Edge, and Firefox"
  ],
  github: "https://github.com/jpravin664",
  live: "", // Add if deployed
  index: 0
},
    {
  title: "ShadowCrypt - Secure File Hider",
  description: "A powerful data protection tool combining AES-256 encryption and steganography to securely hide sensitive files inside images, ensuring both confidentiality and integrity.",
  icon: <Lock className="text-purple-500" size={28} />,
  image: "/images/projects/shadowcrypt.png",
  technologies: ["Python", "Flask", "AES-256", "Steganography", "HMAC"],
  points: [
    "Implements AES-256 encryption for strong data security",
    "Uses steganography to hide encrypted files within images",
    "Supports password-based encryption and HMAC verification for data integrity",
    "Features a stealth mode for decoy image embedding",
    "Offers a user-friendly UI for seamless file hiding and extraction"
  ],
  github: "https://github.com/jpravin664/ShadowCrypt", // update if different
  live: "", // add if you have a demo or video
  index: 1
},
    {
  title: "Resume Analyzer Web Application",
  description: "Web-based resume analyzer that uses NLP to parse and evaluate resumes, calculate ATS scores, and match them against job descriptions with real-time insights.",
  icon: <FileText className="text-green-500" size={28} />,
  image: "/images/projects/resume-analyzer.png",
  technologies: ["Python", "Flask", "NLP", "Resume Parsing", "ATS"],
  points: [
    "Built a Flask-based app enabling resume upload and analysis using NLP parsing",
    "Implemented ATS score and JD-matching logic for resume relevance evaluation",
    "Provided real-time feedback and multi-format file support"
  ],
  github: "https://github.com/jpravin664",
  live: "", // Add if deployed
  index: 2
},

{
  title: "Network Vulnerability Scanner",
  description: "Advanced security tool for real-time vulnerability assessment and port scanning with comprehensive NSE script integration for detecting vulnerabilities in various network services.",
  icon: <Shield className="text-blue-400" size={28} />,
  image: "/image/projects/network-scanner.jpg",
  technologies: ["Python", "Nmap", "Streamlit", "NSE Scripts", "Socket Programming"],
  points: [
    "Built a comprehensive Network Vulnerability Scanner using Streamlit and Nmap",
    "Integrated advanced NSE scripts for detecting vulnerabilities in services like FTP, SMB, and MySQL",
    "Developed an intuitive interface with real-time progress tracking and detailed report generation"
  ],
  github: "https://github.com/jpravin664/Network-Vulnerability-Scanner",
  live: "", // Update if hosted elsewhere
  index: 3
}
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-950/50 to-slate-900/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
           <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            viewport={{ once: false }} // This makes it reset when exiting/re-entering view
            transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
          
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Showcasing my expertise in <span className="text-primary font-semibold">cybersecurity</span>, 
            <span className="text-accent font-semibold"> web development</span>, and 
            <span className="text-slate-300 font-semibold"> innovative solutions</span> that make a real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              image={project.image}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://github.com/jpravin664"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-black font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} color="black" />
              View All Projects
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};