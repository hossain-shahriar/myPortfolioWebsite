import React from 'react';

type ProjectProps = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  readMoreLink: string;
  repoLink: string;
  index: number;
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  image,
  readMoreLink,
  repoLink,
  index,
}) => (
  <div className={`flex flex-col md:flex-row items-center justify-between py-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
    {/* Project Image */}
    <div className="flex justify-center md:w-1/2 px-10">
      <img src={image} alt={title} className="max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-xl" />
    </div>
    {/* Textual Content */}
    <div className="md:w-1/2 px-10 py-11">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-800 mb-4 py-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4 py-3">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 rounded-md text-xs font-medium hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <a href={readMoreLink} className="text-blue-600 hover:underline inline-flex items-center font-bold py-3">
          Read More →
        </a>
        <a href={repoLink} className="inline-flex items-center bg-gray-300 text-black hover:bg-gray-400 font-bold py-2 px-4 rounded transition-colors duration-300 w-28">
          <img src="/github.png" alt="GitHub" className="h-5 w-5 mr-2" />
          GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectsData = [
    // Populate with your projects
    {
      title: "Oxygen: Chronic Illness Management App",
      description: "A cross-platform app designed to support patients and caregivers in managing chronic health conditions. Key features include symptom and appointment tracking, a medical wallet, AI-driven insights, and caregiver access.",
      technologies: ["React Native", "TypeScript", "Expo", "Tailwind CSS", "AI Integration"],
      image: "/oxygenApp.gif", // Replace with the correct image path
      readMoreLink: "OxygenApp", // Replace with the correct link for "Read More"
      repoLink: "#", // Replace with the actual GitHub repo link
    },
    {
      title: "Edmonton Housing Data Cleaning, Analysis & Visualization",
      description: "This project shows data cleaning, analysis and visualization using SQL, Pandas and Microsoft Power BI",
      technologies: ["SQL", "Power BI", "Python", "Pandas", "numpy", "Matplotlib"],
      image: "/edmontonHousing.gif",
      readMoreLink: "EdmontonHousing",
      repoLink: "https://github.com/hossain-shahriar/DataCleaningAnalysisVisualization",
    },
    {
      title: "Predictive Modeling and Analysis of Traffic Accidents",
      description: "This business analytics project analyzes personal injury road accidents to identify key factors and predict injury severity. Using data-driven models like KNN, LDA, and Random Forest, it demonstrates how analytics can enhance road safety and traffic management.",
      technologies: ["R Programming (ggplot2, ggvis, dplyr, rpart, tidyr, randomForest, stringr, caret)", "Exploratory data analysis (EDA)", "KNN", "LDA", "Decision Tree"],
      image: "/predictiveAnalytics.gif",
      readMoreLink: "PredictiveBusinessAnalytics",
      repoLink: "#",
    },
    {
      title: "Next.js Full-Stack Social Media Application",
      description: "This project involves the development of a full-stack social media application using Next.js, featuring user authentication, profile management, CRUD operations, and RESTful APIs for seamless data interaction and real-time feed updates with comment functionalities.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS", "Axios", "Cloudinary", "NextAuth.js"],
      image: "/anonfeed.gif",
      readMoreLink: "AnonFeed",
      repoLink: "#",
    },
    {
      title: "Machine Learning Concepts",
      description: "This project shows some basic concepts that are used in Machine Learning/Data Science",
      technologies: ["Python", "Scikit-learn", "Jupyter Notebook"],
      image: "/machineLearningConcepts.gif",
      readMoreLink: "MachineLearningConcepts",
      repoLink: "https://github.com/hossain-shahriar/MachineLearningConcepts",
    },
    {
      title: "Sorting Visualizer",
      description: "This RISC-V RARS assembly program sorts a given array and visualize it in GLIR (Graphics LIbrary for RISC-V)",
      technologies: ["RARS RISC-V", "GLIR", "Insertion Sort"],
      image: "/sorting.gif",
      readMoreLink: "SortingVisualizer",
      repoLink: "#",
    },
    {
      title: "UX and Graphic Design",
      description: "This project showcases the UX design of my Android Studio project along with some of my graphic designs",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop", "Lucidchat", "Adobe XD"],
      image: "/ux-design.gif",
      readMoreLink: "DesignPortfolio",
      repoLink: "#",
    },
    // Additional projects...
  ];

  return (
    <section id="projects" className="container mx-auto sm:px-6 lg:px-8 pt-40">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold inline-block px-4">
          Projects
          <div className="border-t-2 border-gray-400 w-full mt-2" />
        </h2>
      </div>
      {projectsData.map((project, index) => (
        <Project key={index} index={index} {...project} />
      ))}
      
    </section>
  );
}
export default Projects;
