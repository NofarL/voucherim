import React from 'react';
import { Link } from 'react-router-dom';
import youtube from '../../assets/icons/youtube.png';
import facebook from '../../assets/icons/facebook.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <nav className="menu">
        <Link to="/faq">שאלות נפוצות</Link>
        |
          <Link to="/about">מי אנחנו</Link>
        |
          <Link to="/thanks">תודות</Link>
        |
          <a href="https://voucherim.com/v/v.dll/v/clubhouse/contact?lang=2">צרו קשר</a>
      </nav>
      <nav className="social">
        <a target="_blank" rel="noopener noreferrer" className="youtube" href="https://www.youtube.com/channel/UC-SDyAnWMP_mMBgdDItrqqA">
          <img src={youtube} alt="YouTube" />
        </a>
        <a target="_blank" rel="noopener noreferrer" className="facebook" href="https://www.facebook.com/voucherim/">
          <img src={facebook} alt="Facebook" />
        </a>
      </nav>
      <div className="with-love">
        Made with &#9825; by <a href="http://www.nofarl.com" rel="noopener noreferrer" target="_blank">NofarL</a>
      </div>
    </footer>
  );
}

export default Footer;