import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {createContext, useReducer, useMemo, useEffect} from 'react';
import {View, Text} from 'react-native';
import Loading from '../components/simples/Loading/Loading';
import AuthStack from '../Stack/AuthStack';
import MainStack from '../Stack/MainStack';
import {signInFirebase} from '../utils/firebase/firebase';

export const RouterContext = createContext();

export default function Routes() {
  const [loading, setloading] = useState(true);
  const reducer = (prevState, action) => {
    switch (action.name) {
      case 'SIGNIN':
        return {
          ...prevState,
          token: action.token,
        };
      case 'CHECKTOKEN':
        return {
          ...prevState,
          token: action.token,
        };
      case 'SIGNOUT':
        return {
          ...prevState,
          token: action.token,
        };
    }
  };
  const CheckLogin = async () => {
    const token = (await AsyncStorage.getItem('token')) || '';

    if (token?.length > 0) {
      memoFunction.checkToken(token);
    }
    setloading(false);
  };
  useEffect(() => {
    CheckLogin();
    return () => {};
  }, []);

  const [state, dispatch] = useReducer(reducer, {
    token: '',
  });
  const memoFunction = useMemo(
    () => ({
      signInMemo: async (email, password) => {
        setloading(true);
        const res = await signInFirebase(email, password);
        const {token} = await res.user.getIdTokenResult();
        await AsyncStorage.setItem('token', token);
        if (res) {
          dispatch({name: 'SIGNIN', token: '1244'});
        }
        setloading(false);
      },
      checkToken: async token => {
        dispatch({name: 'CHECKTOKEN', token: token});
        setloading(false);
      },
      signOut: async token => {
        await AsyncStorage.setItem('token', '');
        dispatch({name: 'SIGNOUT', token: ''});
        setloading(false);
      },
    }),
    [state],
  );
  return (
    <RouterContext.Provider value={memoFunction}>
      {loading ? (
        <Loading />
      ) : state.token.length > 0 ? (
        <MainStack />
      ) : (
        <AuthStack />
      )}
    </RouterContext.Provider>
  );
}
