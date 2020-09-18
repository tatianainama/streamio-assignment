import React from 'react';

import './styles.css';

const Link = ({ href, children }) => {
  return (
    <a className="menu-link" href={href}>{children}</a>
  )
};

export default Link;