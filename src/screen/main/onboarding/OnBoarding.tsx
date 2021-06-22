import React from 'react';
import {IC_ONBOARD} from '../../../assets/icon';
import {
  TextLarge,
  TextSmall,
  ViewOnboarding,
  ButtonPrimary,
} from '../../../styledcomponent';

export default function OnBoarding({navigation}: {navigation: any}) {
  return (
    <ViewOnboarding>
      <TextSmall>Welcome to</TextSmall>
      <TextLarge weight={400}>Mandava</TextLarge>
      <IC_ONBOARD />
      <ButtonPrimary
        width={167}
        height={25}
        onPress={() => navigation.replace('ChooseAuth')}>
        <TextSmall color={'white'}>Next</TextSmall>
      </ButtonPrimary>
    </ViewOnboarding>
  );
}
