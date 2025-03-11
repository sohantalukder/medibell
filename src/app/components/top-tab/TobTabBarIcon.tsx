import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';

interface _topTabBarIconInterface {
  name: string;
  focused: boolean;
}

const TobTabBarIcon: React.FC<_topTabBarIconInterface> = ({name, focused}) => {
  return (
    <View style={[styles.tabBarItem]}>
      <View style={[styles.tabBarTextContainer]}>
        <Text style={[styles.tabBarText, focused && styles.tabBarTextActive]}>
          {name}
        </Text>
      </View>

      <View
        style={[
          styles.bottomIndicator,
          focused && styles.bottomIndicatorActive,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    width: 'auto',
  },
  tabBarTextContainer: {
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarText: {
    ...typographies.titleSmall,
    color: customTheme.colors.text500,
  },
  tabBarTextActive: {
    color: customTheme.colors.white,
  },
  bottomIndicator: {
    height: 3,
    width: '100%',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  bottomIndicatorActive: {
    backgroundColor: customTheme.colors.primary,
  },
});

export default TobTabBarIcon;
