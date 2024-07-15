import React from 'react';
import { projectOne, projectTwo, projectThree } from './Assets/data';

function Projects() {
  const projects = [projectOne, projectTwo, projectThree];

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects I've worked on:
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.id} className="p-4 md:w-1/3">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.name}
                </h2>
                <p className="leading-relaxed mb-3">{project.description}</p>
                <p className="text-gray-500 text-xs mb-2">
                  Technologies: {project.technologies.join(', ')}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 inline-flex items-center"
                >
                  View Project
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
