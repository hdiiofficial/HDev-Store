import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Voucher from '../screen/main/voucher/Voucher';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Theme} from '../styledcomponent';
import {ItemMenu} from '../screen/main/home/ItemMenu';
import Home from '../screen/main/home/Home';
import IsiEwallet from '../screen/main/IsiEwallet/IsiEwallet';
import IsiEmoney from '../screen/main/IsiEmoney/IsiEmoney';
import IsiTokenListrik from '../screen/main/IsiTokenListrik/IsiTokenListrik';
import PembayaranIndieHome from '../screen/main/PembayaranIndieHome/PembayaranIndieHome';
import PembayaranIpl from '../screen/main/PembayaranIpl/PembayaranIpl';
import DetailTagihan from '../screen/main/DetailTagihan/DetailTagihan';
import BayarTagihan from '../screen/main/DetailTagihan/BayarTagihan';
import DetailTagihanPembayaran from '../screen/main/DetailTagihan/DetailTagihanPembayaran';
import Notifications from '../screen//main/Notifications/Notifications';
import DetailNotifications from '../screen/main/Notifications/DetailNotifications';
const HeaderPage = navigation => {
  navigation.goBack();
};

export default function MainStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="Top up E-Wallet"
        component={IsiEwallet}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Isi E-wallet',
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
      <Stack.Screen
        name="Top up E-Money"
        component={IsiEmoney}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Isi E-Money',
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
      <Stack.Screen
        name="Pembayaran Tagihan Listrik"
        component={IsiTokenListrik}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Isi Token Listrik',
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
      <Stack.Screen
        name="Pembayaran Telkom/Indihome"
        component={PembayaranIndieHome}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Isi Token Listrik',
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
      <Stack.Screen
        name="Pembayaran IPL"
        component={PembayaranIpl}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Pembayaran IPL',
            headerTitleStyle: {color: Theme.buttonPrimary},
            headerStyle: {
              backgroundColor: '#E5E5E5',
            },
            headerLeft: () => {
              return (
                <Icon
                  name="chevron-left"
                  style={{paddingHorizontal: 16}}
                  color={Theme.buttonPrimary}
                  onPress={() => {
                    HeaderPage(navigation);
                  }}
                />
              );
            },
          };
        }}
      />
      <Stack.Screen
        name="Detail Tagihan"
        component={DetailTagihan}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Detail Tagihan',
            headerTitleStyle: {color: Theme.buttonPrimary},
            headerStyle: {
              backgroundColor: '#E5E5E5',
            },
            headerLeft: () => {
              return (
                <Icon
                  name="chevron-left"
                  style={{paddingHorizontal: 16}}
                  color={Theme.buttonPrimary}
                  onPress={() => {
                    HeaderPage(navigation);
                  }}
                />
              );
            },
          };
        }}
      />
      <Stack.Screen
        name="Bayar Tagihan"
        component={BayarTagihan}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Madava',
            headerTitleStyle: {color: Theme.buttonPrimary},
            headerStyle: {
              backgroundColor: '#E5E5E5',
            },
            headerLeft: () => {
              return (
                <Icon
                  name="chevron-left"
                  style={{paddingHorizontal: 16}}
                  color={Theme.buttonPrimary}
                  onPress={() => {
                    HeaderPage(navigation);
                  }}
                />
              );
            },
          };
        }}
      />
      <Stack.Screen
        name="Detail Tagihan Pembayaran"
        component={DetailTagihanPembayaran}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Detail Tagihan',
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
                  color={'white'}
                  onPress={() => {
                    HeaderPage(navigation);
                  }}
                />
              );
            },
          };
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Notifications',
            headerTitleStyle: {color: Theme.buttonPrimary},
            headerStyle: {
              backgroundColor: '#E5E5E5',
            },
            headerLeft: () => {
              return (
                <Icon
                  name="chevron-left"
                  style={{paddingHorizontal: 16}}
                  color={Theme.buttonPrimary}
                  onPress={() => {
                    HeaderPage(navigation);
                  }}
                />
              );
            },
          };
        }}
      />
      <Stack.Screen
        name="Detail Notifications"
        component={DetailNotifications}
        options={({navigation}) => {
          return {
            headerShown: true,
            title: 'Notifications',
            headerTitleStyle: {color: Theme.buttonPrimary},
            headerStyle: {
              backgroundColor: '#E5E5E5',
            },
            headerLeft: () => {
              return (
                <Icon
                  name="chevron-left"
                  style={{paddingHorizontal: 16}}
                  color={Theme.buttonPrimary}
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
