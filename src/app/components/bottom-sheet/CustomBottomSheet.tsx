import {useTheme} from '@react-navigation/native';
import useBottomSheetHook from './useBottomSheet.hook';
import {Colors} from '@styles/colors.style.asset';
import React, {forwardRef} from 'react';
import {Animated, Pressable, View} from 'react-native';
import bottomSheetStyles from './style.component';
import CustomStatusBar from '@components/status-bar/CustomStatusBar.component';
import {BottomSheerRefObjectProps, BottomSheetProps} from './interface';

const CustomBottomSheet = forwardRef<
  BottomSheerRefObjectProps,
  BottomSheetProps
>(({Component, backDropHandler, extraProps, style, topBar}, ref) => {
  const colors = useTheme().colors as Colors;
  const {positionRef, opacityRef, handleHideComponent, panResponder} =
    useBottomSheetHook({
      ref,
      backDropHandler,
      extraProps,
    });

  const animatedStyles = {
    backdrop: {
      opacity: opacityRef,
    },
    content: {
      transform: [{translateY: positionRef}],
    },
  };

  return (
    <View style={bottomSheetStyles(colors).container}>
      <CustomStatusBar showHeader={false} />
      <Animated.View
        style={[bottomSheetStyles(colors).backdrop, animatedStyles.backdrop]}>
        <Pressable
          onPress={handleHideComponent}
          style={bottomSheetStyles(colors).backdropHandler}
        />
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            bottomSheetStyles(colors).viewContainer,
            animatedStyles.content,
            style,
          ]}>
          {topBar && <View style={bottomSheetStyles(colors).topBar} />}
          {Component && <Component {...extraProps?.componentProps} />}
        </Animated.View>
      </Animated.View>
    </View>
  );
});

export default CustomBottomSheet;
