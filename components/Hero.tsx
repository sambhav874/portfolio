'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Galaxy from './Galaxy';         // The custom galaxy background component
import TextPressure from './TextPressure'; // The new text pressure component

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-20 relative overflow-hidden"
    >
      {/* 1. Galaxy Background Component */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
        />
      </div>

      {/* 2. Content with Framer Motion Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-4"
      >
        {/* 3. TextPressure for Interactive Heading */}
        <TextPressure
    text="Sambhav Jain"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />

        

        <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
          Computer Science undergraduate crafting AI-driven systems and full-stack applications. Currently building the future at Ninth Quadrant.
        </p>

        {/* 5. Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center space-x-6 mt-8"
        >
          <a href="https://github.com/sambhav874" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors duration-300">
            <FaGithub size={28} aria-label="GitHub Profile" />
          </a>
          <a href="https://linkedin.com/in/sambhavjain19" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors duration-300">
            <FaLinkedin size={28} aria-label="LinkedIn Profile" />
          </a>
          <a href="mailto:sambhavjain874@gmail.com" className="text-slate-300 hover:text-primary transition-colors duration-300">
            <FaEnvelope size={28} aria-label="Email Me" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* 6. Scroll Down Indicator */}
      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-10 flex flex-col items-center text-slate-400 hover:text-primary transition-colors duration-300"
      >
         <span className="text-sm font-light mb-1">Explore my work</span>
         <FaArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;