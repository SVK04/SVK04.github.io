import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion, useAnimation } from "framer-motion";

import { textVariant } from "../utils/motion";

import { styles } from "../style";

const Tech = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const progressAnimation = useAnimation();

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };

  const closePopup = () => {
    setSelectedTechnology(null);
  };

  useEffect(() => {
    if (selectedTechnology) {
      animateProgressBar();
    }
  }, [selectedTechnology]);

  const animateProgressBar = async () => {
    await progressAnimation.start({
      strokeDashoffset: 283 - (selectedTechnology.percentage / 100) * 283,
      transition: { duration: 1 },
    });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>&nbsp;</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28"
            key={technology.name}
            onClick={() => handleTechnologyClick(technology)}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      {selectedTechnology && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm">
          <div className="w-96 h-96 bg-white rounded-lg shadow-lg">
            <button
              className="relative top-4 left-[350px] text-gray-900 hover:text-white-800"
              onClick={closePopup}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 18 18"
                fill="#333"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4099 9L16.7099 2.71C16.8982 2.5217 17.004 2.2663 17.004 2C17.004 1.7337 16.8982 1.47831 16.7099 1.29C16.5216 1.1017 16.2662 0.995911 15.9999 0.995911C15.7336 0.995911 15.4782 1.1017 15.2899 1.29L8.99994 7.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L7.58994 9L1.28994 15.29C1.19621 15.383 1.12182 15.4936 1.07105 15.6154C1.02028 15.7373 0.994141 15.868 0.994141 16C0.994141 16.132 1.02028 16.2627 1.07105 16.3846C1.12182 16.5064 1.19621 16.617 1.28994 16.71C1.3829 16.8037 1.4935 16.8781 1.61536 16.9289C1.73722 16.9797 1.86793 17.0058 1.99994 17.0058C2.13195 17.0058 2.26266 16.9797 2.38452 16.9289C2.50638 16.8781 2.61698 16.8037 2.70994 16.71L8.99994 10.41L15.2899 16.71C15.3829 16.8037 15.4935 16.8781 15.6154 16.9289C15.7372 16.9797 15.8679 17.0058 15.9999 17.0058C16.132 17.0058 16.2627 16.9797 16.3845 16.9289C16.5064 16.8781 16.617 16.8037 16.7099 16.71C16.8037 16.617 16.8781 16.5064 16.9288 16.3846C16.9796 16.2627 17.0057 16.132 17.0057 16C17.0057 15.868 16.9796 15.7373 16.9288 15.6154C16.8781 15.4936 16.8037 15.383 16.7099 15.29L10.4099 9Z"
                  fill="#333"
                />
              </svg>
            </button>

            <h3 className="text-center text-2xl font-bold text-gray-800 mt-6 mb-5">
              {selectedTechnology.name}
            </h3>
            <div className="flex items-center justify-center h-64">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                <svg
                  className="w-full h-full text-blue-500 animate-stroke"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 100 100"
                >
                  <motion.circle
                    className="stroke-current"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset="283"
                    animate={progressAnimation}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-700">
                    {selectedTechnology.percentage}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
