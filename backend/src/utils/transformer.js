exports.transformProducts = (productsGetted, imagesGetted) => {
  const transformer = [];
  const skuKeys = productsGetted.map((product) => product.sku);

  productsGetted.forEach((product) => {
    if (skuKeys.includes(product.sku)) {
      const partialProduct = {
        name: product.name,
        color: product.color.id,
        price: `${product.price.amount}${product.price.symbol}`,
        images: [...imagesGetted[product.sku]],
      };

      transformer.push(partialProduct);
    }
  });

  return transformer;
};
