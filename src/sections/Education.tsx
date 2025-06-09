import React from 'react';
import { motion } from 'framer-motion';
import { EducationCard } from '../components/EducationCard';
import { BookOpen } from 'lucide-react';

export const Education = () => {
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

  const certifications = [
    {
      title: "Cyber Security and Privacy",
      issuer: "NpTell",
      date: "2023"
    },
    {
      title: "Ethical Hacking essentials",
      issuer: "EC Council",
      date: "2023"
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google Coursera",
      date: "2023"
    },
    {
      title: "Python Fundamentals",
      issuer: "Infosys Springboard",
      date: "2022"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & <span className="text-gradient">Certifications</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <h3 className="text-2xl font-semibold text-primary">Education</h3>
              <div className="h-0.5 flex-1 bg-primary/30"></div>
            </motion.div>

            <div className="relative border-l border-primary/30 pl-10 space-y-10">
              {educationItems.map((item, index) => (
                <EducationCard 
                  key={index}
                  institution={item.institution}
                  degree={item.degree}
                  duration={item.duration}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <h3 className="text-2xl font-semibold text-accent">Certifications</h3>
              <div className="h-0.5 flex-1 bg-accent/30"></div>
            </motion.div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="mt-1 text-accent">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-text">{cert.title}</h4>
                        <p className="text-text-secondary text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-sm text-glow font-mono">{cert.date}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <h3 className="text-xl font-semibold text-glow mb-4">Volunteering</h3>
              <div className="space-y-4">
                <div className="glass-card p-6">
                  <h4 className="text-lg font-medium mb-2 text-text">Event Host at "Brand Artistry"</h4>
                  <p className="text-text-secondary">
                    Facilitated poster and logo design challenges at SRM Texus 2024, ensuring smooth event execution.
                  </p>
                </div>
                <div className="glass-card p-6">
                  <h4 className="text-lg font-medium mb-2 text-text">Organizer for "Hello Hackers V9.0"</h4>
                  <p className="text-text-secondary">
                    As part of CHIPSET Club at SRM, helped organize an ethical hacking workshop featuring live demonstrations and cybersecurity awareness sessions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};