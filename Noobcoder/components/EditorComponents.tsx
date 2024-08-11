"use client";
import React, { useRef, useState } from "react";
import { ModeToggleBtn } from "./mode-toggle-btn";
import SelectLanguages, { selectedLanguageOptionProps } from "./SelectLanguages";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Editor, { Monaco } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Loader, Play } from "lucide-react";
import { codeSnippets, languageOptions } from "@/config/config";
import * as monaco from "monaco-editor";
import { complieCode } from "@/actions/complie";
import toast from "react-hot-toast";

export interface CodeSnippetsProps {
  [key: string]: string;
}

export default function EditorComponent() {
  const { theme } = useTheme();
  const [sourceCode, setSourceCode] = useState(codeSnippets["javascript"]);
  const [languageOption, setLanguageOption] = useState(languageOptions[0]);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState([]);
  const [userInput, setUserInput] = useState("");
  const language = languageOption.language;
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const [err, setErr] = useState(false);

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
    editor.focus();
  }

  function handleOnChange(value: string | undefined) {
    if (value) {
      setSourceCode(value);
    }
  }

  function onSelect(value: selectedLanguageOptionProps) {
    setLanguageOption(value);
    setSourceCode(codeSnippets[value.language]);
  }

  async function executeCode() {
    setLoading(true);
    const requestData = {
      language: languageOption.language,
      version: languageOption.version,
      files: [
        {
          content: sourceCode,
        },
      ],
      stdin: userInput,
    };
    try {
      const result = await complieCode(requestData);
      setOutput(result.run.output.split("\n"));
      setLoading(false);
      setErr(false);
      toast.success("Compiled Successfully");
    } catch (error) {
      setErr(true);
      setLoading(false);
      toast.error("Failed to compile the code");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen dark:bg-slate-900 rounded-2x1 shadow-2x1 py-6 px-8">
      {/* Editor Header */}
      <div className="flex items-center justify-between pb-3">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
          NoobCoder
        </h2>
        <div className="flex items-center space-x-2">
          <ModeToggleBtn />
          <div className="w-[230px]">
            <SelectLanguages onSelect={onSelect} selectedLanguageOption={languageOption} />
          </div>
          {loading ? (
            <Button
              disabled
              size={"sm"}
              className="dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-100 bg-slate-800 hover:bg-slate-900"
            >
              <Loader className="w-4 h-4 mr-2" animate-spin />
              <span>Running please wait...</span>
            </Button>
          ) : (
            <Button
              onClick={executeCode}
              size={"sm"}
              className="dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-100 bg-slate-800 hover:bg-slate-900"
            >
              <Play className="w-4 h-4 mr-2" />
              <span>Run</span>
            </Button>
          )}
        </div>
      </div>
      {/* Editor */}
      <div className="bg-slate-400 dark:bg-slate-950 p-3">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full rounded-lg border dark:bg-slate-900"
        >
          <ResizablePanel defaultSize={50} minSize={30}>
            <Editor
              theme={theme === "dark" ? "vs-dark" : "vs-light"}
              height="100vh"
              defaultLanguage={languageOption.language}
              defaultValue={codeSnippets["javascript"]}
              onMount={handleEditorDidMount}
              value={sourceCode}
              onChange={handleOnChange}
              language={languageOption.language}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={30}>
            <div className="space-y-3 bg-slate-300 dark:bg-slate-900 min-h-screen p-4">
              {/* Custom Input Section */}
              <div>
                <label
                  htmlFor="customInput"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Custom Input:
                </label>
                <textarea
                  id="customInput"
                  rows={3}
                  className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
              </div>
              {/* Output Section */}
              <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg min-h-[150px] max-h-[300px] overflow-y-auto">
                {err ? (
                  <div className="flex items-center space-x-2 text-red-500 border border-red-600 px-6 py-3">
                    <p className="text-xs">
                      Failed to compile the code, please try again!
                    </p>
                  </div>
                ) : (
                  <>
                    {output.map((item, index) => (
                      <p className="text-sm" key={index}>
                        {item}
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}