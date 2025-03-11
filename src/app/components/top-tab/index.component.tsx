import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {_topTabInterface} from './interface';
import TobTabBarIcon from './TobTabBarIcon';

const Tab = createMaterialTopTabNavigator();

interface _propsType {
  tabList: _topTabInterface[];
}

const TopTab: React.FC<_propsType> = ({tabList}) => {
  const renderTabs = () => {
    const view: any = [];
    tabList.map((item: _topTabInterface, index: number) => {
      view.push(
        <Tab.Screen
          key={index}
          name={item.name as string}
          component={item.Component}
          options={{
            tabBarShowLabel: false,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <TobTabBarIcon name={item.name} focused={focused} />
            ),
            lazy: true,
          }}
        />,
      );
    });
    return view;
  };
  return (
    <Tab.Navigator
      initialRouteName={tabList[0].name}
      backBehavior="initialRoute"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: customTheme.colors.surface_dark,
          borderBottomColor: customTheme.colors.elevation8,
          borderBottomWidth: 1,
        },
        tabBarIconStyle: {
          width: '100%',
        },
        tabBarIndicatorStyle: {height: 0},
      }}>
      {renderTabs()}
    </Tab.Navigator>
  );
};

export default TopTab;
