import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React from 'react';
import {typographies} from '@styles/typographies.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import rs from '@styles/responsiveSize.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(40);
  const colors = useTheme().colors as Colors;
  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();
  const style = styles(colors);
  return (
    <View style={style.container}>
      <View>
        <View style={[globalStyles.rowBetween, {alignItems: 'flex-start'}]}>
          <Text style={typographies(colors).bodyLargeBold} numberOfLines={1}>
            {item.title} ({item.dosage})
          </Text>
          <View
            style={[
              globalStyles.alignJustifyCenter,
              {
                ...customPadding(0, 5, 5, 5),
                borderRadius: rs(16),
              },
            ]}>
            <Text style={typographies(colors).bodyLargeBold}>01:29</Text>
            <Text style={typographies(colors).bodyMediumBold}>Mins</Text>
          </View>
        </View>

        <Text style={typographies(colors).bodyMediumBold}>
          Morning 1 Tablet
        </Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.whiteDark,
      width: '100%',
      padding: rs(16),
      borderRadius: rs(16),
    },
  });
