import React from 'react';
import BottomTabBarIcon from './BottomTabBarIcon.routes';
import {customPadding} from '../../assets/styles/global.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {BottomTabInterface} from './interface';
import {typographies} from '@styles/typographies.style.asset';
import hexToRgbA from '@components/button/ripple/hexaToRgba';

interface BottomTabProps {
  tabLists: BottomTabInterface[];
}

const Tab = createBottomTabNavigator();

const BottomTab: React.FC<BottomTabProps> = ({tabLists}) => {
  const colors = useTheme().colors as Colors;

  return (
    <Tab.Navigator
      initialRouteName={tabLists[0]?.route as string}
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopColor: hexToRgbA(colors.gray8, 0.7),
          borderTopWidth: 1,
          alignItems: 'center',
          ...customPadding(10, 20, 20, 20),
          height: rs(90),
          backgroundColor: colors.default,
        },
        animation: 'fade',
        tabBarLabelStyle: {
          ...typographies(colors).bodyLargeSemibold,
          color: colors.default1,
          marginTop: rs(4),
          textTransform: 'capitalize',
        },
      }}>
      {tabLists.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route as string}
          component={item.Component}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <BottomTabBarIcon
                name={item.name}
                Icon={item.Icon}
                focused={focused}
              />
            ),
            lazy: true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTab;
