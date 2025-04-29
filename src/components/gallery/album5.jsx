'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryScroll } from './categoryscroll';
import Head from 'next/head';
import Image from 'next/image';

const extraCurricularImages = [
  { src: "/gallery/extracuriculam/extra1.jpg", label: "Activity" },
  { src: "/gallery/extracuriculam/extra2.jpg", label: "sports" },
  { src: "/gallery/extracuriculam/extra3.webp", label: "sports" },
  { src: "/gallery/extracuriculam/extra4.webp", label: "sports Event" },
  { src: "/gallery/extracuriculam/extra5.webp", label: "Annual Function" },
  { src: "/gallery/extracuriculam/extra6.webp", label: "Cultural Festival" },
  { src: "/gallery/extracuriculam/extra7.webp", label: "Art Exhibition" },
  { src: "/gallery/annual/anual7.webp", label: "Mehndi Competition" },
  { src: "/gallery/annual/anual8.webp", label: "Mehndi Competition" },
];

export default function Album5() {
  const [shuffledImages, setShuffledImages] = useState(extraCurricularImages);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffled = [...extraCurricularImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <>
      <Head>
        <title>Extra Curricular Activities - Achievements and Events</title>
        <meta name="description" content="Explore various extra curricular activities, including sports events, cultural festivals, annual functions, and art exhibitions." />
        <meta name="keywords" content="extra curricular activities, sports events, annual function, cultural festival, art exhibition, mehndi competition" />
        <meta property="og:title" content="Extra Curricular Activities - Achievements and Events" />
        <meta property="og:description" content="Explore various extra curricular activities, including sports events, cultural festivals, annual functions, and art exhibitions." />
        <meta property="og:image" content="/gallery/extracuriculam/extra1.jpg" />
        <meta property="og:url" content="https://your-website-url.com/extracurricular" />
      </Head>
      
      <div className="max-w-6xl mx-auto py-10 px-4 mb-20">
        <CategoryScroll />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-10 text-purple-800 tracking-wide"
        >
          🎭 Extra Curricular Activities 🎭
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
                width={500} // You can adjust the width
                height={320} // You can adjust the height
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
                  width={900} // Adjust for larger size
                  height={600} // Adjust for larger size
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
