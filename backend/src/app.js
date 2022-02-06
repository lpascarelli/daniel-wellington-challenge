const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Main route
app.use('/daniel-wellington-products', require('./routes'));

module.exports = app;
