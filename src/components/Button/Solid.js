import React from 'react';
import tw from '../../styles';
import { Text } from '../Text';
import Base, { getSize } from './Base';

const getColor = (variant) => {
  switch (variant) {
    case 'primary':
    default:
      return { bg: 'bg-sky-300' };
  }
};

const Solid = ({ children, title, variant, size, disabled, style, textStyle, ...props }) => {
  const sizes = getSize(size);
  const colors = getColor(variant);
  const styles = Object.assign(
    tw.style(
      tw`flex-row items-center justify-center`,
      sizes.height,
      sizes.radius,
      sizes.padding,
      colors.bg,
      disabled && 'opacity-50'
    ),
    style
  );

  return (
    <Base {...props} disabled={disabled} style={styles}>
      {!children ? (
        <Text
          numberOfLines={1}
          font={sizes.font}
          size={sizes.text}
          color={colors.text}
          style={textStyle}
        >
          {title}
        </Text>
      ) : (
        children
      )}
    </Base>
  );
};

export default Solid;
