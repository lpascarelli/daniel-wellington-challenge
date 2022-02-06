const axios = require('../config/axios');

exports.get = async () => {
  try {
    return await axios.get('/products');
  } catch (error) {
    return {
      title: 'Error',
      message: error.message,
    };
  }
};
