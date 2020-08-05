import React from 'react';

const ScrollToAnchor = (props) => {
  const { anchorSelector, children, ...otherProps } = props;

  const onClick = () => {
    const scrollAnchor = document.querySelector(anchorSelector);
    scrollAnchor.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <button onClick={onClick} {...otherProps}>{children}</button>
  );
}

export default ScrollToAnchor;