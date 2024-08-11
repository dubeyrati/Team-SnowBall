"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProblemTab = () => {
  const router = useRouter();

  const handleSolve = (problemid: string) => {
    router.push(problemid);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full mt-8">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-300">Problems</h2>
          {problems.length > 0 ? (
            problems.map((problem) => (
              <div
                key={problem.id}
                className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4 flex justify-between items-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <a
                  href={problem.link}
                  className="text-white text-lg font-medium hover:text-blue-300 transition-colors duration-300"
                >
                  {problem.id}. {problem.name}
                </a>
                <button
                  className="bg-blue-600 text-white text-xs py-1.5 px-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                  onClick={() => handleSolve(problem.link)}
                >
                  Solve
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 text-sm">No problems available</p>
          )}
        </div>
      </div>
    </div>
  );
};

const problems = [
  { id: 1, name: "Add Two Numbers", link: "/problems/add-two-numbers" },
  { id: 2, name: "Reverse Integer", link: "/problems/reverse-integer" },
  { id: 3, name: "Two Sum", link: "/problems/two-sum" },
  { id: 4, name: "Longest Palindromic Substring", link: "/problems/longest-palindromic-substring" },
  { id: 5, name: "Median of Two Sorted Arrays", link: "/problems/median-of-two-sorted-arrays" },
  { id: 6, name: "Zigzag Conversion", link: "/problems/zigzag-conversion" },
];

export default ProblemTab;