'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryScroll } from './categoryscroll';
import Head from 'next/head';  // Import the Head component from next
import Image from 'next/image';

const achievementImages = [
  { src: "/gallery/achievement/achievenment1.webp", label: "1st winner in drawing" },
  { src: "/gallery/achievement/achievement2.webp", label: "2nd winner in drawing" },
  { src: "/gallery/achievement/achievement3.webp", label: "3rd winner in drawing" },
  { src: "/gallery/achievement/achievement4.webp", label: "Fair Winner" },
  { src: "/gallery/achievement/achievenmentgroup.webp", label: "Study festival Winners" },
  { src: "/gallery/achievement/achievementgroup2.webp", label: "Study festival Winners" },
  { src: "/gallery/achievement/achievementsport.jpg", label: "Sports Winners" },
  { src: "/gallery/achievement/achievement5.jpg", label: "Certificate" },
  { src: "/gallery/achievement/achievement6.jpg", label: "Awards" },
];

export default function Album4() {
  const [shuffledImages, setShuffledImages] = useState(achievementImages);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffled = [...achievementImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Achievements & Awards - Gallery</title>
        <meta name="description" content="Explore the various achievements and awards earned by students. From drawing competitions to sports, discover our success!" />
        <meta name="keywords" content="achievements, awards, drawing competition, sports winners, study festival, certificates" />
        <meta property="og:title" content="Achievements & Awards - Gallery" />
        <meta property="og:description" content="Explore the various achievements and awards earned by students. From drawing competitions to sports, discover our success!" />
        <meta property="og:image" content="/gallery/achievement/achievenment1.webp" />
        <meta property="og:url" content="https://www.yoursite.com/achievements" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Achievements & Awards - Gallery" />
        <meta name="twitter:description" content="Explore the various achievements and awards earned by students. From drawing competitions to sports, discover our success!" />
        <meta name="twitter:image" content="/gallery/achievement/achievenment1.webp" />
      </Head>

      <div className="max-w-6xl mx-auto py-10 px-4 mb-20">
        <CategoryScroll />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-10 text-yellow-700 tracking-wide"
        >
          🏆 Achievements & Awards 🏆
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shuffledImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative shadow-md overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.label}
                width={500} // Adjust the width as needed
                height={320} // Adjust the height as needed
                className="w-full h-80 object-cover rounded-md transition-transform transform group-hover:scale-125 group-hover:opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0038D1] bg-opacity-60 text-white text-center text-sm py-2 rounded-b-md">
                {img.label}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative max-w-5xl w-full p-4">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-red-400"
                >
                  ✖
                </button>

                <Image
                  src={selectedImage.src}
                  alt={selectedImage.label}
                  width={1000} // Adjust the width as needed
                  height={600} // Adjust the height as needed
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
                />
                <p className="text-white text-center mt-4 text-lg">{selectedImage.label}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
