import {StyleSheet, Text, View, Animated, Easing} from 'react-native';
import React from 'react';
import {typographies} from '@styles/typographies.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import rs from '@styles/responsiveSize.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import TimeIcon from '@icons/Time.icon';
import dayjs from 'dayjs';
import RippleButton from '@components/button/ripple/CustomRipple.c';

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
    <View style={[style.container]}>
      <View>
        <View
          style={[
            globalStyles.rowBetween,
            globalStyles.flexShrink1,
            {alignItems: 'flex-start'},
          ]}>
          <Text
            style={[
              typographies(colors).bodyLargeBold,
              globalStyles.flexShrink1,
            ]}
            numberOfLines={1}>
            {item.title} ({item.dosage})
          </Text>
          <View
            style={[
              globalStyles.alignJustifyCenter,
              globalStyles.flexRow,
              {
                borderRadius: rs(16),
                gap: rs(4),
              },
            ]}>
            <TimeIcon width={18} height={18} />
            <Text style={typographies(colors).bodyMediumSemibold}>
              {dayjs(item.time).format('hh:mm A')}
            </Text>
          </View>
        </View>
        <Text style={typographies(colors).bodyMediumRegular} numberOfLines={1}>
          {item.description}
        </Text>
      </View>

      <View style={globalStyles.rowBetween}>
        <Text style={typographies(colors).bodyMediumBold}>
          Morning 1 Tablet
        </Text>
        <RippleButton borderRadius={56}>
          <View style={style.takeButton}>
            <Text style={typographies(colors).bodyLargeSemibold}>Taken</Text>
          </View>
        </RippleButton>
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
      justifyContent: 'space-between',
    },
    takeButton: {
      ...customPadding(10, 15, 10, 15),
      borderRadius: rs(56),
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.primary,
    },
  });
