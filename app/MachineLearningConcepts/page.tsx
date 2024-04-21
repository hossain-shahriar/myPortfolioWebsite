// MachineLearningConcepts.tsx
'use client';

import React from 'react';
import Footer from '../Components/Footer'; // Assuming Footer.tsx is in the same directory

const MachineLearningConcepts = () => {
  return (
    <div className='text-gray-600'>
      {/* Title Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <h1 className="text-6xl font-bold my-4">Machine Learning Concepts</h1>
      </div>

      {/* Photo Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <img
          src="machineLearningScreenshot.png" // Make sure the path is correct
          alt="Screenshot of gradient descent code in jupyter notebook"
          style={{ width: '100%', height: 'auto' }}
        />
        <figcaption className="text-center mt-2">This is a screenshot of gradient descent code in jupyter notebook.</figcaption>
      </div>

      {/* About the Collection */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">About the Collection</h2>
        <p>This collection is a comprehensive exhibit of machine learning concepts, showcasing a range of algorithms and techniques fundamental to the field. Each file within this repository represents a key concept, from data preprocessing to complex predictive modeling.</p>
      </div>

      {/* Concepts Overview */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Concepts Overview</h2>
        <ul>
          <li>Decision Trees: Visualizing decision-making processes.</li>
          <li>Dummy Variables & One Hot Encoding: Techniques for categorical data representation.</li>
          <li>Gradient Descent: An optimization algorithm for learning.</li>
          <li>Logistic Regression: A statistical method for binary classification.</li>
          <li>Train Test Split: Methodology for model validation.</li>
        </ul>
      </div>

      {/* Learning Outcomes */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Learning Outcomes</h2>
        <p>Understanding these concepts will provide a solid foundation for anyone interested in applying machine learning algorithms to real-world problems. By exploring these examples, learners can grasp the intricacies of model training, selection, and evaluation.</p>
      </div>

      {/* Tools and Techniques Used */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Tools and Techniques Used</h2>
        <ul>
          <li>Python: The primary programming language for demonstrating the concepts.</li>
          <li>Scikit-learn: A machine learning library for Python used in these examples.</li>
          <li>Jupyter Notebooks: Interactive coding environment where the concepts are illustrated.</li>
        </ul>
      </div>

      {/* GitHub Repository Link */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <a href="https://github.com/hossain-shahriar/MachineLearningConcepts" className="text-lg font-bold text-gray-500 hover:text-blue-800 py-2 px-4 rounded border border-gray-500 hover:border-gray-700 transition-all duration-300">
          Visit the GitHub Repository
        </a>
      </div>

      {/* Copyright Footer */}
      <Footer />
    </div>
  );
};

export default MachineLearningConcepts;
