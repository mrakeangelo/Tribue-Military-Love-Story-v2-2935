import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiHeart, FiAnchor } = FiIcons;

const navItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'timeline', label: 'Our Story', href: '#timeline' },
  { id: 'letters', label: 'Love Letters', href: '#letters' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'dreams', label: 'Dreams', href: '#dreams' },
  { id: 'messages', label: 'Messages', href: '#messages' },
];

const Navigation = ({ currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 bg-navy-800 bg-opacity-90 backdrop-blur-md border-b border-gold-800 border-opacity-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-800 to-rose-400 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiHeart} className="text-seafoam-50 text-lg" />
              </div>
              <span className="font-serif text-xl text-seafoam-50">Love Story</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-body text-sm transition-colors duration-300 ${
                    currentSection === item.id
                      ? 'text-gold-800 font-semibold'
                      : 'text-seafoam-100 hover:text-gold-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center text-seafoam-50"
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="text-xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed inset-0 z-30 bg-navy-800 bg-opacity-95 backdrop-blur-md md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-serif text-2xl transition-colors duration-300 ${
                currentSection === item.id
                  ? 'text-gold-800 font-bold'
                  : 'text-seafoam-100 hover:text-gold-400'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Floating Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSection === item.id
                  ? 'bg-gold-800 scale-125'
                  : 'bg-seafoam-50 bg-opacity-50 hover:bg-opacity-75'
              }`}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;