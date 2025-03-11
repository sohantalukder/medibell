import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {globalStyles} from '../assets/styles/global.style.asset';
import configStore from '../states/store';
import NavigationProvider from './Navigation.provider';

interface _props {
  children: React.ReactNode;
}
const MainProvider: React.FC<_props> = ({children}) => {
  return (
    <SafeAreaProvider>
      <Provider store={configStore}>
          <GestureHandlerRootView style={globalStyles.flex1}>
            <NavigationProvider>{children}</NavigationProvider>
          </GestureHandlerRootView>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MainProvider;
