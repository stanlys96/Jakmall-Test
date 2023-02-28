import React from 'react';
import Svg from 'react-native-svg';

import tw from '../styles';

// Viewbox: 0 0 24 24, fill: none, stroke: color
const Base = ({ children, style, color = 'text-white', fill = 'none' }) => {
  const styles = [tw`w-6 h-6`, style];

  return (
    <Svg viewBox="0 0 24 24" fill={fill} color={tw.color(color)} style={styles}>
      {children}
    </Svg>
  );
};

export default Base;
