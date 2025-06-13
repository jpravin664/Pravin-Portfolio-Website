import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users } from 'lucide-react';

export const Education = () => {
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
    <section id="education" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Award className="text-accent" size={32} />
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-gradient">Certifications</span> & Activities
            </h2>
          </div>
          
              <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: false }} // This makes it reset when exiting/re-entering view
            transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
          
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional certifications and volunteer activities that complement my technical journey
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Certifications */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background/50 p-8 rounded-2xl border border-accent/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl bg-background border border-accent/10 hover:border-accent/30 transition-all"
                    whileHover={{ y: -2 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex gap-3">
                      <div className="text-accent">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">{cert.title}</h4>
                        <p className="text-sm text-text-secondary">{cert.issuer}</p>
                        <span className="text-xs text-glow font-mono mt-1 block">{cert.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Volunteering */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-background/50 p-8 rounded-2xl border border-primary/20 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Volunteering</h3>
              </div>

              <div className="space-y-4">
                <motion.div 
                  className="p-5 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all"
                  whileHover={{ scale: 1.01 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Event Host at "Brand Artistry"
                  </h4>
                  <p className="text-sm text-text-secondary">
                    Facilitated poster and logo design challenges at SRM Texus 2024, ensuring smooth event execution.
                  </p>
                </motion.div>

                <motion.div 
                  className="p-5 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all"
                  whileHover={{ scale: 1.01 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Organizer for "Hello Hackers V9.0"
                  </h4>
                  <p className="text-sm text-text-secondary">
                    As part of CHIPSET Club at SRM, helped organize an ethical hacking workshop featuring live demonstrations and cybersecurity awareness sessions.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};