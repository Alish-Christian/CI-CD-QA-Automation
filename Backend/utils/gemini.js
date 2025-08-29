const { GoogleGenAI } = require('@google/genai');
// Load environment variables
require('dotenv').config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_KEY2 // pass your key here
});
const prompt = `
for the given js file
return the output in structured format 
keep the code minimal and simple and in strict json format
5 max testcases per problem
{   
    "tests/filename.test.js":"code",
     "tests/filename.testCase.json":"testcases"

}
     Test Case JSON Format:
{
  "functionName": [
    {"input": [param1, param2], "expected": result, "description": "test description"},
    {"input": [param1, param2], "expected": result, "description": "test description"}
  ]
}

example output(always follow this format)no extra characters allowed
{
  "tests/add.test.js": "const add = require('../add.js');\\nconst testCases = require('./add.testCase.json');\\n\\ndescribe('add', () => {\\n  test.each(testCases.add)(\\n    'Function should %s',\\n    ({ input, expected, description }) => {\\n      expect(add(...input)).toBe(expected);\\n    }\\n  );\\n});",
  "tests/add.testCase.json": "{\\n  \\"add\\": [\\n    {\\n      \\"input\\": [2, 3],\\n      \\"expected\\": 5,\\n      \\"description\\": \\"correctly add two positive integers\\"\\n    },\\n    {\\n      \\"input\\": [0, -5],\\n      \\"expected\\": -5,\\n      \\"description\\": \\"correctly add zero and a negative integer\\"\\n    },\\n    {\\n      \\"input\\": [0.1, 0.2],\\n      \\"expected\\": 0.30000000000000004,\\n      \\"description\\": \\"handle floating point addition with JavaScript's precision\\"\\n    },\\n    {\\n      \\"input\\": [\\"Hello, \\", \\"World!\\"],\\n      \\"expected\\": \\"Hello, World!\\",\\n      \\"description\\": \\"concatenate strings when both inputs are strings\\"\\n    },\\n    {\\n      \\"input\\": [10, \\"5\\"],\\n      \\"expected\\": \\"105\\",\\n      \\"description\\": \\"concatenate a number and a string\\"\\n    }\\n  ]\\n}",
}
`;

async function main(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:prompt+"    \n"+input,
  });
  
  console.log(response.text);
  return response.text;
}

module.exports = {main};

