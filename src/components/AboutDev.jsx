import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutDev = () => {
  return (
    <div className="dark:bg-gray-700 flex items-center justify-center min-h-screen bg-gray-100">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="dark:bg-gray-800 w-full max-w-md p-6 bg-white rounded-lg shadow-sm"
      >
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="w-24 h-24 mb-4 overflow-hidden rounded-full border-4 border-yellow-400">
            <img
              src="https://i.ibb.co.com/ZJC4JRr/IMG-20231226-163311.jpg"
              alt="Developer"
              className="object-cover w-full h-full"
            />
          </div>

          {/* AboutDev */}
          <h2 className="dark:text-slate-300 mb-2 text-xl font-bold text-gray-800">
            About the Developer
          </h2>
          <p className="dark:text-slate-300 text-sm text-center text-gray-600">
            Hi! I’m a passionate software developer who loves creating
            innovative and user-friendly web applications. With a strong
            foundation in JavaScript, React, and modern development tools, I
            enjoy solving complex problems and delivering high-quality
            solutions.
          </p>

          {/* Personal Information */}
          <div className="mt-6">
            <h3 className="dark:text-slate-300 mb-2 text-lg font-semibold text-gray-800">
              Personal Information
            </h3>
            <ul className="dark:text-slate-300 text-sm text-gray-600">
              <li>
                <strong>Name:</strong> Sahabul Islam Sifat
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="sahabulislamsifat@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  sahabulislamsifat@gmail.com
                </a>
              </li>
              <li>
                <strong>Location:</strong> Khilgaon, Dhaka
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="dark:text-slate-300 mb-2 text-lg font-semibold text-gray-800">
              Skills & Expertise
            </h3>
            <ul className="dark:text-slate-300 text-sm text-gray-600 list-disc list-inside">
              <li>Proficient in JavaScript, React.js, and Java</li>
              <li>Experience with Firebase, MongoDB, and REST APIs</li>
              <li>
                Skilled in responsive design using Tailwind CSS and Bootstrap
              </li>
              <li>
                Familiar with Git, GitHub, and version control best practices
              </li>
            </ul>
          </div>
          {/* Buttons */}
          <div className="flex mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/sahabulislamsifat/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded shadow hover:bg-blue-700"
            >
            🔗 LinkedIn
            </a>
            <a
              href="https://github.com/sahabulislamsifat"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-gray-700 px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded shadow hover:bg-gray-900"
            >
             👉 GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
