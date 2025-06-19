import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Code, Trophy, Target } from 'lucide-react';

export const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "manopravin1@gmail.com",
      href: "mailto:manopravin1@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 9962394348",
      href: "tel:+919962394348",
      color: "accent"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/pravinj64",
      href: "https://www.linkedin.com/in/pravinj64/",
      color: "primary"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "github.com/jpravin664",
      href: "https://github.com/jpravin664",
      color: "accent"
    }
  ];

  const codingProfiles = [
    {
      icon: <Trophy size={20} />,
      label: "CodeChef",
      value: "codechef.com/users/jpravin864",
      href: "https://www.codechef.com/users/jpravin864",
      color: "accent"
    },
     {
      icon: <Target size={20} />,
      label: "GeeksforGeeks",
      value: "geeksforgeeks.org/user/jpravin64/",
      href: "https://www.geeksforgeeks.org/user/jpravin64/",
      color: "primary"
    },
     {
      icon: <Code size={20} />,
      label: "LeetCode",
      value: "leetcode.com/u/manopravin1/",
      href: "https://leetcode.com/u/manopravin1/",
      color: "primary"
    }
  ];

  return (
  <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
  {/* Floating gradient elements - reduced size/blur on mobile */}
  <div className="absolute top-0 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/5 rounded-full blur-[50px] md:blur-[100px]"></div>
  <div className="absolute bottom-10 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-accent/5 rounded-full blur-[50px] md:blur-[100px]"></div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-16"
    >
      <div className="inline-flex flex-col items-center">
        <span className="text-xs sm:text-sm font-medium text-primary/80 mb-2 tracking-wider">
          CONNECT WITH ME
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
        </h2>
        
        <motion.div 
          className="w-24 md:w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full mb-6 md:mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </div>
      <motion.p 
        className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto mt-4 md:mt-6 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let's connect and explore opportunities together. Feel free to reach out through any of these platforms.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-br from-background to-background/90 border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
              <Mail className="text-primary" size={18} md:size={20} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text">Contact Information</h3>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            {contactLinks.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 group-hover:bg-white/5 group-hover:border-primary/30 border border-white/5">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`p-2 md:p-3 rounded-lg bg-${contact.color}/10 border border-${contact.color}/20 group-hover:bg-${contact.color}/20 transition-colors`}>
                      {React.cloneElement(contact.icon, { size: 16 })}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-medium text-sm md:text-base text-text group-hover:text-primary transition-colors truncate">
                        {contact.label}
                      </h4>
                      <p className="text-xs md:text-sm text-text-secondary group-hover:text-text transition-colors truncate">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Column */}
      <div className="space-y-8 md:space-y-12">
        {/* Coding Profiles */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-background to-background/90 border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                <Code className="text-accent" size={18} md:size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text">Coding Profiles</h3>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 group-hover:bg-white/5 group-hover:border-accent/30 border border-white/5">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`p-2 md:p-3 rounded-lg bg-${profile.color}/10 border border-${profile.color}/20 group-hover:bg-${profile.color}/20 transition-colors`}>
                        {React.cloneElement(profile.icon, { size: 16 })}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="font-medium text-sm md:text-base text-text group-hover:text-accent transition-colors truncate">
                          {profile.label}
                        </h4>
                        <p className="text-xs md:text-sm text-text-secondary group-hover:text-text transition-colors truncate">
                          {profile.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 p-6 md:p-8 shadow-lg">
            <div className="absolute -top-8 -right-8 w-24 h-24 md:w-32 md:h-32 bg-primary/5 rounded-full blur-xl md:blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 bg-accent/5 rounded-full blur-xl md:blur-2xl"></div>
            
            <div className="relative text-center">
              <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-text">Let's Collaborate</h4>
              <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6 leading-relaxed">
                I'm always excited to work on innovative projects and connect with fellow developers. 
                Reach out and let's create something amazing together!
              </p>
              <a 
                href="mailto:manopravin1@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full bg-gradient-to-r from-primary to-accent text-background font-medium hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Mail size={16} md:size={18} />
                <span>Send me a message</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>
  );
};