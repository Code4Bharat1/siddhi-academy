"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  { src: "/gallery/img1.webp", label: "Picnic", link: "/gallery/album1" },
  { src: "/gallery/img2.jpg", label: "Annual Function", link: "/gallery/album2" },
  { src: "/gallery/img3.jpg", label: "Classes", link: "/gallery/album3" },
  { src: "/gallery/img4.jpg", label: "Achievement", link: "/gallery/album4" },
  { src: "/gallery/img5.jpg", label: "Extra Curricular", link: "/gallery/album5" },
  { src: "/gallery/ceremony.jpg", label: "Opening Ceremony", link: "/gallery/album6" },
];

export default function Gallery2() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 mb-20">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-20 gap-5">
        {images.map((img, i) => (
          <Link href={img.link} key={i}>
            <motion.div
              className="relative cursor-pointer overflow-hidden rounded-md shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.img
                src={img.src}
                alt={img.label}
                className="w-full h-48 md:h-90 object-cover group-hover:brightness-90 transition duration-300"
                whileHover={{ scale: 1.05 }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0038D1] bg-opacity-60 text-white text-center py-2 text-sm font-medium">
                {img.label}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
