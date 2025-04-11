import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Svg, {Rect} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

interface BarChartProps {
  data: {value: number; day: string; color: string}[];
  maxValue: number;
  width: number;
  height: number;
  onBarPress?: (index: number) => void;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  maxValue,
  width,
  height,
  onBarPress,
}) => {
  const barWidth = width / data.length - 20;

  // Create individual shared values
  const progress1 = useSharedValue(0);
  const progress2 = useSharedValue(0);
  const progress3 = useSharedValue(0);
  const progress4 = useSharedValue(0);
  const progress5 = useSharedValue(0);

  const progressValues = React.useMemo(
    () =>
      [progress1, progress2, progress3, progress4, progress5].slice(
        0,
        data.length,
      ),
    [data.length, progress1, progress2, progress3, progress4, progress5],
  );

  const animatedProps1 = useAnimatedProps(() => ({
    y: height * (1 - progress1.value),
    height: height * progress1.value,
  }));
  const animatedProps2 = useAnimatedProps(() => ({
    y: height * (1 - progress2.value),
    height: height * progress2.value,
  }));
  const animatedProps3 = useAnimatedProps(() => ({
    y: height * (1 - progress3.value),
    height: height * progress3.value,
  }));
  const animatedProps4 = useAnimatedProps(() => ({
    y: height * (1 - progress4.value),
    height: height * progress4.value,
  }));
  const animatedProps5 = useAnimatedProps(() => ({
    y: height * (1 - progress5.value),
    height: height * progress5.value,
  }));

  const animatedProps = React.useMemo(
    () =>
      [
        animatedProps1,
        animatedProps2,
        animatedProps3,
        animatedProps4,
        animatedProps5,
      ].slice(0, data.length),
    [
      data.length,
      animatedProps1,
      animatedProps2,
      animatedProps3,
      animatedProps4,
      animatedProps5,
    ],
  );

  useEffect(() => {
    data.forEach((item, index) => {
      if (progressValues[index]) {
        progressValues[index].value = withTiming(item.value / maxValue, {
          duration: 800,
        });
      }
    });
  }, [data, maxValue, progressValues]);

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {/* Background bar */}
            <Rect
              x={index * (barWidth + 20)}
              y={0}
              width={barWidth}
              height={height}
              fill="#E0E0E0"
              rx={5}
            />
            {/* Clickable Animated bar */}
            <Pressable
              onPress={() => onBarPress?.(index)}
              style={{position: 'absolute', left: index * (barWidth + 20)}}>
              {animatedProps[index] && (
                <AnimatedRect
                  x={0}
                  width={barWidth}
                  animatedProps={animatedProps[index]}
                  fill={item.color}
                  rx={5}
                />
              )}
            </Pressable>
            {/* Value labels */}
            {progressValues[index] && (
              <Text
                style={[
                  styles.valueLabel,
                  {
                    left: index * (barWidth + 20) + barWidth / 2 - 10,
                    bottom: height * progressValues[index]?.value + 5,
                  },
                ]}>
                {`${(item.value / 1000).toFixed(1)}k`}
              </Text>
            )}
            {/* Day labels */}
            <Text
              style={[
                styles.dayLabel,
                {
                  left: index * (barWidth + 20) + barWidth / 2 - 10,
                  top: height + 5,
                },
              ]}>
              {item.day}
            </Text>
          </React.Fragment>
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueLabel: {
    position: 'absolute',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  dayLabel: {
    position: 'absolute',
    fontSize: 12,
    color: '#888',
  },
});

export default BarChart;
