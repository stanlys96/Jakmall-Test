import React from 'react';
import Pressable from '../Pressable';

export const getSize = (size) => {
  switch (size) {
    case 'lg':
      return {
        height: 'h-14',
        radius: 'rounded-xl',
        padding: 'px-4',
        font: 'font-normal',
        text: 'text-base',
      };

    case 'sm':
      return {
        height: 'h-8',
        radius: 'rounded-lg',
        padding: 'px-2',
        font: 'font-normal',
        text: 'text-sm',
      };

    case 'md':
    default:
      return {
        height: 'h-12',
        radius: 'rounded-xl',
        padding: 'px-4',
        font: 'font-normal',
        text: 'text-base',
      };
  }
};

const BaseButton = ({ children, showBounce = true, smallBounce = false, ...props }) => (
  <Pressable {...props} smallBounce={smallBounce} bounce={showBounce}>
    {children}
  </Pressable>
);

export default BaseButton;
