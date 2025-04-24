import React from "react";
import {
  ArrowDownCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import Image from "../assets/saud1.jpg";
import CV from "../assets/Syed_Saud_Jan_Resume.pdf";
const Portfolio = () => {
  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Syed Saud Jan
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                MERN STACK Developer | UI/UX Enthusiast
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                <p>
                  I build full-stack web applications with seamless performance
                  and modern design. Currently specializing in MongoDB,
                  Express.js, React, and Node.js — with a strong focus on
                  scalable APIs, clean architecture, and responsive user
                  interfaces.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:SyedSaudjan@gmail.com"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/SaudJan1"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors duration-300"
                >
                  View Projects
                </a>
                <a
                  href={CV}
                  download={CV}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <img
                    src={Image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-16 md:mt-24 flex justify-center animate-bounce">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowDownCircleIcon className="h-10 w-10" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here's my story and what drives me in the world of technology and
              design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Story */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate MERN Stack Developer with 1 year of
                  experience creating scalable, high-performance web
                  applications. My journey began when I built my first website
                  at 15, and I've been hooked on coding ever since.
                </p>

                <p>
                  What started as a hobby turned into a career when I realized I
                  could combine my love for problem-solving with my eye for
                  design. I specialize in creating responsive, accessible web
                  applications that deliver exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you can find me cycling through the city,
                  working on personal projects, or experimenting with
                  photography. I believe creativity in different fields helps me
                  think outside the box as a developer.
                </p>
              </div>

              {/* Skills */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                  My Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Html Css Bootstrap</span>
                  </div>
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>JavaScript/TypeScript</span>
                  </div>
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>ReactJs</span>
                  </div>
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center">
                    <DevicePhoneMobileIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Responsive Design</span>
                  </div>

                  <div className="flex items-center">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Node.js & ExpressJs</span>
                  </div>
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>JWT Authentication</span>
                  </div>
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>Zod (TypeScript-first Schema)</span>
                  </div>
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Experience & Education */}
            <div className="space-y-10">
              {/* Experience */}
              <div>
                <div className="flex items-center mb-6">
                  <BriefcaseIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Experience
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                      MERN STACK Developer Internship (2022)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tech Solutions Inc. • 2022
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Lead development of full-stack web applications using the
                      MERN stack, enhancing performance and user experience,
                      which led to a 40% increase in user engagement.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                      Frontend Developer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Digital Creations • 2021
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Developed and maintained client websites using React and
                      Tailwind CSS, with a strong focus on accessibility,
                      performance, and responsive design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center mb-6">
                  <AcademicCapIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Education
                  </h3>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    B.S. Computer Science
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    University of Peshawar | 2020 -24
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Specialized in Full-Stack Web Development with a focus on
                    the MERN stack, building scalable and user-centric
                    applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
