import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native';
import Loading from '../../../components/simples/Loading/Loading';
import Success from '../../../components/simples/Modal/Success';
import {
  ButtonPrimary,
  ContainerContentSignUp,
  ContainerIcon,
  ContainerIconHeader,
  ContainerPages,
  Gap,
  TextInputComponent,
  TextLarge,
  TextSmall,
} from '../../../styledcomponent';
import {Validate} from '../../../utils/function/ValidatePassword';

export default function EmailConfirmation({navigation}: {navigation: any}) {
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [modal, setmodal] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    return () => {
      setPassword('');
      setConfPassword('');
    };
  }, []);
  const recover = () => {
    const checkLength = Validate(password) && Validate(confPassword);
    const checkSame = password === confPassword;
    setTimeout(() => {
      setloading(false);
      setmodal(true);
    }, 3000);
    setloading(true);
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
            <TextSmall>Change Your Password</TextSmall>
            <Gap height={24} />
            <TextInputComponent
              placeholder={'Create new password'}
              onChangeText={(value: string) => {
                setPassword(value);
              }}
              autoCapitalize={'none'}
              secureTextEntry={true}
            />
            <Gap height={15} />
            <TextInputComponent
              placeholder={'Re-enter new password'}
              onChangeText={(value: string) => {
                // validationPassword(value);
                setConfPassword(value);
              }}
              autoCapitalize={'none'}
              secureTextEntry={true}
            />
            <Gap height={15} />
            <ButtonPrimary width={271} height={35} onPress={() => recover()}>
              <TextSmall color={'white'} weight={700}>
                Recover
              </TextSmall>
            </ButtonPrimary>
            <Gap height={16} />
            {modal ? <Success /> : <></>}
          </ContainerContentSignUp>
        </ContainerPages>
      )}
    </>
  );
}
