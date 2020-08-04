import React from 'react';
import './Backdrop.scss';

const Backdrop = () => {
  return (
    <div
      className="backdrop"
      onClick={toggleHamburger}
    ></div>
  );
}

export default Backdrop;