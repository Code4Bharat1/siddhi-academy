'use client';

import React from 'react';
import Head from 'next/head'; // Import Head for SEO
import Image from 'next/image';
export default function Gallery() {
  const Diamond = ({ src, alt, zoom = 1.5, origin = 'center' }) => (
    <div className="diamond-container w-20 h-20 sm:w-40 sm:h-40 rotate-45 overflow-hidden">
      <div
        className={`w-full h-full -rotate-45`}
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: origin,
        }}
      >
      <Image
  src={src}
  alt={alt}
  width={160}
  height={160}
  className="w-full h-full object-cover object-center diamond-image"
  unoptimized
/>

      </div>
    </div>
  );

  return (
    <main className="md:min-h-screen h-[250px] w-full flex items-center justify-center bg-white overflow-hidden">
      {/* SEO Meta Tags */}
      <Head>
        <title>Gallery - Frames of Success</title>
        <meta
          name="description"
          content="Explore our gallery showcasing frames of success, featuring memorable moments from various events and achievements."
        />
        <meta
          name="keywords"
          content="gallery, success, memorable moments, events, achievements, photos, frames"
        />
        <meta property="og:title" content="Gallery - Frames of Success" />
        <meta
          property="og:description"
          content="Explore our gallery showcasing frames of success, featuring memorable moments from various events and achievements."
        />
        <meta property="og:image" content="/gallery/gallery.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="w-full md:scale-[3.5] md:w-auto"> {/* Only scale on md+ screens */}
        <div className="flex flex-col items-center space-y-0 md:space-y-[-2.5rem]">
          {/* Mobile View - Only one image */}
          <div className="relative w-full h-[400px] md:hidden overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <div className="relative z-0 w-full h-full">
              <Image
  src="/gallery/gallery.png"
  alt="Gallery Background"
  fill
  className="object-cover"
  unoptimized
  priority
/>

              </div>
            </div>

            {/* Overlay with text */}
            <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4 md:px-8">
              <h2 className="text-white text-2xl font-bold z-10">
                frames of Success
              </h2>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex md:flex-col items-center space-y-[-2.5rem]">
            <div className="flex justify-center space-x-20">
              <Diamond src="/gallery/img1.webp" alt="Image 1" />
              <Diamond src="/gallery/img4.jpg" alt="Image 2" />
            </div>
            <div className="flex justify-center space-x-20">
              <Diamond src="/gallery/img3.jpg" alt="Image 3" />
              <Diamond src="/gallery/img2.jpg" alt="Image 4" zoom={1.4} />
              <Diamond src="/gallery/img5.jpg" alt="Image 5" zoom={1.4} />
            </div>
            <div className="flex justify-center space-x-20">
              <Diamond
                src="/gallery/class/class3.webp"
                alt="Image 6"
                zoom={1.3}
                origin="left bottom"
              />
              <Diamond
                src="/gallery/img7.jpg"
                alt="Image 7"
                zoom={1.2}
                origin="left bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
