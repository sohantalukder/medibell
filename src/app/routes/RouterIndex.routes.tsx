import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from './routeName.routes';
import basicRoutes from './modules/basic.routes';
import {RouteProps} from '@entity-models/common.types';
import authRoutes from './modules/auth.routes';
import chatRoutes from './modules/chat.routes';

const Stack = createStackNavigator();

const renderRoutes = (routes: RouteProps[]) => {
  return routes.map((route: RouteProps, index: number) => (
    <Stack.Screen name={route.name} component={route.component} key={index} />
  ));
};

const RouterIndex: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screens.splash}>
      {renderRoutes(basicRoutes)}
      {renderRoutes(authRoutes)}
      {renderRoutes(chatRoutes)}
    </Stack.Navigator>
  );
};
export default RouterIndex;
