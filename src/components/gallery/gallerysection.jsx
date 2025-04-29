'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

const images = [
  { src: "/gallery/img1.webp", label: "Picnic", link: "/gallery/album1" },
  { src: "/gallery/img2.jpg", label: "Annual Function", link: "/gallery/album2" },
  { src: "/gallery/img3.jpg", label: "Classes", link: "/gallery/album3" },
  { src: "/gallery/img4.jpg", label: "Achievement", link: "/gallery/album4" },
  { src: "/gallery/img5.jpg", label: "Extra Curricular", link: "/gallery/album5" },
  { src: "/gallery/ceremony.jpg", label: "Opening Ceremony", link: "/gallery/album6" },
];

export default function Gallery2() {
  const router = useRouter();

  const handleNavigation = (link) => {
    router.push(link);
  };

  return (
    <>
      <Head>
        <title>Gallery - Memorable Moments</title>
        <meta
          name="description"
          content="Browse through our collection of memorable moments captured in various events, including picnics, annual functions, achievements, and more."
        />
        <meta
          name="keywords"
          content="gallery, events, picnic, annual function, classes, achievements, extracurricular, ceremony"
        />
        <meta property="og:title" content="Gallery - Memorable Moments" />
        <meta
          property="og:description"
          content="Browse through our collection of memorable moments captured in various events, including picnics, annual functions, achievements, and more."
        />
        <meta property="og:image" content="/gallery/img1.webp" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="max-w-6xl mx-auto py-10 px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-20 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative cursor-pointer overflow-hidden rounded-md shadow-lg group"
              onClick={() => handleNavigation(img.link)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative w-full h-48 md:h-80">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover group-hover:brightness-90 transition duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i === 0}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#0038D1] bg-opacity-60 text-white text-center py-2 text-sm font-medium z-10">
                {img.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
