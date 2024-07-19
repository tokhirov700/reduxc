import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header>
      <div className="wrapper">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/product" activeClassName="active">Product</NavLink>
      </div>
      <hr />
    </header>
  );
};

export default Navbar;
