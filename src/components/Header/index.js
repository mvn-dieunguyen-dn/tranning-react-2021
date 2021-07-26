import React from 'react';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink, Route } from 'react-router-dom';
import PrivateRoute from '../../core/guard/PrivateRoute';

function Header(props) {
  return (
    <header className="page-header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="https://i0.wp.com/blackpinkupdate.com/wp-content/uploads/2020/06/BLACKPINK-Logo-Pink-PNG.jpg?ssl=1" alt="logo"/>
        </Link>
        <nav className="page-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="header-account">
          <li>
            <NavLink to="/auth/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/account"><FaUserAlt /></NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;