const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const uniqueIdRoutes = require('./routes/uniqueIdRoutes');
const errorHandler = require('./middleware/errorHandler');


dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Load the database connection
require('./config/db');

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Unique ID Generator API! Use /api/ids to generate a unique ID.');
});

// Routes
app.use('/api/ids', uniqueIdRoutes);

// Global error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
