import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Create starfield effect
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = Math.random() * 3 + 'px';
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDuration = Math.random() * 2 + 1 + 's';
      star.style.animationDelay = Math.random() * 2 + 's';
      return star;
    };

    const starfield = document.createElement('div');
    starfield.className = 'starfield';
    for (let i = 0; i < 100; i++) {
      starfield.appendChild(createStar());
    }
    document.body.appendChild(starfield);

    return () => {
      document.body.removeChild(starfield);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <div className="fixed inset-0 bg-background -z-10">
              <div className="absolute top-[-300px] right-[-200px] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"></div>
              <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"></div>
              <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-glow/5 blur-[80px]"></div>
            </div>
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;