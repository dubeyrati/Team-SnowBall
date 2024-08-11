import React, { useState, useEffect } from "react";
import { FaPlay, FaCheck, FaRedo, FaClock } from "react-icons/fa"; // Import icons
import { DiJavascript1 } from "react-icons/di";

type NavProps = {
  handleSubmit: () => void;
  handleReset: () => void; 
};

const Nav: React.FC<NavProps> = ({ handleSubmit, handleReset }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true); // Automatically start the timer
  const contestDuration = 10; // Contest duration in seconds

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newSeconds = prevSeconds + 1;
          if (newSeconds >= contestDuration) {
            handleSubmit(); // Auto-submit
            setIsRunning(false); // Stop the timer
            return contestDuration; // Ensure timer shows the full contest duration
          }
          return newSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="flex items-center justify-between bg-dark-layer-2 h-20 w-full px-6 py-4 shadow-lg">
      <div className="flex items-center text-white space-x-4">
        <button className="flex items-center px-4 py-2 rounded bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 font-medium transition duration-300 ease-in-out">
          <DiJavascript1 className="mr-2" />
          <span className="text-sm">JavaScript</span>
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="px-4 py-2 text-sm font-medium bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 rounded-lg transition duration-300 ease-in-out flex items-center"
          onClick={handleSubmit}
        >
          <FaPlay className="mr-2" />
          Run
        </button>
        <button
          className="px-4 py-2 text-sm font-medium bg-dark-green-s hover:bg-green-3 text-white rounded-lg transition duration-300 ease-in-out flex items-center"
          onClick={handleSubmit}
        >
          <FaCheck className="mr-2" />
          Submit
        </button>
        <button
          className="px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300 ease-in-out flex items-center"
          onClick={handleReset}
        >
          <FaRedo className="mr-2" />
        </button>
        <div className="ml-4 flex items-center text-white text-lg font-medium">
          <FaClock className="mr-2" />
          <span>
            {Math.floor((contestDuration - seconds) / 60)}:{(contestDuration - seconds) % 60 < 10 ? '0' : ''}
            {(contestDuration - seconds) % 60}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;

