const express = require('express')
const {main}=require('../Backend/utils/gemini')
const app = express()
const port = 3000
function extractJavaScriptBlocks(text) {
  const regex = /```javascript([\s\S]*?)```/g;
  const matches = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1].trim());
  }

  return matches;
}

// Add this line BEFORE your routes
app.use(express.json());

app.get('/', (req, res) => {
  const text=req.
  res.send('Hello World!')
})
// POST endpoint
app.post('/process', async (req, res) => {
  const userInput = req.body.input; // Expecting { "input": "some text" }

  if (!userInput) {
    return res.status(400).json({ error: "Input is required" });
  }

  // Example: just echo back the input
  const response = await main(JSON.stringify(userInput));

//  const op=extractJavaScriptBlocks(response);
  res.json({ output:response });
});

app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`)
})