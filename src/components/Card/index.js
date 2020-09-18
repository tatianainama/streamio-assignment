import React from 'react';
import classNames from 'classnames';

import './styles.css';

const Card = ({
  align = "left",
  color = "default",
  bordered,
  title,
  subTitle,
  className,
  children,
}) => {
  const cardClassNames = classNames(
    'card',
    {
      [`card--${align}`]: true,
      [`card--${color}`]: true,
      'card--bordered': bordered,
    },
    className,
  );

  return (
    <div className={cardClassNames}>
      {
        title ? (
        <div className="card__title">
          <h3>{title}</h3>
          {
            subTitle ? (
              <p>{subTitle}</p>
            ) : null
          }
        </div>
        ) : null
      }
      <div className="card__content">
        { children }
      </div>
    </div>
  )
}

export default Card;