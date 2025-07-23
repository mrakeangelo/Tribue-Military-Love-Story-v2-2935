import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiHeart, FiAnchor } = FiIcons;

const HeroSection = () => {
  const scrollToStory = () => {
    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.6), rgba(10, 25, 47, 0.8)), url('https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80')`
        }}
      />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-gold-800 opacity-30"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <SafeIcon icon={FiAnchor} className="text-4xl" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-16 text-rose-300 opacity-40"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <SafeIcon icon={FiHeart} className="text-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-seafoam-50 mb-6 leading-tight">
            Military Love Story
          </h1>
          
          <motion.p
            className="font-handwritten text-2xl md:text-3xl text-rose-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            "From first letters to forever after"
          </motion.p>
          
          <motion.p
            className="font-body text-lg md:text-xl text-seafoam-100 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            A tribute to love that transcends oceans, time zones, and deployments. 
            This is our story of devotion, sacrifice, and the unbreakable bond between two hearts.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <button
              onClick={scrollToStory}
              className="group bg-gold-800 hover:bg-gold-700 text-navy-800 font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Read Their Journey
              <SafeIcon icon={FiPlay} className="text-lg group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-transparent border-2 border-seafoam-50 text-seafoam-50 hover:bg-seafoam-50 hover:text-navy-800 font-semibold py-4 px-8 rounded-full transition-all duration-300">
              View Photo Gallery
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-seafoam-50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-seafoam-50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;