import React from 'react';

import Icon from 'components/Icon';
import './styles.css';

const Badge = ({ icon, primary, secondary }) => (
  <div className="badge">
    <div className="badge__icon">
      <Icon icon={icon} />
    </div>
    <div className="badge__content">
      <div className="badge__content__secondary">
        <p>{secondary}</p>
      </div>
      <div className="badge__content__primary">
        <h5>{primary}</h5>
      </div>
    </div>
  </div>
);

export default Badge;