import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IsiUlangPulsa from '../IsiUlangPulsa/IsiUlangPulsa';
import PaketData from '../PaketData/PaketData';

const Tab = createMaterialTopTabNavigator();
export default function Voucher() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Isi Ulang Pulsa" component={IsiUlangPulsa} />
      <Tab.Screen name="Paket Data" component={PaketData} />
    </Tab.Navigator>
  );
}
