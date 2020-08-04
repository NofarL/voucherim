import React from 'react';
import { Link } from 'react-router-dom';
import './HamburgerNav.scss';

const HamburgerNav = ({ open }) => {
  return (
    <nav className={`hamburger-nav ${open ? 'open' : ''}`}>
      <a href="https://voucherim.com/v/v.dll/v/clubhouse?lang=2" className="signin">כניסה</a>
      <a href="https://voucherim.com/v/v.dll/v/clubhouse/signup?lang=2&dst=DST.000B3FCE.00008224.0064"
        className="signup">הרשמה</a>
      <Link to="/faq" className="faq">שאלות נפוצות</Link>
      <Link to="/about" className="about">מי אנחנו</Link>
      <a href="https://voucherim.com/v/v.dll/v/clubhouse/contact?lang=2" className="contact">צרו קשר</a>
    </nav>
  );
}

export default HamburgerNav;