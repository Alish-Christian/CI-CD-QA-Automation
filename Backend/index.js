const {createFilesFromJson}=require('../Backend/utils/temp')
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Server/config/database');
const authRoutes = require('./Server/routes/authRoutes');
const {main,filter}=require('./utils/gemini');
const reportRoutes = require("./Server/routes/reportRoutes");
const app = express();
const port = process.env.PORT || 3000;


// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api',reportRoutes);
// Existing routes
app.get('/', (req, res) => {
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
var cleanResponse=response;
createFilesFromJson(response);
  res.json({ output:cleanResponse });
});

app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`)
})