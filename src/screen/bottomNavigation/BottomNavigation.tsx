import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Home from '../main/home/Home';
import History from '../main/history/History';
import {
  IC_CONTACT_US,
  IC_HISTORY,
  IC_HOME,
  IC_SETTING,
  IC_HOME_ACTIVE,
  IC_UNIT,
  IC_HISTORY_ACTIVE,
  IC_UNIT_ACTIVE,
  IC_CONTACT_US_ACTIVE,
  IC_SETTING_ACTIVE,
} from '../../assets/icon';
import Unit from '../main/unit/Unit';
import ContactUs from '../main/contactUs/ContactUs';
import Setting from '../main/setting/Setting';

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      labeled={true}
      shifting={false}
      barStyle={{
        backgroundColor: 'white',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        overflow: 'hidden',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <IC_HOME_ACTIVE /> : <IC_HOME />,
        }}
      />
      <Tab.Screen
        name={'History'}
        component={History}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <IC_HISTORY_ACTIVE /> : <IC_HISTORY />,
        }}
      />
      <Tab.Screen
        name={'Unit'}
        component={Unit}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <IC_UNIT_ACTIVE /> : <IC_UNIT />,
        }}
      />
      <Tab.Screen
        name={'Contact Us'}
        component={ContactUs}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <IC_CONTACT_US_ACTIVE /> : <IC_CONTACT_US />,
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={Setting}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <IC_SETTING_ACTIVE /> : <IC_SETTING />,
        }}
      />
    </Tab.Navigator>
  );
}
