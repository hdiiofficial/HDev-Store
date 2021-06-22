import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../main/onboarding/OnBoarding';
import ChooseAuth from '../auth/ChooseAuth/ChooseAuth';
import SignUp from '../auth/SignUp/SignUp';
import SignIn from '../auth/SignIn/SignIn';
import ForgotPassword from '../auth/ForgotPassword/ForgotPassword';
import EmailConfirmation from '../auth/ForgotPassword/EmailConfirmation';

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'EmailConfirmation'}>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChooseAuth"
        component={ChooseAuth}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EmailConfirmation"
        component={EmailConfirmation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
