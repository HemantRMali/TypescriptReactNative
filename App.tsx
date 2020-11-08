import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/store/configure-store';

import Welcome from './src/screens/Welcome';
import ButtonVariations from './src/screens/ButtonVariation';
import Details from './src/screens/Details';

export type RootStackParamList = {
  Welcome: undefined;
  ButtonVariations: undefined;
  Details: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Welcome">
          <RootStack.Screen
            name="Welcome"
            options={{gestureEnabled: false}}
            component={Welcome}
          />
          <RootStack.Screen
            name="ButtonVariations"
            component={ButtonVariations}
          />
          <RootStack.Screen name="Details" component={Details} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
