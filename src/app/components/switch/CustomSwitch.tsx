/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {nativeDriver} from '../../assets/styles/properties.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const CustomSwitch: React.FC<{
  value?: boolean;
  onPress?: () => void;
  activeColor?: string;
}> = ({value = false, activeColor = '', onPress = () => {}}) => {
  const colors = useTheme().colors as Colors;
  const valueRef = useRef(false);
  const [isActive, setIsActive] = useState(false || value);
  const translateRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setIsActive(value);
    value ? handleSwitch(true) : handleSwitch(false);
  }, [value]);

  const handleSwitch = (flag = false) => {
    Animated.timing(translateRef, {
      toValue: flag ? 21 : 0,
      duration: 300,
      delay: 100,
      useNativeDriver: nativeDriver(),
    }).start(() => {
      valueRef.current = flag;
    });
  };

  const backgroundColor = translateRef.interpolate({
    inputRange: [0, 21],
    outputRange: [
      colors.gray4 as string,
      activeColor || (colors.primary as string),
    ],
    extrapolate: 'clamp',
  });
  const styles = switchStyles(colors);
  return (
    <Pressable
      onPress={() => {
        setIsActive(!isActive);
        handleSwitch(!isActive);
        onPress();
      }}>
      <Animated.View style={[styles.containerStyle, {backgroundColor}]}>
        <Animated.View
          style={[
            styles.circleStyle,
            {backgroundColor: colors.white},
            {
              transform: [
                {
                  translateX: translateRef,
                },
              ],
            },
            styles.shadowValue,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

const switchStyles = (colors: Colors) =>
  StyleSheet.create({
    circleStyle: {
      width: 20,
      height: 20,
      borderRadius: 20,
    },
    containerStyle: {
      width: 44,
      paddingVertical: 2,
      paddingHorizontal: 2,
      borderRadius: 100,
    },
    shadowValue: {
      shadowColor: colors.gray0,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
  });

export default CustomSwitch;
