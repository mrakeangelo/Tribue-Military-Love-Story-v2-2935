import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import StoryTimeline from '../components/StoryTimeline';
import LoveLettersVault from '../components/LoveLettersVault';
import PhotoGallery from '../components/PhotoGallery';
import SharedDreams from '../components/SharedDreams';
import MessageWall from '../components/MessageWall';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import BackgroundAudio from '../components/BackgroundAudio';

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'timeline', 'letters', 'gallery', 'dreams', 'messages'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation currentSection={currentSection} />
      <BackgroundAudio enabled={audioEnabled} onToggle={setAudioEnabled} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="timeline">
          <StoryTimeline />
        </section>
        
        <section id="letters">
          <LoveLettersVault />
        </section>
        
        <section id="gallery">
          <PhotoGallery />
        </section>
        
        <section id="dreams">
          <SharedDreams />
        </section>
        
        <section id="messages">
          <MessageWall />
        </section>
        
        <Footer />
      </motion.div>
    </div>
  );
};

export default HomePage;