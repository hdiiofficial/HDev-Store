import React, {useState} from 'react';
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
} from '../../../styledcomponent';
import Loading from '../../../components/simples/Loading/Loading';

import ButtonSocialMedia from '../../../components/complexs/ButtonSocialMedia/ButtonSocialMedia';
import {SignUpApi} from '../../../utils/api/api';
import {showMessage} from 'react-native-flash-message';

export default function SignUp({navigation}: {navigation: any}) {
  const [name, setname] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const validation =
    name.length > 0 &&
    phoneNumber.length > 0 &&
    email.length > 0 &&
    password.length > 8;

  const signUp = async () => {
    if (validation) {
      try {
        setloading(true);
        const res = await SignUpApi(name, phoneNumber, email, password);
        if (res.status === 200) {
          showMessage({
            message: 'Created Account',
            description: `User ${email} successfully created`,
            type: 'success',
          });
        } else if (res.status === 400) {
          showMessage({
            message: 'Created Account',
            description: `User ${email} is fail to create`,
            type: 'danger',
          });
        }
      } catch (error) {
        setloading(false);
        showMessage({
          message: 'Created Account',
          description: `User ${email} is fail to create`,
          type: 'danger',
        });
        throw error;
      }
    }
    setloading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
              placeholder={'Full Name'}
              autoCapitalize={'none'}
              onChangeText={val => setname(val)}
            />
            <Gap height={15} />
            <TextInputComponent
              placeholder={'Phone Number'}
              keyboardType={'numeric'}
              onChangeText={val => setphoneNumber(val)}
            />
            <Gap height={15} />
            <TextInputComponent
              placeholder={'Email'}
              autoCapitalize={'none'}
              onChangeText={val => setemail(val)}
            />
            <Gap height={15} />
            <TextInputComponent
              placeholder={'Password'}
              secureTextEntry={true}
              autoCapitalize={'none'}
              onChangeText={val => setpassword(val)}
            />
            <Gap height={15} />
            <ButtonPrimary width={271} height={35} onPress={signUp}>
              <TextSmall color={'white'} weight={700}>
                Sign Up
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
      )}
    </>
  );
}
