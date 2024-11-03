import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {RootNavigator} from './navigation/RootNavigator';
import {AppPreferenceContextProvider} from './contexts/AppPreferenceContext';
import {MoodsContextProvider} from './contexts/MoodsContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MoodsContextProvider>
        <AppPreferenceContextProvider>
          <RootNavigator />
        </AppPreferenceContextProvider>
      </MoodsContextProvider>
    </NavigationContainer>
  );
}

export default App;
