import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCamera, FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const photos = [
  {
    id: 1,
    category: "Military Balls",
    title: "Navy Ball 2020",
    description: "Our first formal event together",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "October 2020"
  },
  {
    id: 2,
    category: "Homecomings",
    title: "First Homecoming",
    description: "The moment that made everything worth it",
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 2020"
  },
  {
    id: 3,
    category: "Wedding",
    title: "Our Wedding Day",
    description: "The beginning of forever",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "September 2022"
  },
  {
    id: 4,
    category: "Day-to-Day",
    title: "Morning Coffee",
    description: "Simple moments that mean everything",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Daily"
  },
  {
    id: 5,
    category: "Homecomings",
    title: "Second Deployment Return",
    description: "Every homecoming feels like the first",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "July 2021"
  },
  {
    id: 6,
    category: "Wedding",
    title: "First Dance",
    description: "Dancing to 'our song'",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "September 2022"
  },
  {
    id: 7,
    category: "Day-to-Day",
    title: "Beach Walk",
    description: "Finding peace in simple moments",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Summer 2023"
  },
  {
    id: 8,
    category: "Military Balls",
    title: "Promotion Ceremony",
    description: "Celebrating achievements together",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 2023"
  }
];

const categories = ["All", "Military Balls", "Homecomings", "Wedding", "Day-to-Day"];

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
    setCurrentIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const navigatePhoto = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredPhotos.length
      : (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    
    setCurrentIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-ink-900 to-navy-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-seafoam-50 mb-6">
            Our Moments Together
          </h2>
          <p className="font-body text-lg text-rose-300 max-w-2xl mx-auto">
            A collection of memories that tell the story of our love, from formal events to quiet everyday moments.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-body transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gold-800 text-navy-800 shadow-lg'
                  : 'bg-seafoam-50 text-navy-800 hover:bg-gold-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(photo)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-lg text-seafoam-50 mb-1">{photo.title}</h3>
                    <p className="font-body text-sm text-rose-300 mb-2">{photo.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gold-400">
                      <SafeIcon icon={FiCamera} />
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-seafoam-50 text-navy-800 px-3 py-1 rounded-full text-xs font-semibold">
                  {photo.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-[90vh] w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-2xl"
                />
                
                {/* Photo Info */}
                <div className="bg-seafoam-50 rounded-2xl p-6 mt-4">
                  <h3 className="font-serif text-2xl text-navy-800 mb-2">{selectedPhoto.title}</h3>
                  <p className="font-body text-ink-700 mb-4">{selectedPhoto.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ink-500 bg-ink-100 px-3 py-1 rounded-full">
                      {selectedPhoto.category}
                    </span>
                    <span className="text-sm text-gold-800 font-semibold">
                      {selectedPhoto.date}
                    </span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigatePhoto('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-seafoam-50 hover:bg-gold-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <SafeIcon icon={FiChevronLeft} className="text-navy-800 text-xl" />
                </button>
                
                <button
                  onClick={() => navigatePhoto('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-seafoam-50 hover:bg-gold-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <SafeIcon icon={FiChevronRight} className="text-navy-800 text-xl" />
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-seafoam-50 hover:bg-gold-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <SafeIcon icon={FiX} className="text-navy-800" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotoGallery;