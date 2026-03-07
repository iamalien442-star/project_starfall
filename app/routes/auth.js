const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { SECRET_KEY } = require('../middleware/auth');

const users = {
  "user1": { password: "password123", role: "user" }
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const user = users[username];

  if (user && user.password === password) {
    const payload = {
      username: username,
      role: user.role
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '2h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = router;