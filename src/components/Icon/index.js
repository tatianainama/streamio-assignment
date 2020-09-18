import React from 'react';

import { Icon } from '@rmwc/icon';
import CustomIcons from 'icons';
import { ReactSVG } from 'react-svg';

import '@rmwc/icon/styles';
import './styles.css';

export default ({ custom, size = 'small', ...props}) => {
  const customIcon = custom ? {
    strategy: 'component',
    icon: (
      <ReactSVG
        src={CustomIcons[custom]}
        className='custom-icon'
      />
    )
  } : {};
  
  const icon = {
    size,
    icon: props.icon,
    ...customIcon
  }

  return (
    <Icon icon={icon} {...props}/>
  )
};