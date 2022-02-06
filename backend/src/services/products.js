const axios = require('../config/axios');

exports.get = async () => {
  try {
    const products = await axios.get('/products');

    return products;
  } catch (error) {
    return {
      title: 'Error',
      message: 'There was an error while fetching products',
    };
  }
};
