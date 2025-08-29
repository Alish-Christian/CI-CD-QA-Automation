const { GoogleGenAI } = require('@google/genai');
// Load environment variables
require('dotenv').config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_KEY // pass your key here
});
const prompt = `Generate Jest unit tests for the provided JavaScript codebase.

*Requirements:*
- For each JavaScript/TypeScript file (.js, .ts, .tsx, .jsx) containing functions, create corresponding test files
- Use Jest testing framework exclusively
- Generate exactly 5 test cases per function covering: normal cases, edge cases, boundary conditions, invalid inputs, and expected failures
- Create separate JSON files for test case data

*Output Structure:*
For each function file (e.g., filename.js/.ts/.tsx/.jsx):
1. Create tests/filename.test.js - Jest unit test file
2. Create tests/filename.testCase.json - Test case data (5 cases per function)
3. Return clean json 

*Test Case JSON Format:*
{
  "functionName": [
    {"input": [param1, param2], "expected": result, "description": "test description"},
    {"input": [param1, param2], "expected": result, "description": "test description"}
  ]
}
 *Example output (follow strictly)*
 {
  "tests/add.test.js": "const add = require('../add');\\nconst testCases = require('./add.testCase.json');\\n\\ndescribe('add', () => {\\n  testCases.add.forEach(testCase => {\\n    test(testCase.description, () => {\\n      expect(add(...testCase.input)).toBe(testCase.expected);\\n    });\\n  });\\n});\\n",
  
  "tests/add.testCase.json": "{\\n  \\"add\\": [\\n    {\\"input\\": [2,3], \\"expected\\": 5, \\"description\\": \\"should correctly add two positive numbers\\"},\\n    {\\"input\\": [0,0], \\"expected\\": 0, \\"description\\": \\"should return 0 when adding two zeros\\"},\\n    {\\"input\\": [-1,-5], \\"expected\\": -6, \\"description\\": \\"should correctly add two negative numbers\\"},\\n    {\\"input\\": [1000000,2000000], \\"expected\\": 3000000, \\"description\\": \\"should correctly add large numbers\\"},\\n    {\\"input\\": [\\"a\\",2], \\"expected\\": \\"a2\\", \\"description\\": \\"should concatenate string and number due to type coercion\\"}\\n  ]\\n}",
  
  "tests/diff.test.js": "const diff = require('../diff');\\nconst testCases = require('./diff.testCase.json');\\n\\ndescribe('diff', () => {\\n  testCases.diff.forEach(testCase => {\\n    test(testCase.description, () => {\\n      expect(diff(...testCase.input)).toBe(testCase.expected);\\n    });\\n  });\\n});\\n",
  
  "tests/diff.testCase.json": "{\\n  \\"diff\\": [\\n    {\\"input\\": [5,2], \\"expected\\": 3, \\"description\\": \\"should correctly subtract two positive numbers\\"},\\n    {\\"input\\": [5,5], \\"expected\\": 0, \\"description\\": \\"should return 0 when subtracting identical numbers\\"},\\n    {\\"input\\": [2,5], \\"expected\\": -3, \\"description\\": \\"should return a negative result when second number is larger\\"},\\n    {\\"input\\": [-5,-2], \\"expected\\": -3, \\"description\\": \\"should correctly subtract negative numbers\\"},\\n    {\\"input\\": [\\"a\\",2], \\"expected\\": \\"NaN\\", \\"description\\": \\"should return NaN when inputs are not numbers\\"}\\n  ]\\n}"
}

*Jest Test Format:*

- Use describe() blocks for each function
- Use test() or it() for individual test cases
- Import test cases from JSON files
- Include proper assertions with expect()

*Output Format:*
Return a JSON object where keys are file paths and values are file contents. Include only the generated test files.

IMPORTANT:
- All keys and string values must use double quotes only
- Escape any backslashes in paths
- Replace all line breaks inside strings with \n
- Return a single JSON object directly, no extra text
*Codebase:*

`;

async function main(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:prompt+"    \n"+input,
  });
  
  console.log(response.text);
  return response.text;
}
async function filter(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:`
Provide the output **only as JSON**, without any extra explanation or text.
       `,
  });
  
  console.log(response.text);
  return response.text;
}
module.exports = {main,filter};

