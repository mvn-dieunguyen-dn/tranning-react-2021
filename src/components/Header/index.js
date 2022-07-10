import React from 'react';
import { FaHeart, FaUserAlt, FaFacebook } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import zalo from './zalo.png'
import fb2 from './fb2.png'
import mail3 from './mail3.png'


function Header(props) {
  const favs = useSelector((state) => state.fav.value)

  return (
    <header className="page-header">
      <div className="header-page-top">
        <a class="header-envato_market" href="/">IELTS NHAN LE</a>
        {/* <a class="header-buy-now e-btn--3d -color-primary" href="/">Buy now</a> */}
        <div className='social-network'>
          {/* <a href='https://www.facebook.com/nhanle9321' target="_blank" >
            <FaFacebook />
          </a> */}
          <a href='https://www.facebook.com/nhanle9321' target="_blank" >
            <img src={fb2} style={{width:'50px', paddingBottom: '4px'}} />
          </a>
          {/* <a href='https://www.facebook.com/nhanle9321' target="_blank" >
            <img src={zalo} style={{width:'55px'}} />
          </a> */}
          <a href="mailto:nhanle7501@@gmail.com" target="_blank">
            <img src={mail3} style={{width:'33px', paddingBottom: '12px'}} />
          </a>
        </div>
      </div>
      {/* <div className="header-page-bottom">
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
      </div> */}
    </header>
  );
}

export default Header;