import React, {useLayoutEffect, useRef, useState} from 'react';
import SplashContainer from '@layouts/SplashContainer.layout';
import {customPadding} from '@styles/global.style.asset';
import {Easing, Animated, StyleSheet, View} from 'react-native';
import rs from '@styles/responsiveSize.style.asset';
import {useNavigation} from '@react-navigation/native';
import {screens} from '@routes/routeName.routes';
import Loader from '@components/loader/Loader.c';
import LogoIcon from '@icons/Logo.icon';

const SplashLogo: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  const scale = useRef(new Animated.Value(0)).current;
  const scale2 = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    if (isAnimating) {
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
          useNativeDriver: true,
        }),
      ]).start();
    }
    setTimeout(() => {
      Animated.timing(scale2, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: true,
      }).start();
    }, 500);

    // Stop animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAnimating, scale, scale2]);


  const animatedStyle2 = {
    transform: [{scale: scale2}],
  };

  return (
    <View style={styles.logoContainer}>
      <Animated.View style={[animatedStyle2, styles.logo]}>
        <LogoIcon />
      </Animated.View>
    </View>
  );
};
const SplashLoader = () => {
  const [showLoader, setShowLoader] = useState(false);
  useLayoutEffect(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 2000);
  }, []);
  return showLoader && <Loader />;
};
const SplashIndex: React.FC = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    setTimeout(() => {
      navigation.navigate(screens.letsIn as never);
    }, 3000);
  }, [navigation]);
  return (
    <SplashContainer containerStyle={{...customPadding(0, 20, 0, 20)}}>
      <SplashLogo />
      <SplashLoader />
    </SplashContainer>
  );
};

export default SplashIndex;

const styles = StyleSheet.create({
  logoContainer: {
    position: 'relative',
    justifyContent: 'center',
    height: '92%',
    marginTop: '-15%',
  },
  logo: {position: 'absolute', alignSelf: 'center'},
  loader: {
    width: rs(60),
    height: rs(60),
    alignSelf: 'center',
  },
});
