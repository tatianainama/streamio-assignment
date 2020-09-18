import React from 'react';
import classNames from 'classnames';

import './styles.css';

const Card = ({
  align = "left",
  title,
  className,
  children,
}) => {
  const cardClassNames = classNames(
    'card',
    {
      [`card--${align}`]: true,
    },
    className,
  );

  return (
    <div className={cardClassNames}>
      <div className="card__title">
        <h3>{title}</h3>
      </div>
      <div className="card__content">
        { children }
      </div>
    </div>
  )
}

export default Card;