import LoaderIcon from '@icons/Loader.icon';
import rs from '@styles/responsiveSize.style.asset';
import React, {useLayoutEffect} from 'react';
import {useRef} from 'react';
import {Animated, Easing, StyleProp, StyleSheet, ViewStyle} from 'react-native';
interface props {
  style?: StyleProp<ViewStyle>;
}
const Loader: React.FC<props> = ({style}) => {
  const spinAnim = useRef(new Animated.Value(0));
  const interpolateRotation = spinAnim.current?.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const animatedStyle = {
    transform: [{rotate: interpolateRotation}],
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      Animated.loop(
        Animated.timing(spinAnim.current, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ).start();
    }, 0);
  }, []);
  return (
    <Animated.View style={[styles.loader, animatedStyle, style]}>
      <LoaderIcon />
    </Animated.View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    width: rs(60),
    height: rs(60),
    alignSelf: 'center',
  },
});
