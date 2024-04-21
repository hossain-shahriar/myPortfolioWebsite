// SortingVisualizer.tsx
'use client';

import React from 'react';
import Footer from '../Components/Footer'; // Assuming Footer.tsx is in the same directory

const SortingVisualizer = () => {
  return (
    <div className='text-gray-600'>
      {/* Title Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <h1 className="text-6xl font-bold my-4">Sorting Visualizer in RARS RISC-V</h1>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/OrVzU33CD5o"
          title="Sorting Visualizer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* About the Project */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">About the Project</h2>
        <p>This project offers an engaging and educational experience for those interested in understanding the mechanics of the insertion sort algorithm, a fundamental sorting technique with a complexity of O(n^2). At its core, the project uses RARS RISC-V Assembly programming and GLIR to provide a visual representation of the sorting process. The visualization vividly displays the sorting of an array in ascending order, making it an excellent tool for educational purposes.</p>
        <p>For a deeper exploration, you're invited to clone the repository and explore the "webpage" folder, where the complete functionality of the lab, including detailed explanations and interactive elements, is available through an HTML interface.</p>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Features</h2>
        <ul>
          <li>Interactive Sorting Visualization: Demonstrates how insertion sort operates in a clear, visual manner.</li>
          <li>Adjustable Speed Control: Allows users to speed up or slow down the sorting process, aiding in a more tailored understanding of each step.</li>
          <li>Color-Coded Elements: Elements currently being sorted are highlighted in blue, positive elements in green, and negative elements in red, offering an intuitive grasp of their statuses during the sorting process.</li>
        </ul>
      </div>

      {/* Running the App/Program */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Running the App/Program</h2>
        <p><strong>Clone the Repository:</strong> Begin by cloning the repository to your local machine.</p>
        <p><strong>Navigate to the 'Code' Folder:</strong> Once cloned, access the "code" folder within the repository.</p>
        <p><strong>Running the Program:</strong> Windows: Open Git Bash and execute <code>java -jar rars1_6.jar visualizer.s</code>. Mac: Open Terminal and run <code>rars1_6 visualizer.s</code>.</p>
        <p><strong>Customizing the Array:</strong> To alter the array being sorted, edit the .data section in visualizer.s, setting the array and its length as desired.</p>
        <p><strong>Modifying the Sorting Speed:</strong> Slow down the sorting process by editing the visualizer function in visualizer.s. Add a sleep ecall before every call to the draw function. An example of the sleep ecall is provided in the function.</p>
      </div>

      {/* Tools/Methods Used */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Tools/Methods Used</h2>
        <ul>
          <li>RARS RISC-V Assembly Programming: Utilized for implementing the sorting algorithm and driving the core functionality.</li>
          <li>GLIR: Employed to create the visual representation of the sorting process.</li>
          <li>Insertion Sort Algorithm (O(n^2)): A simple yet effective sorting algorithm, chosen for its educational value in understanding sorting mechanics.</li>
        </ul>
        <p className='pt-5'><strong>GitHub Repository: Private (Available upon request)</strong></p>
      </div>

      {/* Copyright Footer */}
      <Footer />
    </div>
  );
};

export default SortingVisualizer;
