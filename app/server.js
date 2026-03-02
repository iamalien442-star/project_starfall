const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'views')));

// Import Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

// Register Routes
app.use('/api/auth', authRoutes);         // /api/login
app.use('/api/user', userRoutes);    // /api/user/profile
app.use('/api/admin', adminRoutes);  // /api/admin/export

app.listen(PORT, () => {
  console.log(`Challenge server listening on port ${PORT}`);
});