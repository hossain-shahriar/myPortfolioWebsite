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
I am an <b>M.Sc. Computing Science thesis student at the University of Alberta</b> researching <b>Natural Language Processing (NLP)</b> and <b>Large Language Models (LLMs)</b> with a focus on contextual and semantic understanding, affective language, figurative language, polarization in text, and explainable AI. As a <b>Graduate Research Assistant under Dr. Osmar R. Zaiane</b>, I contribute to NLP and LLM research including the MIRA chatbot project through literature review, experimentation, implementation, and evaluation. My background combines <b>software engineering</b>, <b>data analytics</b>, <b>machine learning</b>, <b>cloud computing</b>, and <b>MLOps</b>, shaped by research projects, industry co-ops, teaching, and hackathon work. I am interested in building reliable language technologies that better explain model behavior and improve real-world language understanding.</p>
        <div className="flex mt-8 space-x-8">
          <a href="/Hossain_Mohammad_Shahriar_CV.pdf" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
