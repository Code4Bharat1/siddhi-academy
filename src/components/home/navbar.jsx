'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // using Lucide icons (or switch to any icon you prefer)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-sm  bg-white">
      <div className="max-w-7xl mx-auto ml-15  py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex  items-center space-x-2 py-2 ">
          <img src="/logo.png" alt="Siddhi Academy Logo" className="h-12  " />
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-15 font-Hind text-black font-semibold text-2xl -mr-30">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact Us</Link>

        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        style={{ zIndex: 1000 }} // Ensure the mobile menu is above other content
      >
        <div className="px-4 py-6 space-y-4 font-Hind text-black font-semibold text-md">
          <Link href="/" onClick={() => setIsOpen(false)} className="block py-2">
            Home
          </Link>

          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2">
            About
          </Link>
          <Link href="/courses" onClick={() => setIsOpen(false)} className="block py-2">
            Courses
          </Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} className="block py-2">
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-2">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
