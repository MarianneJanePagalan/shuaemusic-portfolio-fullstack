const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data for Tracks
const tracks = [
  {
    id: 1,
    title: 'Neon Drift',
    artist: 'SHUAE',
    genre: 'Synthwave',
    duration: '3:45',
    cover: '/src/assets/album_phonk.png'
  },
  {
    id: 2,
    title: 'Midnight Run',
    artist: 'SHUAE',
    genre: 'Phonk',
    duration: '2:30',
    cover: '/src/assets/album_phonk.png'
  },
  {
    id: 3,
    title: 'Cyber City',
    artist: 'SHUAE',
    genre: 'Cyberpunk',
    duration: '4:12',
    cover: '/src/assets/album_phonk.png'
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

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
