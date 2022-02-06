import { useState, useEffect } from 'react';

import axios from '../config/axios';

import Loading from '../components/UI/Loading/Loading';
import Product from '../components/Product/Product';

import classes from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/daniel-wellington-products')
      .then((response) => {
        if (!response.data.ok) {
          throw new Error(response.data.error.message);
        }
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(`Error: ${error.message}`);
        setIsLoading(false);
      });
  }, []);

  const productsResult = error ? (
    <p style={{ color: 'red' }}>{error}</p>
  ) : (
    products.map((product, index) => (
      <Product
        key={`${product.name}-${product.index}`}
        image={product.image}
        name={product.name}
        color={product.color}
        price={product.price}
      />
    ))
  );

  return (
    <main className={classes.body}>
      {isLoading && <Loading />}
      {!isLoading && productsResult}
    </main>
  );
};

export default Products;
