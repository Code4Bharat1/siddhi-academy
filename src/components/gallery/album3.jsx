'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CategoryScroll } from './categoryscroll';

const classImages = [
  { src: "/gallery/class/class1.webp", label: "practice test" },
  { src: "/gallery/class/class2.webp", label: "paper " },
  { src: "/gallery/class/class3.webp", label: "Learning Time" },
  { src: "/gallery/class/class4.webp", label: "Group Work" },
  { src: "/gallery/class/class5.webp", label: "English Session" },
  { src: "/gallery/class/class6.webp", label: "Science session" },
  { src: "/gallery/class/class7.jpg", label: "learning time" },
  { src: "/gallery/img3.jpg", label: "Math Practice" },
  { src: "/gallery/class/class10.webp", label: "Discussion Time" },
  { src: "/gallery/class/classf1.jpg", label: "Discussion Time" },
  { src: "/gallery/class/classf2.jpg", label: "Discussion Time" },
  { src: "/gallery/class/classf3.jpg", label: "Discussion Time" },
  { src: "/gallery/class/class11.jpg", label: "Discussion Time" },
 
];

export default function Album3() {
  const [shuffledImages, setShuffledImages] = useState(classImages);
  const [selectedImage, setSelectedImage] = useState(null); // For modal

  useEffect(() => {
    const shuffled = [...classImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mb-20">
      <CategoryScroll />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-center mb-10 text-blue-800 tracking-wide"
      >
        ✨ Classes ✨
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
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-80 object-cover rounded-md transition-transform transform group-hover:scale-125 group-hover:opacity-90"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#0038D1] bg-opacity-60 text-white text-center text-sm py-2 rounded-b-md">
              {img.label}
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
              {/* Exit Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-red-400"
              >
                ✖
              </button>

              {/* Image Display */}
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
