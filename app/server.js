const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'views')));

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use('/api/auth', authRoutes);      
app.use('/api/user', userRoutes);    
app.use('/api/admin', adminRoutes); 

app.listen(PORT, () => {
  console.log(`Challenge server listening on port ${PORT}`);
});