import React from "react";
import about2 from "../assets/about.png";
import feature2 from "../assets/feature2.png";

const About = () => {
  return (
    <div
      className="md:px-14 p-4 max-w-screen-2xl mx-auto space-y-10"
      id="about"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={feature2} alt="" />
        </div>

        {/* about content*/}
        <div className="md:w-2/5">
          <h2 className="md:text-4xl text-3xl text-primary mb-5 leading-normal dark:text-white">
            Code with precision and creative insight.{" "}
            <span className="text-secondary">Innovative, agile solutions.</span>
          </h2>
          <p className="text-gray-700 text-lg mb-7 dark:text-gray-400">
            Developing sophisticated applications demands mastery of modern
            programming languages, rigorous testing frameworks, and a commitment
            to continuous learning and improvement.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={about2} alt="" />
        </div>

        <div className="md:w-2/5">
          <h2 className="md:text-4xl text-3xl text-primary mb-5 leading-normal dark:text-white">
            Code with precision and creative insight.{" "}
            <span className="text-secondary">Innovative, agile solutions.</span>
          </h2>
          <p className="text-gray-700 text-lg mb-7 dark:text-gray-400">
            Developing sophisticated applications demands mastery of modern
            programming languages, rigorous testing frameworks, and a commitment
            to continuous learning and improvement.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
