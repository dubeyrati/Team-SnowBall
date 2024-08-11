import React, { useState } from "react";
import Nav from "./Nav/Nav";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { Problem } from "@/app/utils/types/problem";
import { problems } from "@/app/utils/problems";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type IdeProps = {
  problem: Problem;
  pid: any;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

const Ide: React.FC<IdeProps> = ({
  problem,
  pid,
  setSuccess,
}) => {
  const localStorageKey = `userCode_${pid}`;
  const storedUserCode = localStorage.getItem(localStorageKey);
  const [userCode, setUserCode] = useState<string>(
    storedUserCode || problem.starterCode
  );

  // Handle code submission
  const handleSubmit = async () => {
    try {
      localStorage.setItem(localStorageKey, userCode);
      const cb = new Function(`return ${userCode}`)();
      const handler = problems[pid].handlerFunction;
      if (typeof handler === "function") {
        const success = handler(cb);
        if (success) {
          toast.success("All tests passed!", {
            position: "top-center",
            autoClose: 3000,
            theme: "dark",
            className: 'custom-toast-success',
          });
        }
      }
    } catch (error: any) {
      if (
        error.message.startsWith(
          "AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:"
        )
      ) {
        toast.error("One or more test cases failed", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
          className: 'custom-toast-error',
        });
      } else {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
          className: 'custom-toast-error',
        });
      }
    }
  };

  // Handle code running
  const handleRun = () => {
    try {
      console.log("Run button clicked");
      // Add your logic here to run the code
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        className: 'custom-toast-error',
      });
    }
  };

  const handleReset = () => {
    setUserCode(problem.starterCode);
    localStorage.setItem(localStorageKey, problem.starterCode);
    toast.info("Code has been reset.", {
      position: "top-center",
      autoClose: 3000,
      theme: "dark",
      className: 'custom-toast-info', // Custom class for further styling
    });
  };

  const onChange = (value: string) => {
    setUserCode(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.ctrlKey && (event.key === 'v' || event.key === 'c')) {
      event.preventDefault();
      if (event.key === 'v') {
        toast.info("Paste operation is disabled.", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
          className: 'custom-toast-info',
        });
      } else if (event.key === 'c') {
        toast.info("Copy operation is disabled.", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
          className: 'custom-toast-info',
        });
      }
    }
  };

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black relative overflow-x-hidden h-screen">
      <Nav handleSubmit={handleSubmit} handleReset={handleReset} />
      <div className="w-full overflow-auto p-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <CodeMirror
            value={userCode}
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{
              fontSize: 16,
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid #333",
            }}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default Ide;