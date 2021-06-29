import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ButtonPrimary,
  ContainerContentSignUp,
  ContainerIcon,
  ContainerIconHeader,
  ContainerPages,
  Gap,
  TextInputComponent,
  TextLarge,
  TextLink,
  TextSmall,
  Theme,
} from '../../../styledcomponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonSocialMedia from '../../../components/complexs/ButtonSocialMedia/ButtonSocialMedia';
import {useNavigation} from '@react-navigation/core';

export default function SignIn({navigation}: {navigation: any}) {
  const theme = Theme;

  return (
    <ContainerPages dir={'center'}>
      <ContainerIconHeader>
        <ContainerIcon />
        <Gap height={8} />
        <TextLarge weight={500} color={'white'}>
          Madava
        </TextLarge>
      </ContainerIconHeader>
      <ContainerContentSignUp>
        <TextSmall>
          Sign In to <TextSmall weight={500}>Madava App</TextSmall>
        </TextSmall>
        <Gap height={24} />

        <TextInputComponent placeholder={'Account Name'} />
        <Gap height={15} />
        <TextInputComponent placeholder={'Password'} />
        <Gap height={15} />
        <ButtonPrimary
          width={271}
          height={35}
          onPress={() => navigation.navigate('Home')}>
          <TextSmall color={'white'} weight={700}>
            Sign In
          </TextSmall>
        </ButtonPrimary>
        <Gap height={16} />
        <TextLink
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          Forgot Password
        </TextLink>
        <ButtonSocialMedia />
      </ContainerContentSignUp>
    </ContainerPages>
  );
}
