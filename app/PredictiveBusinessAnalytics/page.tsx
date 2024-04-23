// PredictiveBusinessAnalytics.tsx
'use client';

import React from 'react';
import Footer from '../Components/Footer'; // Ensure the path to Footer is correct

const PredictiveBusinessAnalytics = () => {
  return (
    <div className='text-gray-600'>
      {/* Title Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <h1 className="text-6xl font-bold my-4">Predictive Modeling and Analysis of Traffic Accidents</h1>
      </div>

      {/* Photo Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <img
          src="predictiveAnalyticsOverview.jpg" // Replace with your actual image path
          alt="Data Analysis Overview"
          style={{ width: '100%', height: 'auto' }}
        />
        <figcaption className="text-center mt-2">This is an overview of the STATS19 predictive modeling and road analysis project</figcaption>
      </div>

      {/* About the Project */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">About the Project</h2>
        <p>The project focuses on analyzing road accident data from 2019 in the UK to identify patterns and predictors of accident severity. The goal is to enhance public road safety by employing predictive analytics to determine the most effective models for predicting the severity of road accidents. Three datasets were utilized: Accidents, Vehicles, and Casualties, each providing unique insights into the conditions and outcomes of the incidents.</p>

        <h2 className="text-3xl font-bold my-4">Techniques and Steps</h2>
        <ul>
          <li className='py-3'><strong>1. Exploratory Data Analysis (EDA):</strong>
            <ul><li><strong>Vehicle Types: </strong>Analysis showed cars were most involved in accidents.</li>
              <li><strong>Light Conditions: </strong>Most accidents occurred in daylight, despite better visibility, likely due to higher traffic volumes.</li>
              <li><strong>Accident Severity: </strong>A higher occurrence of slight accidents was noted, highlighting the need for targeted safety measures.</li>
            </ul>
          </li>
          <li className='py-3'><strong>2. Data Cleaning:</strong> <ul><li>Creation of a binary target variable for accident severity.</li>
            <li>Simplification by removing unnecessary columns and rows with missing or invalid entries.</li>
            <li>Merging of the three datasets and further cleaning to ensure data integrity.</li>
          </ul>
          </li>
          <li className='py-3'><strong>3. Building Supervised Classification Models:</strong> <ul><li><strong>K-Nearest Neighbors (KNN): </strong>Two models were constructed using different sets of predictors, and their performance was evaluated through error rates.</li>
            <li><strong>Linear Discriminant Analysis (LDA): </strong>Two LDA models were built with varying predictors, assessed by their prediction accuracy.</li>
            <li><strong>Decision Tree: </strong>Employed similar predictors as LDA, with models tested and error rates calculated.
              Tools Used</li>

          </ul>
          </li>
        </ul>
        <p>The analysis utilized R programming language, specifically leveraging libraries such as ggvis, dplyr, and rpart. Data visualization was extensively used to illustrate findings, employing ggplot2 for graphical representation.</p>

        <h2 className="text-3xl font-bold my-4">Tools Used</h2>
        <p>The analysis utilized R programming language, specifically leveraging libraries such as ggvis, dplyr, and rpart. Data visualization was extensively used to illustrate findings, employing ggplot2 for graphical representation.</p>

        <h2 className="text-3xl font-bold my-4">Conclusion</h2>
        <p>The study assessed the performance of the KNN, LDA, and Decision Tree models. It was concluded that the LDA model demonstrated the most consistent and effective performance across different sets of variables, making it the preferred choice for predicting the severity of road accidents. The project underscores the potential of predictive analytics in enhancing traffic safety measures.</p>
      </div>

      {/* Additional Resources */}
<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <h2 className="text-3xl font-bold my-4">Additional Resources</h2>
  <ul className="list-none">
    <li className="mb-3">
      <a href="project-instruction.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold text-lg underline decoration-blue-500 hover:decoration-blue-300">
        Project Instruction PDF
      </a>
    </li>
    <li className="mb-3">
      <a href="project-presentation.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold text-lg underline decoration-blue-500 hover:decoration-blue-300">
        Project Presentation PDF
      </a>
    </li>
    <li className="mb-3">
      <a href="project-writeup.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold text-lg underline decoration-blue-500 hover:decoration-blue-300">
        Project Writeup PDF
      </a>
    </li>
  </ul>
</div>

      {/* GitHub Repository Link */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="text-lg font-bold text-gray-500">GitHub Repository: Private (Available upon request)</p>
      </div>

      {/* Copyright Footer */}
      <Footer />
    </div>
  );
};

export default PredictiveBusinessAnalytics;
