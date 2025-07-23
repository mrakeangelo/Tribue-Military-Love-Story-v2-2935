import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiMail, FiAnchor, FiHome, FiStar, FiUsers } = FiIcons;

const timelineData = [
  {
    id: 1,
    title: "How We Met",
    date: "Spring 2019",
    description: "Two hearts found each other at a coffee shop near the base. What started as a casual conversation turned into hours of talking about dreams, fears, and everything in between.",
    icon: FiHeart,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "First Deployment",
    date: "Fall 2019",
    description: "The hardest goodbye. Six months apart, but our love only grew stronger. Every sunset reminded us that we were looking at the same sky.",
    icon: FiAnchor,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Love Letters",
    date: "2019-2020",
    description: "Handwritten letters became our lifeline. Each envelope held pieces of our souls, promises of tomorrow, and reminders of our unbreakable bond.",
    icon: FiMail,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Homecoming",
    date: "Spring 2020",
    description: "The moment that made all the waiting worth it. Running into each other's arms, knowing that distance had only made our love stronger.",
    icon: FiHome,
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "The Proposal",
    date: "Summer 2021",
    description: "Under the stars on a beach where we first said 'I love you,' the question was asked and answered with tears of joy. Forever became real.",
    icon: FiStar,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Our Wedding",
    date: "Fall 2022",
    description: "Surrounded by family, friends, and fellow service members, we pledged our hearts to each other. The beginning of our greatest adventure.",
    icon: FiUsers,
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const StoryTimeline = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-800 to-navy-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-seafoam-50 mb-6">
            How We Found Each Other
          </h2>
          <p className="font-body text-lg text-rose-300 max-w-2xl mx-auto">
            Every great love story has its chapters. These are ours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-800 to-rose-400 hidden md:block"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-seafoam-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-800 to-rose-400 rounded-full flex items-center justify-center">
                      <SafeIcon icon={item.icon} className="text-seafoam-50 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-navy-800 mb-1">{item.title}</h3>
                      <p className="font-handwritten text-lg text-rose-600">{item.date}</p>
                    </div>
                  </div>
                  <p className="font-body text-ink-700 leading-relaxed mb-4">{item.description}</p>
                  <div className="w-full h-48 rounded-xl overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div className="w-6 h-6 bg-gold-800 rounded-full border-4 border-seafoam-50 shadow-lg"></div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryTimeline;