import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../main/onboarding/OnBoarding';
import ChooseAuth from '../auth/ChooseAuth/ChooseAuth';
import SignUp from '../auth/SignUp/SignUp';
import SignIn from '../auth/SignIn/SignIn';
import ForgotPassword from '../auth/ForgotPassword/ForgotPassword';
import EmailConfirmation from '../auth/ForgotPassword/EmailConfirmation';
import BottomNavigation from '../bottomNavigation/BottomNavigation';
import Voucher from '../main/voucher/Voucher';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Theme} from '../../styledcomponent';
import {ItemMenu} from '../main/home/ItemMenu';
import Home from '../main/home/Home';

const HeaderPage = navigation => {
  navigation.goBack();
};

export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={'Home'}>
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
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ItemMenu"
        component={ItemMenu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Isi Ulang Voucher"
        component={Voucher}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Isi Ulang Voucher',
            headerTitleStyle: {color: 'white'},
            headerStyle: {
              backgroundColor: Theme.buttonPrimary,
              borderBottomStartRadius: 15,
              borderBottomEndRadius: 15,
            },
            headerLeft: () => {
              return (
                <Icon
                  name="chevron-left"
                  style={{paddingHorizontal: 16}}
                  color="white"
                  onPress={() => {
                    HeaderPage(navigation);
                  }}
                />
              );
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
