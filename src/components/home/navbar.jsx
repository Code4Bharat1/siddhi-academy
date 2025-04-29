'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
    setIsOpen(false); // close menu on mobile after click
  };

  return (
    <header className="shadow-sm bg-white">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 py-2">
          <img src="/logo.png" alt="Siddhi Academy Logo"  className="h-12 " />
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
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
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
  );
};

export default Navbar;
