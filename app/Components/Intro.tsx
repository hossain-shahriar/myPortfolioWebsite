import React from 'react';

const Intro = () => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center justify-between px-10 pt-20">
      {/* Profile picture section */}
      <div className='mx-10'>
        <img src="/profile.jpg" alt="Profile" className="rounded-lg shadow-2xl" />
      </div>

      {/* Introduction text section */}
      <div className="mb-10 md:mb-0">
        <h1 className="my-10 text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-600">
          Hello, I'm Shahriar.
        </h1>
        <p className="my-10 mt-4 text-base md:text-lg text-gray-600 dark:text-gray-500">
I am a <b>final-year Computing Science student specializing in Software Practice</b> with a strong research interest in <b>Natural Language Processing (NLP)</b>, <b>Large Language Models (LLMs)</b>, <b>Computational Semantics</b>, <b>Artificial Intelligence</b>, and <b>Machine Learning</b>. As a <b>Teaching Assistant in the Computing Science Department at the University of Alberta</b>, I mentor teams on requirements, architecture, Agile practices, and rigorous evaluation, which informs my approach to empirical research and reproducible ML. My recent work spans <b>data analytics</b>, <b>cloud computing</b>, and <b>DevOps/MLOps</b> for end-to-end model development and deployment. I actively participate in hackathons and have earned multiple <b>hackathon wins</b>, collaborating under tight timelines to prototype language-centric systems and applied AI solutions. I am eager to contribute to research that advances language understanding, responsible LLMs, and real-world NLP applications.</p>
        <div className="flex mt-8 space-x-8">
          <a href="/cv_Mohammad_Shahriar_Hossain.pdf" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Curriculum vitae (CV)
          </a>
          <a href="https://www.linkedin.com/in/mohammad-shahriar-hossain/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://github.com/hossain-shahriar" target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
