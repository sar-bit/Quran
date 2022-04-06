import React from 'react';
import {Dimensions} from 'react-native';
import {SCREEN_KEYS} from '../feature/utilities/Constants';

// Screens
import HomeScreen from '../feature/HomeScreen';
import Splash from '../feature/Splash';

// Navigations
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const {height, width} = Dimensions.get('screen');
export const widths = width;

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREEN_KEYS.SPLASH} headerMode="none">
        <Stack.Screen name={SCREEN_KEYS.HOMESCREEN} component={HomeScreen} />
        <Stack.Screen name={SCREEN_KEYS.SPLASH} component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
