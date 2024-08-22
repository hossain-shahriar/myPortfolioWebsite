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
          Shahriar is a fourth-year undergraduate student in Computing Science with a strong focus on data analytics, data science, and machine learning, actively seeking internships that challenge and expand his technical expertise. His strong command of SQL enables him to maintain high standards of data quality and prepare datasets for complex analyses. Skilled in Python, Shahriar adeptly employs a variety of tools to enhance data processing, visualization, and predictive analytics, showcasing flexibility and creativity in his approach to tackling data-driven problems. 
          <br> In addition to his data-focused capabilities, Shahriar possesses a solid foundation in Full Stack development, with proficiency in technologies such as React, Next.js, JavaScript, TailwindCSS, and NextAuth.js. His experience with back-end technologies like Express.js, MongoDB, Mongoose, Redis, Bcrypt.js, and JWT further complements his skill set, enabling him to build comprehensive, secure, and efficient web applications.
          <br> Shahriar's technical foundation is enriched by practical experience in software development, with a particular emphasis on implementing robust solutions in varied environments, including Android platforms and web applications. His methodical approach to project management and version control, honed through multiple team projects, ensures he operates effectively in collaborative, fast-paced settings, always aligned with project timelines and quality benchmarks.
          <br> By focusing on practical applications and continuous learning, Shahriar is prepared to contribute effectively to your data science, business analytics, or Full Stack development teams, bringing both technical acumen and a dynamic approach to problem-solving.
        </p>
        <div className="flex mt-8 space-x-8">
          <a href="/resume_Mohammad-Shahriar-Hossain.pdf" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
