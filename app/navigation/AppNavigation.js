import React from 'react';
import {Dimensions} from 'react-native';
import {SCREEN_KEYS} from '../feature/utilities/Constants';

// Screens
import HomeScreen from '../feature/HomeScreen';
import Splash from '../feature/Splash';
import Chat from '../feature/chat/Chat';
import Payment from '../feature/payment/Payment';
import UserInfo from '../feature/userInfo/UserInfo';
import ChatInfo from '../feature/chat/ChatInfo';
import PaymentSuccess from '../components/payment/PaymentSuccess';
import PaymentFail from '../components/payment/PaymentFail';

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
        <Stack.Screen name={SCREEN_KEYS.CHAT} component={Chat}/>
        <Stack.Screen name={SCREEN_KEYS.PAYMENT} component={Payment}/>
        <Stack.Screen name={SCREEN_KEYS.USERINFO} component={UserInfo}/>
        <Stack.Screen name={SCREEN_KEYS.CHATINFO} component={ChatInfo}/>
        <Stack.Screen name={SCREEN_KEYS.PAYSUCCESS} component={PaymentSuccess}/>
        <Stack.Screen name={SCREEN_KEYS.PAYMENTFAIL} component={PaymentFail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
