import React from 'react';

import Icon from 'components/Icon';

import './styles.css';

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <h3>
        <Icon icon="construction"/><br/>
        Section under construction!<br/>
        <small>Please try again later</small>
      </h3>
    </div>
  )
};

export default UnderConstruction;