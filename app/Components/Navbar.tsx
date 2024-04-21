'use client'
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu after clicking
    }
  };      

    return (
        <nav className="sticky top-0 bg-white shadow-lg z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
                <div className="flex justify-between">
                    <a href="/" className="flex items-center px-2">
                        <img src="/mysignature.png" alt="my signature" className="h-20 w-auto" />
                    </a>
                    <div className="flex items-center">
                        {/* Hamburger menu for mobile view */}
                        <div className="md:hidden">
                            <button type="button" className="text-gray-500 hover:text-sky-500 focus:outline-none focus:text-sky-500"
                                aria-label="toggle menu" onClick={() => setIsOpen(!isOpen)}>
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"></path>
                                </svg>
                            </button>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a onClick={() => scrollToSection('#projects')} className="cursor-pointer py-4 px-2 text-gray-500 font-semibold hover:text-sky-500 transition duration-300">Projects</a>
                            <a onClick={() => scrollToSection('#about')} className="cursor-pointer py-4 px-2 text-gray-500 font-semibold hover:text-sky-500 transition duration-300">About</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <a onClick={() => scrollToSection('#projects')} className="cursor-pointer block py-2 px-4 text-sm hover:bg-gray-200">Projects</a>
                <a onClick={() => scrollToSection('#about')} className="cursor-pointer block py-2 px-4 text-sm hover:bg-gray-200">About</a>
            </div>
        </nav>
    );
};

export default Navbar;
