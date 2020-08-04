import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger/Hamburger';
import HamburgerNav from './Hamburger/HamburgerNav/HamburgerNav';
import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [state, setState] = useState({
    hamburgerOpen: false
  });

  const { hamburgerOpen } = state;

  const toggleHamburger = () => {
    setState({ hamburgerOpen: !hamburgerOpen });
  }

  return (
    <Fragment>
      <header id="header">
        <Link to="/" className="home">
          <img src={logo} alt="Voucherim" />
        </Link>

        <nav className="menu">
          <Link to="/faq" className="faq">שאלות נפוצות</Link>
          <Link to="/about" className="about">מי אנחנו</Link>
          <a href="https://voucherim.com/v/v.dll/v/clubhouse/contact?lang=2" className="contact">צרו קשר</a>
        </nav>

        <nav className="actions">
          <a href="https://voucherim.com/v/v.dll/v/clubhouse?lang=2" className="signin">כניסה</a>
          <a href="https://voucherim.com/v/v.dll/v/clubhouse/signup?lang=2&dst=DST.000B3FCE.00008224.0064"
            className="signup">הרשמה</a>
        </nav>

        <Hamburger
          open={hamburgerOpen}
          toggleHamburger={toggleHamburger}
        />
      </header>
      <HamburgerNav
        open={hamburgerOpen}
      />
      {hamburgerOpen &&
        <div
          className="backdrop"
          onClick={toggleHamburger}
        ></div>
      }
    </Fragment>
  );
}

export default Header;