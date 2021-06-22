import React from 'react';
import ButtonSocialMedia from '../../../components/complexs/ButtonSocialMedia/ButtonSocialMedia';
import {
  ButtonPrimary,
  ContainerContentSignUp,
  ContainerIcon,
  ContainerIconHeader,
  ContainerPages,
  Gap,
  TextLarge,
  TextSmall,
  Theme,
} from '../../../styledcomponent';

export default function ChooseAuth({navigation}: {navigation: any}) {
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
          Welcome to <TextSmall weight={500}>Madava App</TextSmall>
        </TextSmall>
        <Gap height={24} />
        <ButtonPrimary
          width={271}
          height={36}
          onPress={() => navigation.navigate('SignIn')}>
          <TextSmall weight={700} color={'white'}>
            Sign In
          </TextSmall>
        </ButtonPrimary>
        <Gap height={16} />
        <ButtonPrimary
          type={'secondary'}
          color={'white'}
          width={271}
          height={36}
          onPress={() => navigation.navigate('SignUp')}>
          <TextSmall weight={700} color={theme.buttonPrimary}>
            Sign Up
          </TextSmall>
        </ButtonPrimary>
        <ButtonSocialMedia />
      </ContainerContentSignUp>
    </ContainerPages>
  );
}
