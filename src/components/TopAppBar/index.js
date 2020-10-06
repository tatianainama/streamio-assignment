import React from 'react';

import Input from 'components/Input';
import IconButton from 'components/IconButton';
import Avatar from 'components/Avatar';

import './styles.css';

const TopAppBar = ({ children }) => {
  return (
    <div className="top-app-bar">
      <div className="top-app-bar__search">
        <Input placeholder="Search for query" trailingIcon="search"/>
      </div>
      <div className="top-app-bar__actions">
        <div className="top-app-bar__actions__notifications">
          <IconButton icon="mail_outline"/>
          {
            children
          }
        </div>
        <div className="top-app-bar__actions__settings">
          <Avatar/>
        </div>
      </div>
    </div>
  )
};

export default TopAppBar;
