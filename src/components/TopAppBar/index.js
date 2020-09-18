import React from 'react';

import './styles.css';

const TopAppBar = () => {
  return (
    <div className="top-app-bar">
      <div className="top-app-bar__search">
        <input></input>
      </div>
      <div className="top-app-bar__actions">
        <div>icon1</div>
        <div>icon2</div>
        <div>avatar</div>
      </div>
    </div>
  )
};

export default TopAppBar;
