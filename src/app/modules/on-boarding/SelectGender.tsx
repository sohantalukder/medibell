import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Container from '@layouts/Container.layout';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import Animated, {FadeInDown} from 'react-native-reanimated';

const SelectGender = () => {
  const colors = useTheme().colors as Colors;
  const genderArray = ['Male', 'Female', 'Other'];
  return (
    <Container ph={20}>
      <Text
        style={[typographies(colors).bodyLargeSemibold, styles.skipText]}
        onPress={() => console.log('object')}>
        Skip
      </Text>
      <Text>Select Your Gender</Text>
      <Animated.View>
        {genderArray.map((item, index) => (
          <Animated.View
            entering={FadeInDown.delay(index * 100)
              .springify()
              .damping(10)}
            key={index}>
            <Text>{item}</Text>
          </Animated.View>
        ))}
      </Animated.View>
    </Container>
  );
};

export default SelectGender;

const styles = StyleSheet.create({
  skipText: {
    textAlign: 'right',
  },
});
