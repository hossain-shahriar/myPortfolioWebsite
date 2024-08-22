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
  Shahriar is a fourth-year undergraduate student in Computing Science with a strong focus on <b>data analytics</b>, <b>data science</b>, and <b>machine learning</b>. He is actively seeking internships to expand his technical expertise. Proficient in <b>SQL</b> for maintaining data quality and preparing datasets, Shahriar is skilled in <b>Python</b> for data processing, visualization, and predictive analytics. His experience includes technologies like <b>React</b>, <b>Next.js</b>, <b>JavaScript</b>, <b>TailwindCSS</b>, <b>NextAuth.js</b>, and back-end technologies such as <b>Express.js</b>, <b>MongoDB</b>, <b>Mongoose</b>, <b>Redis</b>, <b>Bcrypt.js</b>, and <b>JWT</b>. Shahriar also has practical experience with <b>Android development</b> and project management, demonstrating a methodical approach to collaborative, fast-paced projects and adherence to quality benchmarks. He is committed to continuous learning and ready to contribute to data science, business analytics, or Full Stack development teams with his technical skills and dynamic problem-solving approach.
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
