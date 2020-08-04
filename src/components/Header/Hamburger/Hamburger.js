import React from 'react';
import './Hamburger.scss';

const Hamburger = ({ open, toggleHamburger }) => {
  return (
    <div className={`hamburger ${open ? 'open' : ''}`}>
      <button className="toggle" onClick={toggleHamburger}>
        <span></span>
      </button>
    </div>
  );
}

export default Hamburger;