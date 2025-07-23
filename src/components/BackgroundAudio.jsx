import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiVolumeX, FiVolume2 } = FiIcons;

const BackgroundAudio = ({ enabled, onToggle }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (enabled) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [enabled]);

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <button
        onClick={() => onToggle(!enabled)}
        className="w-12 h-12 bg-gradient-to-br from-gold-800 to-rose-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        title={enabled ? 'Mute background music' : 'Play background music'}
      >
        <SafeIcon 
          icon={enabled ? FiVolume2 : FiVolumeX} 
          className="text-seafoam-50 text-xl group-hover:scale-110 transition-transform" 
        />
      </button>
      
      {/* Note: In a real implementation, you would add an actual audio element */}
      {/* <audio ref={audioRef} loop>
        <source src="/path-to-your-audio-file.mp3" type="audio/mpeg" />
      </audio> */}
    </motion.div>
  );
};

export default BackgroundAudio;