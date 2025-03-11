import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {globalStyles} from '../assets/styles/global.style.asset';
import configStore from '../states/store';
import NavigationProvider from './Navigation.provider';
import {RealmProvider} from '@realm/react';
import realmConfig from '@packages/realm/realmConfig';

interface _props {
  children: React.ReactNode;
}
const MainProvider: React.FC<_props> = ({children}) => {
  return (
    <SafeAreaProvider>
      <Provider store={configStore}>
        <RealmProvider {...realmConfig}>
          <GestureHandlerRootView style={globalStyles.flex1}>
            <NavigationProvider>{children}</NavigationProvider>
          </GestureHandlerRootView>
        </RealmProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MainProvider;
