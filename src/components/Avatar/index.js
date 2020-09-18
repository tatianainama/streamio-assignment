import React from 'react';

import Placeholder from './default.jpg';

import './styles.css';

const Avatar = ({src}) => {
  return (
    <div className="avatar" style={{
      backgroundImage: `url(${src || Placeholder})`
    }}>

    </div>
  )
}

export default Avatar;