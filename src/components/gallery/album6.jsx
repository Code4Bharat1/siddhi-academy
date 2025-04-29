'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryScroll } from './categoryscroll';
import Head from 'next/head'; // Import Head from Next.js
import Image from 'next/image';

const openingCeremonyImages = [
  { src: "/gallery/openingceremony/opening1.webp", label: "Opening Ceremony" },
  { src: "/gallery/openingceremony/opening2.webp", label: "Opening Ceremony" },
  { src: "/gallery/openingceremony/opening3.webp", label: "Opening Ceremony" },
  { src: "/gallery/openingceremony/opening4.webp", label: "Opening Ceremony" },
  { src: "/gallery/openingceremony/opening5.webp", label: "Opening Ceremony" },
];

export default function Album6() {
  const [shuffledImages, setShuffledImages] = useState(openingCeremonyImages);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffled = [...openingCeremonyImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mb-20">
      {/* SEO Head component */}
      <Head>
        <title>Opening Ceremony Gallery</title>
        <meta name="description" content="Explore the exciting moments from the opening ceremony with this gallery showcasing various activities and celebrations." />
        <meta name="keywords" content="Opening Ceremony, gallery, events, celebration, activities, opening ceremony images" />
        <meta property="og:title" content="Opening Ceremony Gallery" />
        <meta property="og:description" content="Explore the exciting moments from the opening ceremony with this gallery showcasing various activities and celebrations." />
        <meta property="og:image" content="/gallery/openingceremony/opening1.webp" />
        <meta property="og:type" content="website" />
      </Head>

      <CategoryScroll />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-center mb-10 text-green-700 tracking-wide"
      >
        🎉 Opening Ceremony 🎉
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
              width={600}
              height={480}
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
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
              <p className="text-white text-center mt-4 text-lg">{selectedImage.label}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
