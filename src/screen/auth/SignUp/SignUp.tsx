import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
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

import ButtonSocialMedia from '../../../components/complexs/ButtonSocialMedia/ButtonSocialMedia';

export default function SignUp({navigation}: {navigation: any}) {
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
        <TextInputComponent placeholder={'Full Name'} />
        <Gap height={15} />

        <TextInputComponent placeholder={'Phone Number'} />
        <Gap height={15} />
        <TextInputComponent placeholder={'Email'} />
        <Gap height={15} />
        <TextInputComponent placeholder={'Password'} secureTextEntry={true} />
        <Gap height={15} />
        <ButtonPrimary width={271} height={35}>
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
