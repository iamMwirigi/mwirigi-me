import React from 'react';
import Logo from './Assets/about-pic.png';

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        
        {/* Text section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
  Jambo, I'm Mwirigi.
  <span className="block mt-4">A Software Engineer.</span>
</h1>


          <p className="mb-7 leading-relaxed font-semibold">
I’m a self-motivated, passionate, and certified software engineer. As a developer, I love building systems that actually work in real life — fast, secure, scalable, and reliable. My work focuses on solving real business problems by creating solutions that save time, increase revenue, improve customer experience, and scale as the business grows.
          </p>

          {/* Buttons */}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 ease-in-out md:py-2 md:px-6 md:text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 ease-in-out md:py-2 md:px-6 md:text-lg">
              See My Past Work
            </a>
              <a
              href="#pricing"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-200 ease-in-out md:py-2 md:px-6 md:text-lg">
              View My Pricing
            </a>
          </div>
        </div>

        {/* Image section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded w-64 ml-auto"
            alt="about"
            src={Logo}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
