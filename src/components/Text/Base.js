import React from 'react';
import { Text } from 'react-native';

import tw from '../../styles';

const BaseText = ({
  children,
  style,
  font = 'font-normal',
  size = 'text-base',
  color = 'text-white',
  underline = false,
  uppercase = false,
  ...props
}) => {
  const styles = [
    tw.style(font, size, color, underline && 'underline', uppercase && 'uppercase'),
    style,
  ];

  return (
    <Text {...props} style={styles}>
      {children}
    </Text>
  );
};

export default BaseText;
