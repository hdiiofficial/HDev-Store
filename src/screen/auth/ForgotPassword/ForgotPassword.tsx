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

export default function ForgotPassword({navigation}: {navigation: any}) {
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
        <TextSmall>Forgot your password ?</TextSmall>
        <Gap height={24} />
        <TextInputComponent placeholder={'Email'} />
        <Gap height={15} />
        <ButtonPrimary width={271} height={35} onPress={()=>navigation.navigate("EmailConfirmation")}>
          <TextSmall color={'white'} weight={700}>
            Recover
          </TextSmall>
        </ButtonPrimary>
        <Gap height={16} />
      </ContainerContentSignUp>
    </ContainerPages>
  );
}
