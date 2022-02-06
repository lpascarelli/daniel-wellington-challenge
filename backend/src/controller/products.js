const productService = require('../services/products');
const imageService = require('../services/images');
const transformer = require('../utils/transformer');

exports.getProducts = async (_, res) => {
  const products = await productService.get();
  const images = await imageService.get();

  if (products.title) {
    return res.status(500).send({
      ok: false,
      error: {
        title: products.title,
        message: products.message,
      },
    });
  }

  if (images.title) {
    return res.status(500).send({
      ok: false,
      error: {
        title: images.title,
        message: images.message,
      },
    });
  }

  const finalProducts = transformer.transformProducts(
    products.data.products,
    images.data.images
  );

  return res.send({
    ok: true,
    products: finalProducts,
  });
};
