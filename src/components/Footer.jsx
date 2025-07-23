import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiAnchor } = FiIcons;

const quotes = [
  "I fell in love while wearing cammies.",
  "She waited across time zones and time zones.",
  "He never missed a moment — even from the sea.",
  "Love knows no distance, no deployment, no goodbye.",
  "Together we are stronger than any storm.",
  "Home is wherever you are."
];

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-navy-800 border-t border-gold-800 border-opacity-20 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Floating Heart Icon */}
        <motion.div
          className="flex justify-center mb-8"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-800 to-rose-400 rounded-full flex items-center justify-center shadow-lg">
              <SafeIcon icon={FiMail} className="text-seafoam-50 text-2xl" />
            </div>
            <motion.div
              className="absolute -top-2 -right-2 w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <SafeIcon icon={FiHeart} className="text-seafoam-50 text-xs" />
            </motion.div>
          </div>
        </motion.div>

        {/* Quote Carousel */}
        <div className="text-center mb-12">
          <motion.blockquote
            key={currentQuote}
            className="font-handwritten text-2xl md:text-3xl text-rose-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            "{quotes[currentQuote]}"
          </motion.blockquote>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-12">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote ? 'bg-gold-800 scale-125' : 'bg-seafoam-50 bg-opacity-30'
              }`}
            />
          ))}
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-serif text-xl text-seafoam-50 mb-4">Our Story</h3>
            <p className="font-body text-seafoam-200 text-sm leading-relaxed">
              A tribute to military love - the strength, sacrifice, and unwavering devotion that defines our journey together.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl text-seafoam-50 mb-4">Connect</h3>
            <div className="flex justify-center space-x-4">
              <div className="w-10 h-10 bg-seafoam-50 bg-opacity-10 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiMail} className="text-seafoam-200" />
              </div>
              <div className="w-10 h-10 bg-seafoam-50 bg-opacity-10 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiHeart} className="text-rose-400" />
              </div>
              <div className="w-10 h-10 bg-seafoam-50 bg-opacity-10 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiAnchor} className="text-gold-400" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl text-seafoam-50 mb-4">Built With Love</h3>
            <p className="font-body text-seafoam-200 text-sm">
              Crafted with ❤️ for military families everywhere
            </p>
            <p className="font-body text-seafoam-300 text-xs mt-2">
              Powered by Mrake Agency
            </p>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-seafoam-50 border-opacity-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-seafoam-300 text-sm">
              © 2024 Military Love Story. All rights reserved.
            </p>
            <p className="font-body text-seafoam-300 text-sm mt-2 md:mt-0">
              "Distance means nothing when someone means everything."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;