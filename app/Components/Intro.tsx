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
          Hello!👋 I'm a third-year Computing Science undergrad specializing in software practice, deeply interested in data analytics and machine learning. I'm actively seeking an internship to contribute to dynamic teams and implement data-driven solutions. Proficient in SQL, Python (Pandas, Matplotlib, scikit-learn), and experienced in Agile methodologies and version control systems like GitHub. Let's innovate together with data-driven strategies!
        </p>
        <div className="flex mt-8 space-x-8">
          <a href="/resume.pdf" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Resume
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
