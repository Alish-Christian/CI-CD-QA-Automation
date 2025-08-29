const { GoogleGenAI } = require('@google/genai');
// Load environment variables
require('dotenv').config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_KEY // pass your key here
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });

  console.log(response.text);
}

// wrap in async IIFE for top-level await
(async () => {
  try {
    await main();
  } catch (err) {
    console.error(err);
  }
})();
