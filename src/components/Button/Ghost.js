import React from 'react';
import tw from '../../styles';
import { Text } from '../Text';
import Base, { getSize } from './Base';

const getColor = (variant) => {
  switch (variant) {
    case 'primary':
    default:
      return { text: 'text-sky-500' };
  }
};

const Ghost = ({ children, variant, size, title, underline, disabled, style, ...props }) => {
  const sizes = getSize(size);
  const colors = getColor(variant);
  const styles = Object.assign(
    tw.style(tw`bg-transparent`, sizes.radius, disabled && 'opacity-50'),
    style
  );

  return (
    <Base {...props} disabled={disabled} style={styles}>
      {!children ? (
        <Text
          numberOfLines={1}
          underline={underline}
          font={sizes.font}
          size={sizes.text}
          color={colors.text}
        >
          {title}
        </Text>
      ) : (
        children
      )}
    </Base>
  );
};

export default Ghost;
