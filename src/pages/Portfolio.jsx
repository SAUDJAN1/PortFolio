import React from "react";
import {
  ArrowDownCircleIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import Image from "../assets/saud1.jpeg";
import CV from "../assets/SyedSaudJan_Resume.pdf";

const Portfolio = () => {
  return (
    <>
      {/* ================= HOME SECTION ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* LEFT CONTENT */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-600">
                  Syed Saud Jan
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                Cross-Platform App Developer
              </h2>

              <h3 className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
                Building Scalable Mobile & Backend Systems
              </h3>

              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
                I am a Full-Stack Mobile App Developer specializing in building
                cross-platform applications using React Native and scalable backend
                systems with Node.js, Express.js, and PostgreSQL. I focus on clean
                architecture, API design, and high-performance mobile experiences
                for both Android and iOS platforms.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="mailto:SyedSaudjan@gmail.com"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition duration-300 text-center"
                >
                  Contact Me
                </a>

                <a
                  href="https://github.com/SaudJan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition duration-300 text-center"
                >
                  View Projects
                </a>

                <a
                  href={CV}
                  download
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition duration-300 text-center"
                >
                  Download CV
                </a>
              </div>
            </div>

       {/* RIGHT IMAGE */}
<div className="order-1 md:order-2 flex justify-center">
  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
    {/* Background Glow */}
    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

    {/* Profile Image */}
    <div className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl">
      <img
        src={Image}
        alt="Syed Saud Jan"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center animate-bounce">
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              <ArrowDownCircleIcon className="h-10 w-10" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              About Me
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              My journey, experience, and technical expertise in mobile and backend development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT SIDE */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                My Journey
              </h3>

              <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  I specialize in cross-platform mobile application development
                  using React Native, delivering seamless user experiences across
                  Android and iOS.
                </p>
                <p>
                  On the backend, I design scalable RESTful APIs using Node.js
                  and Express.js with PostgreSQL as the primary relational database.
                </p>
                <p>
                  My focus is clean architecture, database schema design, secure
                  authentication systems, and production-ready deployments.
                </p>
              </div>

              {/* SKILLS */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-6">
                  Technical Skills
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
                  {[
                    "React Native",
                    "Android & iOS Development",
                    "Node.js & Express.js",
                    "PostgreSQL",
                    "RESTful API Design",
                    "Authentication (JWT)",
                    "Database Schema Design",
                    "App Deployment",
                    "JavaScript / TypeScript",
                    "Responsive UI Design",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <CodeBracketIcon className="h-5 w-5 text-blue-600 mr-2" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-10">
              
              {/* Experience */}
              <div>
                <div className="flex items-center mb-6">
                  <BriefcaseIcon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold">Experience</h3>
                </div>

                <div className="space-y-6 text-sm sm:text-base">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">
                      Full-Stack Mobile App Developer — Fast Shop Technologies Limited (july 2024 to present)
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Developed cross-platform mobile applications and backend
                      systems using React Native, Node.js, and PostgreSQL.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">
                     Mari Energies Company
                    </h4>
                    <p className="text-gray-600 mt-2">
                    I worked as an IT professional at Mari Energies Company, managing internal systems and networks. I assisted with hardware/software installations, troubleshooting technical issues, and supported daily IT operations. This experience enhanced my problem-solving and system management skills in a corporate environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="flex items-center mb-6">
                  <AcademicCapIcon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 text-sm sm:text-base">
                  <h4 className="font-medium">
                    B.S. Computer Science
                  </h4>
                  <p className="text-gray-600">
                    University of Peshawar | 2020–2024
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