import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarIOS,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OnBoarding from './src/screen/main/onboarding/OnBoarding';
import Routes from './src/screen/routes/Routes';
import {Theme} from './src/styledcomponent';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        backgroundColor={backgroundColor}
        translucent={true}
        {...props}
      />
    </SafeAreaView>
  </View>
);

export default function App() {
  StatusBar.setBarStyle('dark-content', true);
  return (
    <NavigationContainer>
      <MyStatusBar
        backgroundColor={Theme.buttonPrimary}
        barStyle="light-content"
      />
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: 'black',
  },
});
