"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Questions = () => {
  const router = useRouter();
  const [joinedContest, setJoinedContest] = useState(false);
  const [currentContest, setCurrentContest] = useState("");

  const handleJoinContest = (contestName: string) => {
    setJoinedContest(true);
    setCurrentContest(contestName);
  };

  const handleSolve = (problemid: string) => {
    router.push(problemid);
  };

  const algorithmBlitzProblems = problems.filter(problem =>
    ["Two Sum", "Median of Two Sorted Arrays"].includes(problem.name)
  );

  const dataStructuresShowdownProblems = problems.filter(problem =>
    ["Add Two Numbers", "Reverse Integer"].includes(problem.name)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation bar */}
      <nav className="bg-gray-800 py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold text-blue-300">NoobCoders Challenge</div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full mt-8">
          {!joinedContest ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div
                className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-blue-800 hover:to-indigo-900 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleJoinContest("Algorithm Blitz")}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Algorithm Blitz</h3>
                <p className="text-gray-200 mb-6">Test your algorithmic skills in this fast-paced contest with a mix of classic and tricky problems.</p>
                <button
                  className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Join Contest
                </button>
              </div>
              <div
                className="bg-gradient-to-r from-green-700 to-teal-800 p-8 rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-green-800 hover:to-teal-900 transition-all duration-300 transform hover:-translate-y-1"
                onClick={() => handleJoinContest("Data Structures Showdown")}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">Data Structures Showdown</h3>
                <p className="text-gray-200 mb-6">Battle it out with complex data structure problems designed to push your problem-solving limits.</p>
                <button
                  className="bg-white text-green-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
                >
                  Join Contest
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Problem Solving Arena</h2>
              {(currentContest === "Algorithm Blitz" && algorithmBlitzProblems.length > 0) ? (
                algorithmBlitzProblems.map((problem) => (
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
                (currentContest === "Data Structures Showdown" && dataStructuresShowdownProblems.length > 0) ? (
                  dataStructuresShowdownProblems.map((problem) => (
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
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const problems = [
  { id: 1, name: "Two Sum", link: "/problem/two-sum" },
  { id: 2, name: "Add Two Numbers", link: "/problem/add-two-numbers" },
  { id: 3, name: "Median of Two Sorted Arrays", link: "/problem/median-of-two-sorted-arrays" },
  { id: 4, name: "Longest Palindromic Substring", link: "/problem/longest-palindromic-substring" },
  { id: 5, name: "Zigzag Conversion", link: "/problem/zigzag-conversion" },
  { id: 6, name: "Reverse Integer", link: "/problem/reverse-integer" },
];

export default Questions;

