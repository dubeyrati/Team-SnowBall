import { problems } from "@/app/utils/problems";
import { Problem } from "@/app/utils/types/problem";
import React from "react";

type QueProps = {
  problem: Problem;
  pid: any;
};

const Que = ({ pid, problem }: QueProps) => {
  const problemData = problems[pid];
  const { title, type, problemStatement, examples, constraints } = problemData;

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen">
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden shadow-lg">
        <a
          href="/"
          className="bg-black rounded-t-[5px] px-5 py-[10px] text-lg font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
        >
          NoobCoder
        </a>
      </div>
      <div className="flex px-6 py-8 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-xl">
          <div className="flex space-x-4 mb-6">
            <div className="flex-1 text-white">
              <h1 className="text-xl font-bold text-blue-300 mb-4">
                {title}
              </h1>
              <div
                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                  type === "easy"
                    ? "text-green-500 bg-green-500 bg-opacity-20"
                    : type === "medium"
                    ? "text-yellow-500 bg-yellow-500 bg-opacity-20"
                    : type === "hard"
                    ? "text-red-500 bg-red-500 bg-opacity-20"
                    : ""
                }`}
              >
                {type}
              </div>
            </div>
          </div>
          <div
            className="text-white text-base mb-6 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: problemStatement }}
          />
          <div className="space-y-6">
            {examples.map((example) => (
              <div key={example.id} className="bg-gray-900 p-4 rounded-lg">
                <p className="font-semibold text-blue-400 mb-2">
                  Example {example.id}:
                </p>
                <pre className="bg-black p-4 rounded-lg text-white">
                  <strong>Input:</strong> {example.inputText} <br />
                  <strong>Output:</strong> {example.outputText} <br />
                  {example.explanation && (
                    <span>
                      <strong>Explanation:</strong> {example.explanation}
                    </span>
                  )}
                </pre>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-blue-300 mb-4">
              Constraints:
            </h2>
            <ul
              className="text-white list-disc ml-6 space-y-2"
              dangerouslySetInnerHTML={{ __html: constraints }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Que;