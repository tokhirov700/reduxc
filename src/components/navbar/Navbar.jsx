import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <h1>Redux Toolkit</h1>
      <hr />
      <div className="wrapper">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
      </div>
    </header>
  )
}

export default Navbar