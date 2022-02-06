const axios = require('../config/axios');

exports.get = async () => {
  try {
    return await axios.get('/images');
  } catch (error) {
    return {
      title: 'Error',
      message: error.message,
    };
  }
};
