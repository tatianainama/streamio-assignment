import React from 'react';

import { Icon } from '@rmwc/icon';
import CustomIcons from 'icons';

import '@rmwc/icon/styles';

export default ({ custom, size = 'small', ...props}) => {
  const icon = {
    size,
    icon: custom ? CustomIcons[custom] : props.icon
  }
  return (
    <Icon icon={icon} {...props}/>
  )
};