/**
 * backend/server.js
 * Main entry point for the backend server.
 */

// Import DNS module to set custom nameservers (useful for resolving MongoDB Atlas URIs in some environments)
const dns = require('dns');
dns.setServers(['8.8.8.8']);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing for frontend access
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log('MongoDB connection error:', err));

// Routes
const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes); // Mount item routes at /api/items

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
