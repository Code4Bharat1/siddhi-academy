'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryScroll } from './categoryscroll';

const picnicImages = [
  { src: "/gallery/picnic/picnic.jpg", label: "group photo" },
  { src: "/gallery/picnic/picnic1.webp", label: "group photo" },
  { src: "/gallery/picnic/picnic2.webp", label: "picnic activity" },
  { src: "/gallery/picnic/picnic3.webp", label: "Games & Fun" },
  { src: "/gallery/picnic/picnic4.webp", label: "picnic activity" },
  { src: "/gallery/picnic/picnic5.webp", label: "Nature Walk" },
  { src: "/gallery/picnic/picnic6.webp", label: "Water Games" },
  { src: "/gallery/picnic/picnic7.jpg", label: "Water park" },
  { src: "/gallery/picnic/picnicf1.jpg", label: "Nature Walk" },
  { src: "/gallery/picnic/picnicf2.jpg", label: "Water Games" },
  { src: "/gallery/picnic/picnic3.jpg", label: "Water park" },
];

export default function PicnicAlbum() {
  const [shuffledImages, setShuffledImages] = useState(picnicImages);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffled = [...picnicImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 mb-20">
      <CategoryScroll />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-center mb-10 text-green-800 tracking-wide"
      >
        🌿 Picnic Moments 🌿
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {shuffledImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="rounded-[20px] w-full shadow-lg bg-white cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(img)}
          >
            <div className="relative group w-full h-[360px] rounded-[16px] overflow-hidden">
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform transform group-hover:scale-110 group-hover:opacity-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0038D1] bg-opacity-60 text-white text-center text-lg font-semibold py-3">
                {img.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
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

              <img
                src={selectedImage.src}
                alt={selectedImage.label}
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
