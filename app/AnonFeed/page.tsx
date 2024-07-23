// AnonFeed.tsx
'use client';

import React from 'react';
import Footer from '../Components/Footer'; // Assuming Footer.tsx is in the same directory

const AnonFeed = () => {
  return (
    <div className='text-gray-600'>
      {/* Title Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <h1 className="text-6xl font-bold my-4">Interactive Social Media Dashboard with Next.js</h1>
      </div>

      {/* Photo Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <img
          src="anonfeed.png" // Replace with your image path
          alt="Descriptive alt text"
          style={{ width: '100%', height: 'auto' }}
        />
        <figcaption className="text-center mt-2">This is a screenshot of the User Dashboard.</figcaption>
      </div>

      {/* About the Project */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">About the Project</h2>
        <p>The Next.js Full-Stack Social Media Application is designed to provide a seamless and interactive user experience. Leveraging the power of Next.js for server-side rendering and static site generation, this application offers robust features such as user authentication, profile management, CRUD operations, and RESTful APIs. The project integrates various tools and technologies to ensure a smooth and efficient user experience.</p>
      </div>

      {/* Project Components */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Project Components</h2>
        <p><strong>User Authentication and Authorization:</strong> Implemented using NextAuth.js to provide secure login and registration functionalities, ensuring user data is protected and access is managed efficiently.</p>
        <p><strong>Profile Management:</strong> Users can update their profile information, including profile and cover photos, which are uploaded and stored using Cloudinary.</p>
        <p><strong>CRUD Operations:</strong> Comprehensive Create, Read, Update, and Delete functionalities are implemented for user posts and comments, ensuring a full spectrum of data management capabilities.</p>
        <p><strong>RESTful APIs:</strong> Robust RESTful APIs facilitate seamless interaction between the frontend and backend, ensuring efficient data retrieval and manipulation.</p>
        <p><strong>Real-Time Feed Updates:</strong> The application allows users to post updates, comment on posts, and interact with other users in real-time, providing a dynamic social media experience.</p>
        <p><strong>Comment Functionalities:</strong> Users can add comments to posts, enhancing interaction and engagement within the platform.</p>
        <p><strong>Data Management:</strong> MongoDB and Mongoose are used for database management, ensuring efficient data storage and retrieval.</p>
        <p><strong>Responsive Design:</strong> Tailwind CSS is utilized to create a responsive and visually appealing interface that adapts to various screen sizes and devices.</p>
      </div>

      {/* Using the Application */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Using the Application</h2>
        <p><strong>Accessing the Application:</strong> Users can sign up or log in using their credentials. Once authenticated, they can explore the social media feed, post updates, and interact with other users.</p>
        <p><strong>Managing Profiles:</strong> Users can update their profile information and upload new profile and cover photos through a user-friendly interface.</p>
        <p><strong>Posting and Commenting:</strong> The application allows users to post updates and comments, fostering an engaging social media environment.</p>
      </div>

      {/* Tools and Techniques */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold my-4">Tools and Techniques Used</h2>
        <p><strong>Next.js:</strong> Leveraged for its server-side rendering and static site generation capabilities, ensuring a fast and efficient user experience.</p>
        <p><strong>TypeScript:</strong> Used to provide type safety and enhance code maintainability.</p>
        <p><strong>MongoDB and Mongoose:</strong> Employed for robust data management and efficient database operations.</p>
        <p><strong>Tailwind CSS:</strong> Utilized for creating a responsive and visually appealing user interface.</p>
        <p><strong>NextAuth.js:</strong> Integrated for secure and efficient user authentication and authorization.</p>
        <p><strong>Cloudinary:</strong> Used for managing and storing user-uploaded images efficiently.</p>
      </div>

      {/* GitHub Repository Link */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <a href="https://github.com/hossain-shahriar/DataCleaningAnalysisVisualization" className="text-lg font-bold text-gray-500 hover:text-blue-800 py-2 px-4 rounded border border-gray-500 hover:border-gray-700 transition-all duration-300">
          Visit the GitHub Repository
        </a>
      </div> */}

      {/* Social Media Website Link */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <a href="https://anonfeed.vercel.app" className="text-lg font-bold text-gray-500 hover:text-blue-800 py-2 px-4 rounded border border-gray-500 hover:border-gray-700 transition-all duration-300">
          Visit the Social Media Website
        </a>
      </div>

      {/* Copyright Footer */}
      <Footer />
    </div>
  );
};

export default AnonFeed;
