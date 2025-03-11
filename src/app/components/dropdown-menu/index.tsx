import React, {useRef, useState} from 'react';
import {StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {DropdownMenuProps, DropdownMenuStylesProps} from './types/types';
import rs from '@styles/responsiveSize.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
declare global {
  var showDropMenu: ({
    show,
    children,
    containerStyle,
    position,
    top,
    left,
    bottom,
    right,
    bgColor,
    shadowColor,
  }: DropdownMenuProps) => void;
}

const DropdownMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-20)).current;
  const dropdownRef = useRef<DropdownMenuProps | null>(null);
  const colors = useTheme().colors as Colors;
  const toggleDropdown = () => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -20,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setIsVisible(false));
    } else {
      setIsVisible(true);
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };
  global.showDropMenu = ({
    children,
    show,
    containerStyle,
    position,
    top,
    left,
    bottom,
    right,
    bgColor,
    shadowColor,
  }) => {
    if (show) {
      dropdownRef.current = {
        children,
        containerStyle,
        position,
        top,
        show,
        bgColor,
        left,
        bottom,
        right,
        shadowColor,
      };
      toggleDropdown();
    } else {
      dropdownRef.current = null;
      toggleDropdown();
    }
  };
  const styles = dropdownStyles({
    top: dropdownRef.current?.position?.top ?? dropdownRef.current?.top,
    left: dropdownRef.current?.position?.left ?? dropdownRef.current?.left,
    bottom:
      dropdownRef.current?.position?.bottom ?? dropdownRef.current?.bottom,
    right: dropdownRef.current?.position?.right ?? dropdownRef.current?.right,
    bgColor: dropdownRef.current?.bgColor || colors.gray9,
    shadowColor: dropdownRef.current?.shadowColor || colors.shadow,
  });
  return isVisible ? (
    <TouchableOpacity
      style={styles.overlay}
      activeOpacity={1}
      onPress={toggleDropdown}>
      <Animated.View
        style={[
          styles.dropdown,
          {opacity, transform: [{translateY}]},
          dropdownRef.current?.containerStyle,
        ]}>
        {dropdownRef.current?.children}
      </Animated.View>
    </TouchableOpacity>
  ) : null;
};

const dropdownStyles = ({
  top,
  left,
  right,
  bottom,
  bgColor,
  shadowColor,
}: DropdownMenuStylesProps) =>
  StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: top ?? undefined,
      left: left ?? undefined,
      bottom: bottom ?? undefined,
      width: '100%',
      height: '100%',
    },
    dropdown: {
      position: 'absolute',
      top: 50,
      right: right || 20,
      backgroundColor: bgColor,
      borderRadius: 16,
      shadowColor: shadowColor,
      shadowOffset: {width: 0, height: 20},
      shadowOpacity: 0.15,
      shadowRadius: 50,
      elevation: 10,
      paddingVertical: 10,
      minWidth: rs(180),
    },
  });

export default DropdownMenu;
