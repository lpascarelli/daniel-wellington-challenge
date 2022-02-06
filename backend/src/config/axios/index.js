const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://assignment.dwbt.tech',
});

module.exports = instance;
