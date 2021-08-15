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
import CodePush from 'react-native-code-push';
import OnBoarding from './src/screen/main/onboarding/OnBoarding';
import Routes from './src/routes/Routes';
import {Theme} from './src/styledcomponent';
import FlashMessage from 'react-native-flash-message';
export const ChangeColorStatusBarContext = React.createContext();

export const MyStatusBar = ({backgroundColor, ...props}) => (
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

function App() {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'CHANGE_BACKGROUND':
        return {
          ...prevState,
          background: action.background,
        };
    }
  };
  const [state, dispatch] = React.useReducer(reducer, {
    background: Theme.buttonPrimary,
  });
  const memoFunction = React.useMemo(
    () => ({
      changeBackground: background => {
        dispatch({type: 'CHANGE_BACKGROUND', background: background});
      },
    }),
    [],
  );

  return (
    <NavigationContainer>
      <ChangeColorStatusBarContext.Provider value={memoFunction}>
        <MyStatusBar
          backgroundColor={state.background}
          barStyle="light-content"
        />
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
      </ChangeColorStatusBarContext.Provider>
      <FlashMessage position={'top'} />
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

export default CodePush(App);
