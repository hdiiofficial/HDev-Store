import {useNavigation} from '@react-navigation/core';
import React, {useRef} from 'react';
import {View, Text, Animated} from 'react-native';

import {IC_SUCCESS} from '../../../assets/icon';
import {
  ButtonPrimary,
  ModalContainer,
  Gap,
  TextInputComponent,
  TextSmall,
  TextLarge,
  Theme,
} from '../../../styledcomponent';

export default function Success() {
  const navigation = useNavigation();

  const ref = useRef(new Animated.Value(1000)).current;
  React.useEffect(() => {
    var toValue = 50;
    Animated.spring(ref, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();
    return () => {};
  }, []);
  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
        },
        {transform: [{translateY: ref}], useNativeDriver: true},
      ]}>
      <ModalContainer>
        <TextLarge weight={700} color={Theme.buttonPrimary}>
          Password Changed
        </TextLarge>
        <TextSmall style={{textAlign: 'center'}}>
          Congratulations! You’ve successfully changed your password
        </TextSmall>
        <Gap height={24} />
        <IC_SUCCESS />
        <Gap height={24} />
        <ButtonPrimary
          height={35}
          width={271}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <TextSmall color={'white'} weight={700}>
            Back to Sign in
          </TextSmall>
        </ButtonPrimary>
      </ModalContainer>
    </Animated.View>
  );
}
