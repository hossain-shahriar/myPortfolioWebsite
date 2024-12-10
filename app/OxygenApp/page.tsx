'use client';

import React from 'react';
import Footer from '../Components/Footer'; // Assuming Footer.tsx is in the same directory

const OxygenApp = () => {
  return (
    <div className='text-gray-600'>
      {/* Title Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <h1 className="text-6xl font-bold my-4">Oxygen: Chronic Illness Management App</h1>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/EmyhOyyP6Lc"
          title="Oxygen: Chronic Illness Management App"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* About the Project */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">About the Project</h2>
        <p>
          The <b>Oxygen: Chronic Illness Management App</b>, powered by NotJustYou, is a comprehensive tool designed to assist patients and caregivers in managing the complexities of chronic health conditions. By providing features such as symptom tracking, appointment scheduling, and streamlined caregiver communication, the app serves as a vital companion for improving the quality of life of its users. This project aligns with NotJustYou's mission to empower individuals and families navigating long-term health challenges.
        </p>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Key Features</h2>
        <ul>
          <li>💊 <b>Symptom and Appointment Tracking</b>: Log and monitor health conditions and schedule medical appointments seamlessly.</li>
          <li>🗂️ <b>Medical Wallet</b>: Securely store and access essential medical records and documentation.</li>
          <li>🤖 <b>AI-Driven Insights</b>: Gain real-time support for medications and diagnoses, simplifying complex medical information.</li>
          <li>👥 <b>Caregiver Access</b>: Enable caregivers to stay informed and collaborate effectively for better patient care.</li>
        </ul>
      </div>

      {/* Tools and Technologies Used */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Tools and Technologies</h2>
        <ul>
          <li>⚛️ <b>React Native & Expo</b>: Leveraged for building a robust and responsive cross-platform application.</li>
          <li>📜 <b>TypeScript</b>: Ensured strong type safety and maintainability throughout the development process.</li>
          <li>🎨 <b>Tailwind CSS</b>: Applied for efficient and modern UI styling.</li>
          <li>🤖 <b>AI Integration</b>: Incorporated real-time medical assistant functionality to enhance user experience.</li>
        </ul>
      </div>

      {/* Running the App */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">How to Use the App</h2>
        <p>
          Designed primarily for iOS, the app provides an intuitive interface and seamless functionality. For more details on installation, features, and usage, please visit the project portal linked below.
        </p>
      </div>

      {/* Project Portal Link */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <a
          href="https://ualberta-cmput401.github.io/f24project-NotJustYou/"
          className="text-lg font-bold text-gray-500 hover:text-blue-800 py-2 px-4 rounded border border-gray-500 hover:border-gray-700 transition-all duration-300"
        >
          Visit the Project Portal
        </a>
      </div>

      {/* Copyright Footer */}
      <Footer />
    </div>
  );
};

export default OxygenApp;
