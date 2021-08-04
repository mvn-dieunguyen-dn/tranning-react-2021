import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-page">
          <div className="header-left">
            <img className="img-logo" src="https://mvn-dieunguyen-dn.github.io/promize-web-deploy/assets/img/logo.png" alt="logo" />
            <ul className="navbar">
              <li className="nav-item"><a className="nav-item-link" href="#">Menu</a></li>
              <li className="nav-item"><a className="nav-item-link" href="#">Product</a></li>
              <li className="nav-item"><a className="nav-item-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-item-link" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-item-link" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="header-right">
            <a className="header-text" href="#">Sign In</a>
            <a className="header-text" href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header;
