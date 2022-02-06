const axios = require('../config/axios');

exports.get = async () => {
  try {
    const images = await axios.get('/images');

    return images;
  } catch (error) {
    return {
      title: 'Error',
      message: 'There was an error while fetching images',
    };
  }
};
