'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
    setIsOpen(false); // close menu on mobile after click
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Siddhi Academy | Learn & Grow</title>
        <meta
          name="description"
          content="Siddhi Academy offers quality education and career-building courses for students and professionals."
        />
        <meta
          name="keywords"
          content="Siddhi Academy, education, online courses, learning, training, career"
        />
        <meta name="author" content="Siddhi Academy" />
        <link rel="canonical" href="https://siddhiacademy.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Siddhi Academy" />
        <meta
          property="og:description"
          content="Explore our wide range of learning programs and grow your career with Siddhi Academy."
        />
        <meta property="og:url" content="https://siddhiacademy.com" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siddhi Academy" />
        <meta
          name="twitter:description"
          content="Courses to help you succeed. Join Siddhi Academy today!"
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      {/* Navbar */}
      <header className="shadow-sm bg-white">
        <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 py-2">
            <Image
              src="/logo.png"
              alt="Siddhi Academy Logo"
              width={200}
              height={100}
              priority
            />
          </div>

          {/* Hamburger Icon - Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-15 font-Hind text-black font-semibold text-2xl">
            <button onClick={() => navigate('/')} className="hover:text-blue-500">Home</button>
            <button onClick={() => navigate('/about')} className="hover:text-blue-500">About</button>
            <button onClick={() => navigate('/courses')} className="hover:text-blue-500">Courses</button>
            <button onClick={() => navigate('/gallery')} className="hover:text-blue-500">Gallery</button>
            <button onClick={() => navigate('/contact')} className="hover:text-blue-500">Contact Us</button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          style={{ zIndex: 1000 }}
        >
          <div className="px-4 py-6 space-y-4 font-Hind text-black font-semibold text-md">
            <button onClick={() => navigate('/')} className="block py-2">Home</button>
            <button onClick={() => navigate('/about')} className="block py-2">About</button>
            <button onClick={() => navigate('/courses')} className="block py-2">Courses</button>
            <button onClick={() => navigate('/gallery')} className="block py-2">Gallery</button>
            <button onClick={() => navigate('/contact')} className="block py-2">Contact Us</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
