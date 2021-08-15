import React from 'react';
import type {Node} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screen/auth/SignIn/SignIn';
import SignUp from '../screen/auth/SignUp/SignUp';
import ForgotPassword from '../screen/auth/ForgotPassword/ForgotPassword';
import ChooseAuth from '../screen/auth/ChooseAuth/ChooseAuth';

const Stack = createStackNavigator();

const AuthStack: () => Node = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Sign In'}
        component={SignIn}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name={'Sign Up'}
        component={SignUp}
        options={() => {
          return {
            headerShown: false,
          };
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
        name="ChooseAuth"
        component={ChooseAuth}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
