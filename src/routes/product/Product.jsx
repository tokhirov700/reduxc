import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../utils/modal/Modal';
import './Product.css';

const Product = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const modalRef = useRef();

  const handleDelete = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', product: item });
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">No items in cart.</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => modalRef.current.show(item)}>Delete</button>
          </div>
        ))
      )}
      <Modal ref={modalRef} onDelete={handleDelete} />
    </div>
  );
};

export default Product;
