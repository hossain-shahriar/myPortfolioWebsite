// Footer.tsx
'use client';

import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-gray-600 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left-aligned Let's Connect heading */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <p className="text-3xl font-bold text-gray-600 mr-8">Let's Connect!</p>
        </div>

        {/* Right-aligned Contact Information */}
        <div className="mt-4 md:mt-0">
          <a href="mailto:mhossai6@ualberta.ca" className="text-lg hover:text-blue-300 transition duration-300 block">
            mhossai6@ualberta.ca
          </a>
          <a href="tel:+17807073453" className="text-lg hover:text-blue-300 transition duration-300 block mt-2">
            +1 (780) 707-3453
          </a>
        </div>
      </div>
      
      <hr className="border-gray-400 w-full mt-8" />

      {/* Centered Copyright Notice */}
      <div className="text-center text-gray-400 text-sm mt-4">
        <p>&copy; {year} Mohammad Shahriar Hossain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
