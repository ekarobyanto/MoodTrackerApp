import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {RootNavigator} from './navigation/RootNavigator';
import {AppPreferenceContextProvider} from './contexts/AppPreferenceContext';
import {MoodsContextProvider} from './contexts/MoodsContext';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <MoodsContextProvider>
          <AppPreferenceContextProvider>
            <RootNavigator />
          </AppPreferenceContextProvider>
        </MoodsContextProvider>
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default App;
