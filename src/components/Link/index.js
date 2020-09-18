import React from 'react';
import Icon from 'components/Icon';

import './styles.css';

const Link = ({ href, icon, children }) => {
  return (
    <a className="menu-link" href={href}>
      <span>
        { icon ? (
          <Icon {...icon} />
        ) : null }
        { children }
      </span>
    </a>
  )
};

export default Link;