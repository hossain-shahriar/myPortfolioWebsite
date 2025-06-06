'use client'
import React, { useState } from 'react';

const Education = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Education</h3>

        {/* University of Alberta */}
        <div>
          <p className="font-semibold">University of Alberta – Class of 2026</p>
          <p>B.Sc. Computing Science (Specialization in Software Practice)</p>
          <p className='pb-5'>Terms completed: 6/8</p>
          {showMore && (
            <ul>
              <li><strong>Important Courses:</strong></li>
              <li>Predictive Business Analytics</li>
              <li>Operations Management</li>
              <li>Introduction to Machine Learning</li>
              <li>Reinforcement Learning Specialization</li>
              <li>Search and Planning in Artificial Intelligence</li>
              <li>File and Database Management (SQL & MongoDB)</li>
              <li>Software Process and Product Management</li>
              <li>Introduction to Software Engineering (Android Development)</li>
              <li>Computer Architecture I</li>
            </ul>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-600 hover:text-blue-800 hover:underline mt-2">
            {showMore ? 'See less' : 'See more'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  // Use state to manage which experience should show more details
  const [showMoreIndex, setShowMoreIndex] = useState<number | null>(null);

  // Dummy experiences data
  const experiences = [
    {
      company: 'Nutrien',
      title: 'Data Analytics Co-op',
      duration: 'Jan 2025 – Present',
      details: [
        "Analyze and visualize data using Excel, Power Query, Power BI, and SQL, connecting to SAP HANA cubes to extract real-time health, safety, procurement, and fleet data for reporting and strategic insights.",
        "Develop time series forecasting and risk prediction models in Python using AWS SageMaker, integrating MLOps workflows to automate model training, evaluation, and deployment.",
        "Apply DevOps practices to streamline data pipelines, improve workflow efficiency, and support continuous integration across internal systems involved in safety analytics and corporate operations.",
        "Work closely with cross-functional teams to ensure accurate data integration across multiple platforms, troubleshoot system connectivity issues, and deliver scalable dashboards and machine learning solutions aligned with business goals."
      ]
    },
    {
      company: 'SensiImage Technologies Ltd.',
      title: 'Software Developer Co-op',
      duration: 'May 2024 – Dec 2024',
      details: [
        "Managed and maintained the frontend and backend of the company's web application, leveraging cloud computing and DevOps practices, including infrastructure maintenance to ensure scalability and reliability.",
        "Developed and optimized the Graphical User Interface (GUI) for the HandCOMM display module, while troubleshooting software and hardware issues to ensure seamless product functionality and an intuitive user experience.",
        "Performed data cleaning, analysis, and visualization, and applied machine learning models for predictive analytics to drive data-driven decision-making and enhance overall product performance."
      ]
    },
    {
      company: 'Best Buy Canada',
      title: 'Tech Solutions Advisor & Omni-Channel Specialist',
      duration: 'May 2023 – Sep 2023',
      details: [
        "Enhanced customer understanding of product features and benefits, resulting in a 15% increase in customer purchase decisions.",
        "Developed and implemented targeted sales strategies that optimized product placements, improving visibility and engagement.",
        "Increased accessory upselling by an average of 30 additional units sold per month through strategic recommendations and personalized customer interactions.",
        "Managed multiple customer queries and improved service quality by introducing omni-channel support strategies."
      ]
    },
    {
      company: 'The City Bank Limited',
      title: 'IT-Support Intern',
      duration: 'May 2022 – August 2022',
      details: [
        'Built 30+ custom computers for optimal client performance and satisfaction.',
        'Resolved over 100 networking issues using AnyDesk, improving system reliability and connectivity.',
        'Handled technical support tasks including maintenance and troubleshooting of network issues, leading to a significant decrease in downtime and disruption.'
      ]
    },
    {
      company: 'University of Alberta, Residence Services',
      title: 'Resident Assistant',
      duration: 'Sep 2021 – April 2022',
      details: [
        'Promoted equity, diversity, and inclusivity through weekly meetings and group activities.',
        'Responded to student issues and safety concerns, including lockouts, alcohol overdose, first aid, and after-hour services.',
        'Coordinated events and programs to foster a supportive community environment.',
        'Implemented crisis management protocols to ensure student safety and wellbeing.'
      ]
    },
  ];


  return (
    <div className="mb-6">
      <h3 className="text-2xl font-bold mb-4">Experiences</h3>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`mb-4 p-2 rounded-lg ${showMoreIndex === index ? 'bg-gray-100' : ''}`}
          onClick={() => setShowMoreIndex(showMoreIndex === index ? null : index)}
          style={{ cursor: 'pointer' }}
        >
          <p className="font-semibold flex justify-between items-center">
            {exp.company}
          </p>
          <p>{exp.title}</p>
          <p>{exp.duration}</p>
          {showMoreIndex === index && (
            <>
              <ul className="pt-5 list-disc pl-5 mb-2">
                {exp.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              <p className="pt-5 text-sm text-blue-500 hover:text-blue-700 cursor-pointer">Click to view less</p>
            </>
          )}
          {showMoreIndex !== index && (
            <p className="pt-5 text-sm text-blue-500 hover:text-blue-700 cursor-pointer">Click to view more</p>
          )}
        </div>
      ))}
    </div>
  );
};


const Skills = () => {
  // Skills data structured by category
  const skillsCategories = {
    "Academic Expertise": [
      "Software Development", "Data Analysis", "Data Science", "Machine Learning",
      "Artificial Intelligence"
    ],
    "Tools and Software": [
      "Office 365", "Power BI", "Tableau", "Linux", "Android Studio", "iOS", "Visual Studio Code",
      "Git", "GitHub", "GitLab", "Raspberry Pi", "Figma", "Lucidchart",
      "Adobe Creative Cloud (Illustrator, Photoshop)", "Jupyter Notebook"
    ],
    "Programming Languages": [
      "SQL", "MongoDB", "Python (Django, Flask, scikit-learn, tensorflow, numpy, pandas, matplotlib, seaborn, pyqt, tkinter)",
      "JavaScript (React.js, Next.js, Node.js, Tailwind CSS)", "TypeScript", "C", "C++", "C#",
      "Java", "HTML", "CSS", "R (dplyr, tidyr, ggplot2, tensorflow, rpart, tidyverse, randomForest)",
      "Lisp", "Prolog", "Assembly (RARS RISC-V)", "Julia"
    ],
    "Cloud Platforms and DevOps": [
      "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins",
      "Travis CI", "GitHub Actions"
    ],
    "Language": [
      "English", "French", "Bangla", "Hindi", "Urdu"
    ]
  };

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4">Skills</h3>
      {Object.entries(skillsCategories).map(([category, skills], index) => (
        <div key={index} className="mb-4">
          <h4 className="font-semibold mb-2">{category}</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="px-3 py-1 bg-gray-200 rounded-md text-xs font-medium hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  return (
    <div id="about" className="container mx-auto px-11 sm:px-6 lg:px-8 pt-40 pb-16">
      <div className="text-center mb-32">
        <h2 className="text-4xl font-bold inline-block px-4">
          About Me
          <div className="border-t-2 border-gray-400 w-full mt-2" />
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:w-1/2 lg:pr-4">
          <Experiences />
        </div>
        <div className="lg:w-1/2 lg:pl-4">
          <Education />
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;
