"use client"; 
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote: `"Siddhi Academy is not just about academics. It's about the personal attention and care they give to each student, helping us grow both intellectually and personally."`,
    author: "PALLAVI MORE",
    image: "/student/student3.jpg",  // Image URL for Pallavi
  },
  {
    quote: `"Many institutions promise results, but Siddhi Academy truly delivers. Their focused approach helped me achieve success beyond what I expected."`,
    author: "Pooja Mane",
    image: "/student/student5.jpg",  // Image URL for Pooja
  },
  {
    quote: `"I never imagined that Commerce could be so interesting. Siddhi Academy's practical teaching methods and engaging lessons completely changed my perspective."`,
    author: "RIYA SHETTY",
    image: "/student/student4.jpg",  // Image URL for Riya
  },
];

export default function AdmissionBanner() {
  const [index, setIndex] = useState(0); // To track which story is displayed
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle clicking on dots to change the testimonial
  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover real stories from our students at Siddhi Academy. Learn how our focused approach has helped students like Pallavi, Pooja, and Riya achieve academic success."
        />
        <meta
          name="keywords"
          content="Siddhi Academy, Admission 2025, Academic Success, Testimonials, Commerce Education"
        />
        <title>Admission Open - Siddhi Academy 2025</title>
      </Head>

      <section className="relative w-full h-[380px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/classroom.png')" }}
          aria-hidden="true"
        ></div>

        {/* Blurs and Fades */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-t from-[rgba(255,255,255,0.8)] to-transparent z-10" />
        <div className="absolute inset-0 blur-sm z-0"></div>

        {/* Main Content */}
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-12">
          {/* Left Side (Blue Box) */}
          <div className="w-full text-white p-10 flex flex-col justify-center items-center md:items-start md:-ml-20 mb-10 md:mb-0 -mt-17 overflow-hidden rounded-xl relative z-20">
            <Image
              src="/diagonalshape.png"
              alt="Blue Box"
              width={350}
              height={450}
              className="w-[120px] sm:w-[300px] md:w-[350px] h-[150px] sm:h-[400px] md:h-[450px]"
            />
            <div className="absolute top-1/3 text-center px-4">
              <h2 className="text-lg md:text-3xl font-semibold">Admission</h2>
              <h1 className="text-xl md:text-6xl font-bold">OPEN</h1>
              <h3 className="text-md md:text-4xl">2025 - 26</h3>
              <button
                className="mt-1 md:mt-8 px-2 md:px-12 py-1 text-xs md:text-3xl hover:bg-[#002fb3] bg-[#0038D1] font-medium rounded-md border border-white"
                onClick={() => setIsPopupOpen(true)}
              >
                Admission Now
              </button>
            </div>
          </div>

          {/* Right Side (Testimonials) */}
          <div className="text-white w-full md:w-3/3 -mt-15 md:mt-0 ml-30 md:ml-0 text-center md:pl-10 overflow-hidden z-20 mr-30 select-none">
            <h3 className="text-xl sm:text-3xl md:text-3xl font-bold font-Hind mb-4">
              Real Stories. Real Results.
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm sm:text-base md:text-xl leading-relaxed"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonials[index].image}
                    alt={`testimonial-${index}`}
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-[80px] md:w-[120px] h-[80px] md:h-[120px]"
                  />
                </div>
                <p>{testimonials[index].quote}</p>
                <p className="mt-4 font-semibold">{testimonials[index].author}</p>
              </motion.div>
            </AnimatePresence>

            {/* Dots (clickable) */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-10 rounded-full transition-colors duration-300 ${
                    i === index ? "bg-[#d2d3d7]" : "bg-white/40"
                  }`}
                  onClick={() => handleDotClick(i)} // Change testimonial on click
                />
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[300px] relative">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-2 right-2 text-xl text-gray-700"
              >
                <IoMdClose />
              </button>

              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="https://wa.me/919226524850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-green-600"
                >
                  <FaWhatsapp size={30} /> Kishan Nagar Branch
                </a>
                <a
                  href="https://wa.me/919220169760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-medium hover:bg-green-600"
                >
                  <FaWhatsapp size={30} /> Dnyaneshwar Nagar Branch
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
