export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explanation?: string;
	img?: string;
};

export type Problem = {
	id: string;
	title: string;
	type: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	order: number;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
	testCases?: TestCase[];
};

export type TestCase = {
	id: number;
	input: any; // Adjust type as needed
	expectedOutput: any; // Adjust type as needed
  };

