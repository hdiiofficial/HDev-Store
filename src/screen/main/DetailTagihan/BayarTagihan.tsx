import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {IC_WALLET} from '../../../assets/icon';
import {
  ContainerPages,
  Gap,
  TextSmall,
  ButtonPrimary,
  Theme,
} from '../../../styledcomponent/index';
export default function BayarTagihan() {
  return (
    <ContainerPages dir={'flex-start'}>
      <Gap height={48} />
      <CardTitle title={'Virtual account'} />
      <Gap height={16} />
      <CardTitle title={'Pembayaran intan'} />
    </ContainerPages>
  );
}
interface Card {
  title: string;
}
const CardTitle = ({title}: Card) => {
  return (
    <>
      <Gap style={{flexDirection: 'row'}}>
        <Gap width={17} />
        <TextSmall size={14} weight={400}>
          {title}
        </TextSmall>
      </Gap>
      <Gap height={8} />
      <View
        style={{
          width: '100%',
          backgroundColor: 'white',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <ButtonPayment name={'BCA'} />
        <ButtonPayment name={'BNI'} />
        <ButtonPayment name={'Virtual Account Danamon'} />
        <ButtonPayment name={'Briva'} />
        <ButtonPayment name={'Virtual Account Mandiri'} />
      </View>
    </>
  );
};
interface ButtonProps {
  name: string;
}
const ButtonPayment = ({name}: ButtonProps) => {
  return (
    <Pressable
      style={{
        width: '100%',
        height: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
      }}>
      <IC_WALLET />
      <Gap width={32} />
      <TextSmall>{name}</TextSmall>
      <Icon
        name={'chevron-right'}
        color={Theme.buttonPrimary}
        style={{marginLeft: 'auto'}}
      />
    </Pressable>
  );
};
