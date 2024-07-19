import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../home/Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_PRODUCTS', products: data }));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    const isInCart = cart.some(item => item.id === product.id);
    if (!isInCart) {
      dispatch({ type: 'ADD_TO_CART', product });
    }
  };

  return (
    <div className="product-container">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title.slice(0,10)}</h3>
          <p>{product.description.slice(0,15)}</p>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
