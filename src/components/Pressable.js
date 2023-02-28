import React from 'react';
import { Pressable as RNPressable, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import { bounce as bounceTransform } from '../libs/animation'

const Pressable = ({ children, bounce = true, smallBounce = true, style, ...props }) => {
  const pressed = useSharedValue(0);
  const styles = useAnimatedStyle(() => ({
    transform: bounceTransform(pressed.value, smallBounce),
  }));

  const onPressIn = () => {
    'worklet';

    pressed.value = true;
  };
  const onPressOut = () => {
    'worklet';

    pressed.value = false;
  };

  if (!bounce) {
    return (
      <RNPressable {...props}>
        <Animated.View style={[style, styles]}>{children}</Animated.View>
      </RNPressable>
    );
  }

  return (
    <TouchableWithoutFeedback {...props} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View style={[style, styles]}>{children}</Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Pressable;
