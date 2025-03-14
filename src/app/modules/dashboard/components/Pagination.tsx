import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';

const {width} = Dimensions.get('screen');

const Pagination = ({
  data,
  scrollX,
  index,
}: {
  data: any;
  scrollX: any;
  index: any;
}) => {
  const colors = useTheme().colors as Colors;
  const style = styles(colors);
  return (
    <View style={style.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: [
            hexOpacityToColor(colors.primary, 0.4),
            colors.primary,
            hexOpacityToColor(colors.primary, 0.4),
          ],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              style.dot,
              {width: dotWidth, backgroundColor},
              idx === index && style.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginHorizontal: 3,
      backgroundColor: hexOpacityToColor(colors.primary, 0.4),
    },
    dotActive: {
      backgroundColor: colors.primary,
    },
  });
