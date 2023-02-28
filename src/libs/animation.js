import { Easing, withTiming, Keyframe } from 'react-native-reanimated';

const elastic = Easing.elastic(1.5);
const bezier = Easing.bezier(0.4, 0, 0.2, 1);

export const bounce = (pressed, small) => {
  'worklet';

  const down = small ? 0.98 : 0.8;
  const scale = pressed
    ? withTiming(down, { duration: 60, easing: bezier })
    : withTiming(1, { duration: 200, easing: elastic });

  return [{ scale }];
};

export const check = new Keyframe({
  0: {
    transform: [{ scale: 1.1 }],
  },
  40: {
    transform: [{ scale: 0.9 }],
  },
  100: {
    transform: [{ scale: 1 }],
  },
});

export const uncheck = new Keyframe({
  0: {
    transform: [{ scale: 0.9 }],
  },
  40: {
    transform: [{ scale: 1.1 }],
  },
  100: {
    transform: [{ scale: 1 }],
  },
});
