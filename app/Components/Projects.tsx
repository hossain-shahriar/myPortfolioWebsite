import React from 'react';

type PdfLink = {
  label: string;
  href: string;
};

type ProjectProps = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  readMoreLink?: string;
  repoLink?: string;
  pdfLinks?: PdfLink[];
  index: number;
};

const Project: React.FC<ProjectProps> = ({
  slug,
  title,
  description,
  technologies,
  image,
  readMoreLink,
  repoLink,
  pdfLinks,
  index,
}) => (
  <div
    id={slug}
    className={`flex flex-col md:flex-row items-center justify-between py-10 ${
      index % 2 === 0 ? 'md:flex-row-reverse' : ''
    }`}
  >
    {/* Project Image */}
    <div className="flex justify-center md:w-1/2 px-10">
      <img
        src={image}
        alt={title}
        className="max-w-xs md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-xl"
      />
    </div>

    {/* Textual Content */}
    <div className="md:w-1/2 px-10 py-11">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-800 mb-4 py-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4 py-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 rounded-md text-xs font-medium hover:bg-red-600 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        {pdfLinks &&
          pdfLinks.map((pdf, i) => (
            <a
              key={i}
              href={pdf.href}
              className="inline-flex items-center bg-gray-300 text-black hover:bg-gray-400 font-bold py-2 px-4 rounded transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              {pdf.label}
            </a>
          ))}

        {readMoreLink && (
          <a
            href={readMoreLink}
            className="text-blue-600 hover:underline inline-flex items-center font-bold py-3"
          >
            Read More →
          </a>
        )}

        {repoLink && (
          <a
            href={repoLink}
            className="inline-flex items-center bg-gray-300 text-black hover:bg-gray-400 font-bold py-2 px-4 rounded transition-colors duration-300 w-28"
          >
            <img src="/github.png" alt="GitHub" className="h-5 w-5 mr-2" />
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectsData: Omit<ProjectProps, 'index'>[] = [
    // Academic projects (on top)

    {
      slug: 'sense-aware-multilingual-polarization-detection',
      title: 'Sense Aware Multilingual Polarization Detection',
      description:
        'Sense aware multilingual model that detects online polarization and its type, comparing encoder only BERT models and multilingual LLMs with sense information.',
      technologies: [
        'Multilingual encoder only BERT model',
        'Multilingual LLM',
        'WSD',
        'Polarization detection',
      ],
      image: '/POLAR.png',
      pdfLinks: [
        {
          label: 'Project Proposal',
          href: '/mhossai6_ekamjot2_proposal.pdf',
        },
      ],
      readMoreLink: undefined,
      repoLink: undefined,
    },
    {
      slug: 'cross-lingual-sense-projection-bengali',
      title: 'Cross Lingual Sense Projection for Bengali',
      description:
        'Cross lingual sense projection pipeline from English to Bengali using WSD, machine translation, alignment, and staged filters to improve coverage and precision of sense annotations.',
      technologies: ['WSD', 'MT', 'Alignment', 'LLM filtering'],
      image: '/senseProjection.png',
      pdfLinks: [
        {
          label: 'Report A1',
          href: '/Asn1-bn5.pdf',
        },
        {
          label: 'Report A2',
          href: '/Asn2-bn5.pdf',
        },
      ],
      readMoreLink: undefined,
      repoLink: undefined,
    },
    {
      slug: 'idiom-idiomaticity-detection',
      title: 'Idiom Idiomaticity Detection (SemEval 2022 Task 2)',
      description:
        'Project on figurative language that compares a multilingual encoder only BERT model and a multilingual LLM on idiomatic vs literal usage across languages.',
      technologies: [
        'Multilingual encoder only BERT model',
        'Multilingual LLM',
        'Figurative language',
        'Evaluation pipeline',
      ],
      image: '/semeval-2022-task2.png',
      pdfLinks: [
        {
          label: 'Milestone Report',
          href: '/INTD461-milestone2.pdf',
        },
        {
          label: 'Literature Review',
          href: '/INTD461-literature-review.pdf',
        },
        {
          label: 'Informational Interview',
          href: '/INTD461-informational-interview.pdf',
        },
      ],
      readMoreLink: undefined,
      repoLink: undefined,
    },

    // Existing projects

    {
      slug: 'oxygen-chronic-illness-management-app',
      title: 'Oxygen: Chronic Illness Management App',
      description:
        'A cross platform app designed to support patients and caregivers in managing chronic health conditions. Key features include symptom and appointment tracking, a medical wallet, AI driven insights, and caregiver access.',
      technologies: [
        'React Native',
        'TypeScript',
        'Expo',
        'Tailwind CSS',
        'AI Integration',
      ],
      image: '/oxygenApp.gif',
      readMoreLink: 'OxygenApp',
      repoLink: '#',
    },
    {
      slug: 'edmonton-housing-data-cleaning-analysis-visualization',
      title: 'Edmonton Housing Data Cleaning, Analysis & Visualization',
      description:
        'Data cleaning, analysis, and visualization of Edmonton housing data using SQL, Pandas, and Microsoft Power BI.',
      technologies: ['SQL', 'Power BI', 'Python', 'Pandas', 'numpy', 'Matplotlib'],
      image: '/edmontonHousing.gif',
      readMoreLink: 'EdmontonHousing',
      repoLink:
        'https://github.com/hossain-shahriar/DataCleaningAnalysisVisualization',
    },
    {
      slug: 'predictive-modeling-and-analysis-of-traffic-accidents',
      title: 'Predictive Modeling and Analysis of Traffic Accidents',
      description:
        'Business analytics project on personal injury road accidents to find key factors and predict injury severity using models such as KNN, LDA, and Random Forest.',
      technologies: [
        'R Programming (ggplot2, ggvis, dplyr, rpart, tidyr, randomForest, stringr, caret)',
        'Exploratory data analysis (EDA)',
        'KNN',
        'LDA',
        'Decision Tree',
      ],
      image: '/predictiveAnalytics.gif',
      readMoreLink: 'PredictiveBusinessAnalytics',
      repoLink: '#',
    },
    {
      slug: 'nextjs-full-stack-social-media-application',
      title: 'Next.js Full Stack Social Media Application',
      description:
        'Full stack social media application using Next.js with user authentication, profile management, CRUD operations, and RESTful APIs for real time feed updates and comments.',
      technologies: [
        'Next.js',
        'TypeScript',
        'MongoDB',
        'Mongoose',
        'Tailwind CSS',
        'Axios',
        'Cloudinary',
        'NextAuth.js',
      ],
      image: '/anonfeed.gif',
      readMoreLink: 'AnonFeed',
      repoLink: '#',
    },
    {
      slug: 'machine-learning-concepts',
      title: 'Machine Learning Concepts',
      description:
        'Collection of small projects that demonstrate basic concepts used in machine learning and data science.',
      technologies: ['Python', 'Scikit-learn', 'Jupyter Notebook'],
      image: '/machineLearningConcepts.gif',
      readMoreLink: 'MachineLearningConcepts',
      repoLink: 'https://github.com/hossain-shahriar/MachineLearningConcepts',
    },
    {
      slug: 'sorting-visualizer',
      title: 'Sorting Visualizer',
      description:
        'RISC V RARS assembly program that sorts a given array and visualizes it in GLIR (Graphics Library for RISC V).',
      technologies: ['RARS RISC-V', 'GLIR', 'Insertion Sort'],
      image: '/sorting.gif',
      readMoreLink: 'SortingVisualizer',
      repoLink: '#',
    },
    {
      slug: 'ux-and-graphic-design',
      title: 'UX and Graphic Design',
      description:
        'Portfolio that shows the UX design of an Android Studio project and a set of graphic design works.',
      technologies: [
        'Figma',
        'Adobe Illustrator',
        'Photoshop',
        'Lucidchart',
        'Adobe XD',
      ],
      image: '/ux-design.gif',
      readMoreLink: 'DesignPortfolio',
      repoLink: '#',
    },
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
};

export default Projects;
