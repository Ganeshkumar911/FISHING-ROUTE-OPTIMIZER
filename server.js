const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Simple hardcoded user for demonstration
const validUser = {
  username: 'user',
  password: 'password123'
};

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === validUser.username && password === validUser.password) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
