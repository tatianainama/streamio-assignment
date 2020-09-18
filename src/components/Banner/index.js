import React from 'react';

import './styles.css';

const Banner = ({
  title,
  subTitle,
  img,
  support,
}) => {
  
  const bgStyles = img ? {
    backgroundImage: `url(${img})`
  } : null;

  return (
    <div className="banner" style={bgStyles}>
      <div className="banner__content">
        <div className="banner__content__title">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        <div className="banner__content__support">
          { support }
        </div>
      </div>
    </div>
  )
}

export default Banner