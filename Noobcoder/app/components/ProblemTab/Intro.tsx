import React from "react";

const Intro = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-between">
      <div className="flex flex-col items-start justify-center px-4 py-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-lg shadow-lg h-full">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          NoobCoder
        </h1>
        <p className="text-gray-200 text-lg mb-6">
          Elevate your coding skills with our curated data structure and algorithm problems. Start now!
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </div>
      <div className="flex flex-col items-start gap-6 px-4 py-12 flex-grow">
        <div className="max-w-sm w-full bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Practice</h2>
          <p className="text-gray-300 mb-4">
            Work on various coding problems to sharpen your skills and improve your problem-solving abilities.
          </p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Start Practicing
          </button>
        </div>
        <div className="max-w-sm w-full bg-gray-800 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contest</h2>
          <p className="text-gray-300 mb-4">
            Join coding contests to test your skills against others and tackle challenging problems.
          </p>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Join Contest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;