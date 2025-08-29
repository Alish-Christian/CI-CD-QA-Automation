const { GoogleGenAI } = require('@google/genai');
// Load environment variables
require('dotenv').config();
const ai = new GoogleGenAI({
  apiKey: "AIzaSyDNLYci6A-piGgCLxu-wv_79-3r1bi6Yl4" // pass your key here
});

async function main(input) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: input,
  });
  
  console.log(response.text);
  return response.text;
}

// Export all together
module.exports = {main};
