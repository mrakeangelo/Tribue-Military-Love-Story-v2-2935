import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiHeart, FiMapPin, FiStar, FiUsers, FiGlobe } = FiIcons;

const dreams = [
  {
    id: 1,
    title: "Our First Home",
    description: "A cozy house with a garden where we can plant roots and watch them grow, just like our love.",
    icon: FiHome,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Growing Our Family",
    description: "Little feet running through our home, bedtime stories, and teaching them about courage and love.",
    icon: FiHeart,
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Dreaming"
  },
  {
    id: 3,
    title: "Traveling the World",
    description: "From European cafes to tropical beaches, exploring the world hand in hand, creating memories in every corner.",
    icon: FiGlobe,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Planning"
  },
  {
    id: 4,
    title: "Golden Years Together",
    description: "Growing old together, sharing stories on the porch, and watching our grandchildren play in the yard.",
    icon: FiStar,
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    status: "Forever Goal"
  }
];

const SharedDreams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-800 to-rose-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-seafoam-50 mb-6">
            Our Shared Dreams
          </h2>
          <p className="font-body text-lg text-rose-200 max-w-2xl mx-auto mb-8">
            The future we're building together, one dream at a time.
          </p>
          <motion.div
            className="bg-seafoam-50 rounded-2xl p-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="font-handwritten text-2xl md:text-3xl text-navy-800 text-center leading-relaxed">
              "Through distance and duty — we still chose each other.
              <br />
              Now we choose our forever."
            </blockquote>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dreams.map((dream, index) => (
            <motion.div
              key={dream.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-seafoam-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dream.image}
                    alt={dream.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      dream.status === 'In Progress' ? 'bg-gold-800 text-navy-800' :
                      dream.status === 'Planning' ? 'bg-rose-400 text-seafoam-50' :
                      dream.status === 'Dreaming' ? 'bg-navy-800 text-seafoam-50' :
                      'bg-green-500 text-seafoam-50'
                    }`}>
                      {dream.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-800 to-rose-400 rounded-full flex items-center justify-center">
                      <SafeIcon icon={dream.icon} className="text-seafoam-50 text-xl" />
                    </div>
                    <h3 className="font-serif text-2xl text-navy-800">{dream.title}</h3>
                  </div>
                  
                  <p className="font-body text-ink-700 leading-relaxed">
                    {dream.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gold-800 to-rose-400 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl text-seafoam-50 mb-4">
              Our Journey Continues
            </h3>
            <p className="font-body text-seafoam-100 mb-6">
              Every day brings us closer to these dreams. With love as our compass and commitment as our strength, 
              there's nothing we can't achieve together.
            </p>
            <div className="flex justify-center">
              <SafeIcon icon={FiHeart} className="text-4xl text-seafoam-50 animate-pulse" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SharedDreams;