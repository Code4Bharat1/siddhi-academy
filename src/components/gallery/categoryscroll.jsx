'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Head from 'next/head'; // Import Head for SEO
import Image from 'next/image';

const scrollBlocks = [
  { src: "/gallery/img1.webp", label: "Picnic", link: "/gallery/album1" },
  { src: "/gallery/img2.jpg", label: "Annual Function", link: "/gallery/album2" },
  { src: "/gallery/img3.jpg", label: "Classes", link: "/gallery/album3" },
  { src: "/gallery/img4.jpg", label: "Achievement", link: "/gallery/album4" },
  { src: "/gallery/img5.jpg", label: "Extra Curiculam", link: "/gallery/album5" },
  { src: "/gallery/ceremony.jpg", label: "Opening Ceremony", link: "/gallery/album6" },
];

export function CategoryScroll() {
  const pathname = usePathname();

  return (
    <div className="py-6 px-4 mb-10">
      {/* SEO Head component */}
      <Head>
        <title>Explore Memorable Moments - Gallery</title>
        <meta name="description" content="Browse through our gallery to explore memorable moments from various events like picnics, annual functions, classes, achievements, and more." />
        <meta name="keywords" content="Gallery, Picnic, Annual Function, Classes, Achievement, Extra Curriculam, Opening Ceremony, Events" />
        <meta property="og:title" content="Explore Memorable Moments - Gallery" />
        <meta property="og:description" content="Browse through our gallery to explore memorable moments from various events like picnics, annual functions, classes, achievements, and more." />
        <meta property="og:image" content="/gallery/img1.webp" />
        <meta property="og:type" content="website" />
      </Head>

      <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">
        Explore Our Memorable Moments
      </h2>

      <motion.div
        className="flex overflow-x-auto gap-6 pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        {scrollBlocks.map((block, index) => {
          const isActive = pathname === block.link;

          return (
            <motion.div
              key={index}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Link
                href={block.link}
                className={`block min-w-[160px] sm:min-w-[200px] max-w-[200px] flex-shrink-0 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 relative ${
                  isActive ? 'p-2 border-4 border-black' : 'border border-gray-200'
                }`}
              >
                <div className="relative w-full h-32 sm:h-40 rounded-2xl overflow-hidden bg-white">
                  <Image
                    src={block.src}
                    alt={block.label}
                    width={600}
                    height={320}
                    className="w-full h-full z-10"
                  />

                  {/* Semi-transparent black label background */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
                    <span className="text-white font-semibold text-center text-sm sm:text-base">
                      {block.label}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
