'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryScroll } from './categoryscroll';
import Head from 'next/head'; // Import Next.js Head component for SEO
import Image from 'next/image';

const annualFunctionImages = [
  { src: "/gallery/annual/anual1.webp", label: "Annual Celebration" },
  { src: "/gallery/annual/anual2.webp", label: "Annual Celebration" },
  { src: "/gallery/annual/anual3.webp", label: "Annual Celebration" },
  { src: "/gallery/annual/anual4.webp", label: "Annual Celebration" },
  { src: "/gallery/annual/anual5.webp", label: "Annual Celebration" },
  { src: "/gallery/annual/anual6.webp", label: "Annual Celebration" },
  { src: "/gallery/annual/anual7.webp", label: "Mehndi Competition" },
  { src: "/gallery/annual/anual8.webp", label: "Mehndi Competition" },
  { src: "/gallery/annual/annual4.jpg", label: "Annual Celebration" },
  { src: "/gallery/annual/anuual.jpg", label: "Annual Celebration" },
  { src: "/gallery/annual/annualf4.jpg", label: "Annual Celebration" },
  { src: "/gallery/annual/annualf5.jpg", label: "Annual Celebration" },
];

export default function Album2() {
  const [shuffledImages, setShuffledImages] = useState(annualFunctionImages);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffled = [...annualFunctionImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mb-20">
      {/* Adding SEO meta tags */}
      <Head>
        <title>Annual Function Memories - Gallery</title>
        <meta
          name="description"
          content="Explore memories from our annual function, including photos of the annual celebration and mehndi competition."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Annual Function Memories" />
        <meta
          property="og:description"
          content="Explore memories from our annual function, including photos of the annual celebration and mehndi competition."
        />
        <meta property="og:image" content="/path/to/default-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/annual-function-gallery" />
      </Head>

      <CategoryScroll />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-center mb-10 text-red-700 tracking-wide"
      >
        🎉 Annual Function Memories 🎉
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
            <div className="relative w-full h-80 rounded-md overflow-hidden group">
              <Image
                src={img.src}
                alt={img.label}  // Ensure alt text is added for SEO
                width={500}  // Add appropriate width
                height={320} // Add appropriate height
                className="w-full h-full object-cover transition-transform transform group-hover:scale-125 group-hover:opacity-90"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#0038D1] bg-opacity-70 text-white text-center text-sm py-2 rounded-b-md">
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

              <div className="relative w-full max-h-[80vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.label}  // Ensure alt text is added for SEO
                  width={1000}  // Add appropriate width
                  height={600}  // Add appropriate height
                  className="w-full h-auto object-contain rounded-lg shadow-xl"
                />
              </div>
              <p className="text-white text-center mt-4 text-lg">{selectedImage.label}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
