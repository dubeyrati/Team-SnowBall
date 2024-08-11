import React from "react";
import { FaPlay, FaCheck, FaRedo } from "react-icons/fa"; // Import icons
import { DiJavascript1 } from "react-icons/di";

type PreferenceNavProps = {
	handleSubmit: () => void;
	handleReset: () => void;  // Add handleReset to the props
};

const PreferenceNav: React.FC<PreferenceNavProps> = ({ handleSubmit, handleReset }) => {
  return (
    <div className="flex items-center justify-between bg-dark-layer-2 h-14 w-full px-4 py-2 shadow-lg">
      <div className="flex items-center text-white">
      <button className="flex items-center rounded bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 px-3 py-2 font-medium focus:outline-none">
      <DiJavascript1 className="text-xl mr-2" /> {/* Adjust size and margin */}
      <span className="text-sm">JavaScript</span>
    </button>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <button
          className="flex items-center px-4 py-2 text-sm font-medium bg-dark-fill-3 hover:bg-dark-fill-2 text-dark-label-2 rounded-lg transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          <FaPlay className="mr-2" />
          Run
        </button>
        <button
          className="flex items-center px-4 py-2 text-sm font-medium bg-dark-green-s hover:bg-green-3 text-white rounded-lg transition duration-300 ease-in-out"
          onClick={handleSubmit}
        >
          <FaCheck className="mr-2" />
          Submit
        </button>
        <button
          className="flex items-center px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-300 ease-in-out"
          onClick={handleReset}
        >
          <FaRedo className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default PreferenceNav;