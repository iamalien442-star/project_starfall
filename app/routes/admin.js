const express = require('express');
const path = require('path');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

router.post('/export', authMiddleware, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Forbidden: Admin access required" });
  }

  const filePath = path.join(__dirname, "../data/reward.png");

  res.download(
    filePath,
    "reward.png",
    (err) => {
      if (err) {
        res.status(404).json({ error: "Reward file not found on server." });
      }
    }
  );
});

module.exports = router;