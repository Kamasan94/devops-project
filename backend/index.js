const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors());

// Endpoint health
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Endpoint users (mock)
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Mario' },
    { id: 2, name: 'Luigi' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});