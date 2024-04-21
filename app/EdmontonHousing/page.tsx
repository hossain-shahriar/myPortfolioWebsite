// EdmontonHousing.tsx
'use client';

import React from 'react';
import Footer from '../Components/Footer'; // Assuming Footer.tsx is in the same directory

const EdmontonHousing = () => {
  return (
    <div className='text-gray-600'>
      {/* Title Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <h1 className="text-6xl font-bold my-4">Edmonton Housing Data Analysis</h1>
      </div>

      {/* Photo or Video Section */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <iframe
          width="100%"
          height="500" // Adjust height as needed
          src="https://www.youtube.com/embed/[VIDEO_ID]" // Replace [VIDEO_ID] with your YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}

      {/* Photo Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <img
          src="EdmontonHousing.jpg" // Replace with your image path
          alt="Descriptive alt text"
          style={{ width: '100%', height: 'auto' }}
        />
        <figcaption className="text-center mt-2">This is a screenshot of the Edmonton Housing Dashboard.</figcaption>
      </div>

      {/* About the Project */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">About the Project</h2>
        <p>This project delves into the Edmonton housing market, employing a robust methodology to clean, analyze, and visualize housing data. It leverages SQL for data cleansing, Pandas for data analysis, and Power BI for crafting an interactive dashboard that brings forth insights into housing trends.</p>
        <p>Explore the interactive dashboard to gain an understanding of the housing landscape, examine the average pricing, and assess the community-based housing distribution.</p>
      </div>

      {/* Project Components */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Project Components</h2>
        <p>Data Cleaning: Utilized SQL and Pandas to standardize and rectify the housing dataset, ensuring a high-quality foundation for analysis.</p>
        <p>Data Analysis: Conducted comprehensive analysis using SQL queries and Pandas operations to extract key metrics and insights.</p>
        <p>Data Visualization: Created an interactive Power BI dashboard, facilitating an engaging exploration of the housing data.</p>
      </div>

      {/* Using the Dashboard */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Using the Dashboard</h2>
        <p><strong>Accessing the Dashboard:</strong> The Power BI dashboard is available for interaction, providing filters and slicers for a customized view of the data.</p>
        <p><strong>Exploring Data Points:</strong> Navigate through various visualizations to understand market trends, pricing, and demographic distributions.</p>
      </div>

      {/* Tools and Techniques */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Tools and Techniques Used</h2>
        <p><strong>SQL:</strong> Executed data cleaning and analysis through structured queries.</p>
        <p><strong>Pandas:</strong>Utilized for its data manipulation strengths within a Python environment.</p>
        <p><strong>Power BI:</strong> Chosen for its powerful data visualization capabilities to represent data interactively.</p>
      </div>

      {/* GitHub Repository Link */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <a href="https://github.com/hossain-shahriar/DataCleaningAnalysisVisualization" className="text-lg font-bold text-gray-500 hover:text-blue-800 py-2 px-4 rounded border border-gray-500 hover:border-gray-700 transition-all duration-300">
          Visit the GitHub Repository
        </a>
      </div>

      {/* Copyright Footer */}
      <Footer />
    </div>
  );
};

export default EdmontonHousing;
