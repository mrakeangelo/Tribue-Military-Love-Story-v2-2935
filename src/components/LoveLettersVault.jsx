import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiCalendar, FiHeart, FiX, FiVolumeX, FiVolume2 } = FiIcons;

const letters = [
  {
    id: 1,
    sender: "Sarah",
    recipient: "Michael",
    date: "October 15, 2019",
    subject: "Missing You Already",
    preview: "My dearest Michael, It's only been three days since you left...",
    content: `My dearest Michael,

It's only been three days since you left, and I already miss you more than words can express. The house feels so empty without your laughter echoing through the halls, without your terrible morning jokes that somehow always made me smile.

I keep your pillow close to me at night, and I swear I can still smell your cologne on it. I know you're out there serving our country, making me proud every single day, but I can't help but wish you were here to hold me tight.

I've been writing in that journal you gave me, filling it with all the things I want to tell you when you get back. There are so many adventures waiting for us, so many dreams we haven't chased yet.

Stay safe out there, my love. Come home to me.

Forever yours,
Sarah

P.S. - I've enclosed a photo of us from last weekend. Keep it close to your heart, as you'll always be close to mine.`,
    deployment: "Pacific Deployment 2019",
    hasAudio: true
  },
  {
    id: 2,
    sender: "Michael",
    recipient: "Sarah",
    date: "November 2, 2019",
    subject: "Sunrise Thoughts",
    preview: "My beautiful Sarah, I watched the sunrise this morning...",
    content: `My beautiful Sarah,

I watched the sunrise this morning and thought of you. The sky was painted in shades of pink and gold, just like the blush on your cheeks when you laugh. It's moments like these that remind me why I'm fighting - not just for our country, but for our future together.

Your last letter arrived yesterday, and I must have read it a hundred times. The other guys are starting to tease me about the smile that spreads across my face every time I see your handwriting on an envelope.

I've been counting down the days until I can hold you again. 127 days to go, but who's counting? (I am, every single one of them.)

I love you more than the ocean is deep, more than the sky is wide.

Until we meet again,
Michael

P.S. - I'm enclosing a pressed flower I found on shore leave. It reminded me of the ones you love so much in your garden.`,
    deployment: "Pacific Deployment 2019",
    hasAudio: false
  },
  {
    id: 3,
    sender: "Sarah",
    recipient: "Michael",
    date: "December 24, 2019",
    subject: "Christmas Without You",
    preview: "My heart, It's Christmas Eve, and all I want is you...",
    content: `My heart,

It's Christmas Eve, and all I want is you here with me. I've set up our little tree just the way you like it, with the angel you gave me last year sitting proudly on top. The lights are twinkling, but they don't shine as bright as your smile.

I went to the Christmas Eve service tonight and prayed for your safety, for your swift return, and for all the service members who are spending this holy night away from their families. The pastor spoke about hope, and I thought of you - my greatest hope, my brightest star.

I've wrapped your presents and put them under the tree. They'll be waiting for you when you come home, just like I will be.

Merry Christmas, my love. May the new year bring you back to me.

All my love,
Sarah

P.S. - I'm sending you cookies from your mom's recipe. I hope they taste like home.`,
    deployment: "Pacific Deployment 2019",
    hasAudio: true
  }
];

const LoveLettersVault = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-ink-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl text-seafoam-50 mb-6">
            Love Letters Vault
          </h2>
          <p className="font-body text-lg text-rose-300 max-w-2xl mx-auto">
            Words that bridged the distance between two hearts across oceans and time zones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedLetter(letter)}
            >
              <div className="bg-seafoam-50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                {/* Envelope Effect */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-800 to-rose-400"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-gold-800 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiMail} className="text-seafoam-50 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-navy-800 mb-1">{letter.subject}</h3>
                    <p className="font-handwritten text-rose-600">From {letter.sender}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-sm text-ink-600">
                  <SafeIcon icon={FiCalendar} className="text-base" />
                  <span>{letter.date}</span>
                </div>

                <p className="font-body text-ink-700 leading-relaxed mb-4 line-clamp-3">
                  {letter.preview}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-ink-500 bg-ink-100 px-3 py-1 rounded-full">
                    {letter.deployment}
                  </span>
                  {letter.hasAudio && (
                    <div className="flex items-center gap-1 text-gold-800">
                      <SafeIcon icon={FiVolumeX} className="text-sm" />
                      <span className="text-xs">Audio</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Letter Modal */}
        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLetter(null)}
            >
              <motion.div
                className="bg-seafoam-50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-gold-800 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiMail} className="text-seafoam-50 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl text-navy-800">{selectedLetter.subject}</h3>
                        <p className="font-handwritten text-rose-600">From {selectedLetter.sender} to {selectedLetter.recipient}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedLetter(null)}
                      className="w-10 h-10 bg-ink-200 hover:bg-ink-300 rounded-full flex items-center justify-center transition-colors"
                    >
                      <SafeIcon icon={FiX} className="text-ink-700" />
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm text-ink-600">
                      <SafeIcon icon={FiCalendar} className="text-base" />
                      <span>{selectedLetter.date}</span>
                    </div>
                    {selectedLetter.hasAudio && (
                      <button
                        onClick={() => setAudioPlaying(!audioPlaying)}
                        className="flex items-center gap-2 text-sm text-gold-800 hover:text-gold-900 transition-colors"
                      >
                        <SafeIcon icon={audioPlaying ? FiVolume2 : FiVolumeX} className="text-base" />
                        <span>{audioPlaying ? 'Playing' : 'Play Audio'}</span>
                      </button>
                    )}
                  </div>

                  <div className="bg-ink-50 rounded-xl p-6 mb-6">
                    <pre className="font-body text-ink-800 whitespace-pre-wrap leading-relaxed">
                      {selectedLetter.content}
                    </pre>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ink-500 bg-ink-100 px-3 py-1 rounded-full">
                      {selectedLetter.deployment}
                    </span>
                    <SafeIcon icon={FiHeart} className="text-rose-400 text-xl" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveLettersVault;