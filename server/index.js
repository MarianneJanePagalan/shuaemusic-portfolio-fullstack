const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Track Data — Real Spotify releases
const tracks = [
  {
    id: 1,
    title: 'Tonight',
    artist: 'SHUAE',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/51u2fs9OO7FgRcq4Y7zKEO?utm_source=generator'
  },
  {
    id: 2,
    title: 'Vibrant',
    artist: 'SHUAE',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/22budU4E2GuTnytiTWK56K?utm_source=generator'
  }
];

// GET /api/tracks
app.get('/api/tracks', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: tracks
  });
});

// POST /api/contact
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ status: 'error', message: 'Name, email, and message are required' });
  }

  // Log the submission to the console (acting as our mock database saving)
  console.log(`[CONTACT FORM SUBMISSION] From: ${name} (${email}) - Subject: ${subject || 'None'}\nMessage: ${message}`);

  // Return a success response
  res.status(200).json({
    status: 'success',
    message: 'Your message has been received! I will get back to you shortly.'
  });
});

// GET /api/health
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is humming!', message: 'Music Producer API is online' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
