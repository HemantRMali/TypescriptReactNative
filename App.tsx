import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();
import {Provider} from 'react-redux';
import store from './src/store/configure-store';

import Welcome from './src/screens/Welcome';
import ButtonVariations from './src/screens/ButtonVariation';
import Details from './src/screens/Details';
interface appProps {}

const navigationOptions = {
  headerShown: false,
  header: null,
};
const App = (props: appProps) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            options={{headerHideBackButton: true, gestureEnabled: false}}
            component={Welcome}
          />
          <Stack.Screen name="ButtonVariations" component={ButtonVariations} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
