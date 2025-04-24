import React from "react";

const projects = [
  {
    title: "Safety Course",
    description:
      "This project focuses on developing an interactive and comprehensive safety training platform aimed at educating employees and individuals on the best practices for ensuring safety in various environments, such as workplaces, construction sites, or other high-risk areas. ",
    tech: ["React", "Tailwind CSS"],
    liveLink:
      "https://safety-courses-1oftglmwr-syed-saud-jans-projects.vercel.app",
    githubLink: "https://github.com/SAUDJAN1/safety-courses",
  },
  {
    title: "React Word Detector App",
    description:
      "The Registration Form project aims to create a user-friendly and secure form for collecting personal information from new users. ",
    tech: ["React", "Express", "MongoDB", "JWT", "BcryptJs", "CRUD"],
    liveLink:
      "https://react-word-detector-p3ul9pupz-syed-saud-jans-projects.vercel.app",
    githubLink: "https://github.com/SAUDJAN1/React-Word-Detector-App",
  },
  {
    title: "React Calculator App",
    description:
      "The Calculator App project is designed to provide users with a simple and intuitive interface for performing basic and advanced mathematical calculations",
    tech: ["React", "tailwindcss"],
    liveLink:
      "https://react-calculator-qff7tfuc9-syed-saud-jans-projects.vercel.app",
    githubLink: "https://github.com/SAUDJAN1/React-Calculator-App",
  },
  {
    title: "E-Commerce Store",
    description:
      "A scalable MERN e-commerce platform featuring secure user authentication, admin-based product management, and Stripe payment integration.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Redux-Tool-Kit",
    ],
    liveLink: "https://github.com/SAUDJAN1/MERN-STACK-BOOK_STORE-PROJECT",
    githubLink: "https://github.com/SAUDJAN1/MERN-STACK-BOOK_STORE-PROJECT",
  },
  {
    title: "MERN Project",
    description:
      "A scalable MERN e-commerce platform featuring secure user authentication, admin-based product management, and Stripe payment integration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Zod"],
    liveLink: "https://github.com/SAUDJAN1/Mern-Project",
    githubLink: "https://github.com/SAUDJAN1/Mern-Project",
  },
  {
    title: "Task Manager App",
    description:
      "A simple yet powerful productivity tool designed to help users efficiently manage tasks, track progress, and stay organized. This app allows users to add, edit, and delete tasks",

    tech: ["React", "Express", "MongoDB", "JWT", "CRUD"],
    liveLink: "https://github.com/SAUDJAN1/Todo-List-App",
    githubLink: "https://github.com/SAUDJAN1/Todo-List-App",
  },
  {
    title: "Registration Form",
    description:
      "The Registration Form project aims to create a user-friendly and secure form for collecting personal information from new users. ",
    tech: ["React", "Express", "MongoDB", "JWT", "BcryptJs", "CRUD"],
    liveLink: "https://github.com/SAUDJAN1/Registration_form",
    githubLink: "https://github.com/SAUDJAN1/Registration_form",
  },

  // Add more projects here
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Explore a selection of full-stack applications built with
            performance and scalability in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-green-600 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-blue-100 dark:bg-blue-600 dark:text-white text-blue-800 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex items-center gap-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 font-semibold hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
