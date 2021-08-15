import React, {useState} from 'react';
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
} from '../../../styledcomponent';

import ButtonSocialMedia from '../../../components/complexs/ButtonSocialMedia/ButtonSocialMedia';
import {TextInput} from 'react-native-gesture-handler';
import {RouterContext} from '../../../routes/Routes';

export default function SignIn({navigation}: {navigation: any}) {
  const {signInMemo} = React.useContext(RouterContext);
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const signInMethod = () => {
    signInMemo(name, password);
  };
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
        <TextInputComponent
          placeholder={'Account Name'}
          autoCapitalize={'none'}
          onChangeText={val => setname(val)}
        />
        <Gap height={15} />
        <TextInputComponent
          placeholder={'Password'}
          autoCapitalize={'none'}
          secureTextEntry={true}
          onChangeText={val => setpassword(val)}
        />
        <Gap height={15} />
        <ButtonPrimary width={271} height={35} onPress={signInMethod}>
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
