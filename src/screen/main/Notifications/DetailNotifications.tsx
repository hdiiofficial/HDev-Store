import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {ChangeColorStatusBarContext} from '../../../../App';
import {IC_VECTOR_CARD, IC_VECTOR_CARD_BOTTOM} from '../../../assets/icon';
import {
  ContainerPages,
  Gap,
  TextSmall,
  ButtonPrimary,
  Theme,
} from '../../../styledcomponent/index';

export default function DetailNotifications({navigation}) {
  const {changeBackground} = React.useContext(ChangeColorStatusBarContext);
  useFocusEffect(
    React.useCallback(() => {
      changeBackground('#E5E5E5');
      return () => {};
    }, []),
  );
  return (
    <>
      <ContainerPages dir={'flex-start'}>
        <Item name={'Pembayaran IPL berhasil!'} />
        <Item name={'News - Lifestyle'} />
        <Item name={'Notification A - Unread'} />
      </ContainerPages>
    </>
  );
}
const Item = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 35,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <TextSmall color={'black'} weight={500}>
        Pembayaran IPL Berhasil!
      </TextSmall>
      <View
        style={{
          width: 7,
          height: 7,
          borderRadius: 7,
          backgroundColor: Theme.buttonPrimary,
        }}
      />
    </View>
  );
};
