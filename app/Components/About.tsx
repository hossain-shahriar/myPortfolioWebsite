'use client'
import React, { useState } from 'react';

const Education = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Education</h3>

        <div>
          <p className="font-semibold">University of Alberta</p>
          <p>M.Sc. Computing Science (Thesis)</p>
          <p>Sep 2026 - Present</p>
          <p className="pb-5">Supervisor: Dr. Osmar R. Zaiane</p>
        </div>

        <div>
          <p className="font-semibold">University of Alberta</p>
          <p>B.Sc. Computing Science (Specialization in Software Practice)</p>
          <p className='pb-5'>Sep 2021 - Jun 2026</p>
          {showMore && (
            <ul>
              <li><strong>Relevant Coursework:</strong></li>
              <li>Advanced Algorithms</li>
              <li>Computational Semantics</li>
              <li>Artificial Intelligence Capstone</li>
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
      company: 'University of Alberta',
      title: 'Graduate Research Assistant - Department of Computing Science',
      duration: 'Sep 2026 - Present',
      details: [
        'Conduct research in natural language processing and large language models under the supervision of Dr. Osmar R. Zaiane, focusing on language understanding, explainability, and reliable AI systems.',
        'Contribute to the MIRA chatbot research project through literature review, experimentation, implementation, and evaluation of NLP and LLM-based approaches.'
      ]
    },
    {
      company: 'University of Alberta',
      title: 'Undergraduate Teaching Assistant - Department of Computing Science',
      duration: 'Sep 2025 - Present',
      details: [
        'Mentor student teams on Agile and Scrum, lead labs and workshops, and help plan and deliver software projects in a collaborative setting.',
        'Review Git/GitHub work with code reviews, testing, and peer feedback, and support clear communication through stand-ups, sprint reviews, and client meetings.'
      ]
    },
    {
      company: 'Nutrien',
      title: 'Data Analytics Co-op',
      duration: 'Jan 2025 - Present',
      details: [
        "Analyze and visualize health, safety, procurement, and fleet data using Excel, Power Query, Power BI, SQL, and SAP HANA to build reports and dashboards for decision makers.",
        "Build time series and risk prediction models in Python on AWS SageMaker and work with cross-functional teams to improve data pipelines, automate workflows, and align machine learning solutions with business needs."
      ]
    },
    {
      company: 'SensiImage Technologies Ltd.',
      title: 'Software Developer Co-op',
      duration: 'May 2024 - Dec 2024',
      details: [
        "Maintained and extended the company web application across frontend and backend, using cloud infrastructure and DevOps practices to keep the product stable and responsive.",
        "Designed and refined the display module interface and used data cleaning, analysis, and predictive models to improve product performance and user experience."
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
    "Research and Academic Expertise": [
      "Natural Language Processing", "Large Language Models", "Computational Semantics",
      "Word Sense Disambiguation", "Figurative Language Understanding", "Affective Language Understanding",
      "Text Polarization Analysis", "Explainable AI", "Machine Learning", "Reliable AI Systems"
    ],
    "Data, Analytics, and ML Tools": [
      "Power BI", "Power Query", "Excel", "SQL", "SAP HANA", "Tableau",
      "Jupyter Notebook", "AWS SageMaker", "scikit-learn", "TensorFlow",
      "pandas", "NumPy", "matplotlib", "seaborn"
    ],
    "Programming Languages": [
      "Python", "JavaScript", "TypeScript", "SQL", "MongoDB", "R",
      "Java", "C", "C++", "C#", "HTML", "CSS", "Lisp", "Prolog",
      "Assembly (RARS RISC-V)", "Julia"
    ],
    "Software Development": [
      "React.js", "Next.js", "Node.js", "Tailwind CSS", "Django", "Flask",
      "React Native", "Expo", "Android Studio", "Git", "GitHub", "GitLab",
      "Code Review", "Testing", "Agile", "Scrum"
    ],
    "Cloud Platforms and DevOps": [
      "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins",
      "Travis CI", "GitHub Actions", "MLOps"
    ],
    "Design and Productivity": [
      "Office 365", "Linux", "iOS", "Visual Studio Code", "Raspberry Pi",
      "Figma", "Lucidchart", "Adobe Illustrator", "Adobe Photoshop"
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
