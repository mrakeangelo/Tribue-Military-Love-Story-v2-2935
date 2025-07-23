import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle, FiHeart, FiStar, FiSend, FiUser } = FiIcons;

const initialMessages = [
  {
    id: 1,
    name: "Captain Rodriguez",
    message: "Watching you two support each other through deployments has been truly inspiring. Your love is a beacon of hope for all of us.",
    date: "2 days ago",
    reactions: { hearts: 12, stars: 8 }
  },
  {
    id: 2,
    name: "Sarah's Mom",
    message: "From the moment Sarah told us about Michael, we knew he was special. Seeing your love story unfold has been such a joy. Wishing you both a lifetime of happiness!",
    date: "1 week ago",
    reactions: { hearts: 24, stars: 15 }
  },
  {
    id: 3,
    name: "Petty Officer Johnson",
    message: "Shipmate, you found yourself a keeper! Sarah's strength during those long deployments showed us all what true love looks like. Fair winds and following seas to you both!",
    date: "2 weeks ago",
    reactions: { hearts: 18, stars: 12 }
  },
  {
    id: 4,
    name: "Emma & Jake",
    message: "Your wedding was absolutely magical! Thank you for showing us that love really can conquer all. Here's to many more years of adventures together! 💕",
    date: "3 weeks ago",
    reactions: { hearts: 31, stars: 20 }
  }
];

const MessageWall = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.name.trim() || !newMessage.message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const message = {
      id: messages.length + 1,
      name: newMessage.name,
      message: newMessage.message,
      date: "Just now",
      reactions: { hearts: 0, stars: 0 }
    };
    
    setMessages([message, ...messages]);
    setNewMessage({ name: '', message: '' });
    setIsSubmitting(false);
  };

  const addReaction = (messageId, type) => {
    setMessages(messages.map(msg => 
      msg.id === messageId 
        ? { ...msg, reactions: { ...msg.reactions, [type]: msg.reactions[type] + 1 } }
        : msg
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-900 to-navy-800 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-seafoam-50 mb-6">
            Message Wall
          </h2>
          <p className="font-body text-lg text-rose-200 max-w-2xl mx-auto">
            Share your blessings, memories, and well-wishes for our journey together.
          </p>
        </motion.div>

        {/* Message Form */}
        <motion.div
          className="bg-seafoam-50 rounded-2xl p-8 mb-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-2xl text-navy-800 mb-6 flex items-center gap-3">
            <SafeIcon icon={FiMessageCircle} className="text-gold-800" />
            Write Us a Blessing
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-body text-sm font-medium text-ink-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={newMessage.name}
                onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-gold-800 focus:border-transparent font-body"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium text-ink-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={newMessage.message}
                onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                className="w-full px-4 py-3 border border-ink-300 rounded-lg focus:ring-2 focus:ring-gold-800 focus:border-transparent font-body resize-none"
                placeholder="Share your thoughts, memories, or well-wishes..."
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-gold-800 to-rose-400 text-seafoam-50 font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <SafeIcon icon={FiSend} className="text-lg" />
            </button>
          </form>
        </motion.div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              className="bg-seafoam-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-800 to-rose-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiUser} className="text-seafoam-50 text-lg" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-serif text-lg text-navy-800 font-semibold">
                      {message.name}
                    </h4>
                    <span className="text-sm text-ink-500">{message.date}</span>
                  </div>
                  
                  <p className="font-body text-ink-700 leading-relaxed mb-4">
                    {message.message}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => addReaction(message.id, 'hearts')}
                      className="flex items-center gap-2 text-rose-500 hover:text-rose-600 transition-colors"
                    >
                      <SafeIcon icon={FiHeart} className="text-lg" />
                      <span className="text-sm font-medium">{message.reactions.hearts}</span>
                    </button>
                    
                    <button
                      onClick={() => addReaction(message.id, 'stars')}
                      className="flex items-center gap-2 text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      <SafeIcon icon={FiStar} className="text-lg" />
                      <span className="text-sm font-medium">{message.reactions.stars}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageWall;