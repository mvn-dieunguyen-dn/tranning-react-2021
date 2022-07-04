import React from 'react';
import { FaHeart, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'


function Header(props) {
  const favs = useSelector((state) => state.fav.value)

  return (
    <header className="page-header">
      <div className="header-page-top">
        <a class="header-envato_market" href="/">Envato Market</a>
        <a class="header-buy-now e-btn--3d -color-primary" href="/">Buy now</a>
      </div>
      <div className="header-page-bottom">
        <div className="container">
          <Link className="page-title" to="/">
            IELTS NHAN LE
          </Link>
          <ul className="header-account">
            <li>
              <NavLink to="/">
                <FaHeart />
                <span>
                  { !!favs.length && favs.length }
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/login">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/account"><FaUserAlt /></NavLink>
            </li>
            <li>
              <NavLink to="/auth/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;