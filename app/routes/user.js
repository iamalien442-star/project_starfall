const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

router.get('/profile', authMiddleware, (req, res) => {
  const requestedId = req.query.id;

  if (!requestedId) {
    return res.status(400).json({ error: 'Missing id parameter' });
  }

  if (req.user.username !== requestedId) {
    return res.status(403).json({ 
      error: 'Forbidden: You can only access your own profile',
      hint: 'Different roles have different access levels'
    });
  }

  res.json({
    message: 'Profile retrieved successfully',
    profile: {
      id: req.user.username,
      role: req.user.role,
      secretNote: "Keep hunting!"
    }
  });
});
module.exports = router;