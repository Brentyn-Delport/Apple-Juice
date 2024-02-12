// server.js

// Import express to create and configure the HTTP server.
const express = require('express');

// Import CORS middleware to enable cross-origin requests.
const cors = require('cors');

// Create an Express application.
const app = express();

// Use the cors middleware on all routes.
app.use(cors());

// Use express.json() middleware for parsing JSON content from incoming requests.
app.use(express.json());

// Load environment variables
require('dotenv').config();

// Import Axios to make HTTP requests
const axios = require('axios');

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

  if (token == null) return res.sendStatus(401); // No token, unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Token is not valid, forbidden
    req.user = user;
    next(); // Proceed to the next middleware or the request handler
  });
};

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});



// Mock login route
app.post('/login', (req, res) => {
  // Example user credentials (in a norma; app, we'd verify these against a database but that is not required for this task)
  const { username, password } = req.body;

  // Generate a token
  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Define a simple route for the home page.
app.get('/', (req, res) => {
  res.send('Welcome to the Apple Juice API!');
});

// Define the search route to use query parameters for making API requests to the Apple store
app.get('/search', authenticateToken, async (req, res) => {
  // Extract query parameters
  const { term, media } = req.query;

  // Validate the input
  if (!term || !media) {
    return res.status(400).json({ message: "Please provide both search term and media type." });
  }

  try {
    // Construct the iTunes Search API URL
    const apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=${media}`;

    // Use Axios to send a GET request to the iTunes API
    const response = await axios.get(apiUrl);

    // Send the API response back to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors by sending an error response
    res.status(500).json({ message: "Failed to fetch data from iTunes Search API", error: error.message });
  }
});


// Define the port the server will run on.
const PORT = process.env.PORT || 3001;

// Tell the app to listen on that port, for incoming requests.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
