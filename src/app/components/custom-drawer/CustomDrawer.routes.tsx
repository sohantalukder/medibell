import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {drawerList} from '../../assets/constants/drawerList.dropdown';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screens} from '../../routes/routeName.routes';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {TouchableRipple} from 'react-native-paper';
import {globalStyles} from '../../assets/styles/global.style.asset';

const CustomDrawer: React.FC = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName={screens.dashboard}
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: customTheme.colors.surface_dark},
      }}>
      {drawerList.map(({value, component, title, Icon}, index: number) => {
        return (
          <Drawer.Screen
            key={index}
            name={value}
            options={{
              title: '',
              // eslint-disable-next-line react/no-unstable-nested-components
              drawerIcon: () => {
                return (
                  <TouchableRipple>
                    <View style={[globalStyles.flexRow]}>
                      <Icon />
                      <Text style={typographies.bodyLarge}>{title}</Text>
                    </View>
                  </TouchableRipple>
                );
              },
            }}
            component={component}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default CustomDrawer;

export const styles = StyleSheet.create({});
