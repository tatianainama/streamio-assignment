import React from 'react';

import './styles.css';

const Chip = ({children}) => {
  return (
    <span className="chip"> {children} </span>
  )
}

export default Chip;