import React from 'react';
import Icon from 'components/Icon';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Link = ({ href, icon, children }) => {
  return (
    <NavLink className="menu-link" to={href} activeClassName="menu-link--active">
      <span>
        { icon ? (
          <Icon {...icon} />
        ) : null }
        { children }
      </span>
    </NavLink>
  )
};

export default Link;