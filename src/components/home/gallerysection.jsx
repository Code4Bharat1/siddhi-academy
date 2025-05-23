'use client';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const GallerySection = () => {
  const galleryItems = [
    {
      title: 'Classes Photos',
      imgSrc: '/gallery/img3.jpg',
      width: 500,
      height: 350,
    },
    {
      title: 'Opening Ceremony Photos',
      imgSrc: '/gallery/openingceremony/opening3.webp',
      width: 500,
      height: 350,
    },
    {
      title: 'Extracurricular Photos',
      imgSrc: '/gallery/extracuriculam/extra2.jpg',
      width: 500,
      height: 350,
    },
  ];

  return (
    <>
      <Head>
        <title>Gallery - Siddhi Academy</title>
        <meta
          name="description"
          content="Explore the vibrant gallery of Siddhi Academy, featuring photos from classes, the opening ceremony, and extracurricular activities."
        />
        <meta property="og:title" content="Siddhi Academy Gallery" />
        <meta
          property="og:description"
          content="Check out the gallery of Siddhi Academy, showcasing our classes, opening ceremony, and extracurricular events."
        />
        <meta
          property="og:image"
          content="https://www.yoursite.com/path-to-gallery-image.jpg"
        />
        <meta property="og:url" content="https://www.yoursite.com/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourSite" />
        <meta
          name="twitter:image"
          content="https://www.yoursite.com/path-to-gallery-image.jpg"
        />
      </Head>

      <section className="py-10 bg-white mb-30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">Gallery</h2>
          </div>
          <div className="flex justify-end items-right mb-6">
            <a
              href="/gallery"
              className="text-blue-600 text-sm font-semibold hover:underline"
            >
              SEE MORE &gt;&gt;
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-20">
            {galleryItems.map((item, index) => (
              <div key={index} className="flex justify-center">
                <div
                  className="relative rounded-t-3xl overflow-hidden"
                  style={{
                    width: `${item.width}px`,
                    height: `${item.height}px`,
                    boxShadow: '0 -5px 6px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Image
                    src={item.imgSrc}
                    alt={`Image of ${item.title}`}
                    fill
                    className="object-cover z-0"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-[#0038D1] text-white text-center py-3 text-sm font-semibold rounded-t-2xl z-10">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
