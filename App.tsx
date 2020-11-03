import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();
//import {Provider} from 'react-redux';
//import {store, persistor} from './src/store/configureStore';

import Welcome from './src/screens/Welcome';
import ButtonVariations from './src/screens/ButtonVariation';
interface appProps {}

const navigationOptions = {
  headerShown: false,
  header: null,
};
const App = (props: appProps) => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          options={{headerHideBackButton: true, gestureEnabled: false}}
          component={Welcome}
        />
        <Stack.Screen name="ButtonVariations" component={ButtonVariations} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
