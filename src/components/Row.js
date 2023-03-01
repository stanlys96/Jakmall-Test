import React from 'react';
import { View } from 'react-native';

import tw from '../styles';

const Row = ({ children, style }) => {
  const styles = [tw`flex-row items-center justify-between`, style];

  return <View style={styles}>{children}</View>;
};

export default Row;
