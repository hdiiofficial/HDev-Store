import React from 'react';
import {View, Text} from 'react-native';
import {
  ContainerPages,
  Gap,
  TextSmall,
  ButtonPrimary,
} from '../../../styledcomponent/index';
export default function DetailTagihanPembayaran({navigation}) {
  return (
    <ContainerPages dir={'flex-start'}>
      <Gap height={24} />
      <View style={{alignItems: 'center', width: '100%'}}>
        <TextSmall weight={500} size={14}>
          Menunggu Pembayaran
        </TextSmall>
        <Gap height={4} />
        <TextSmall
          weight={400}
          size={12}
          style={{width: 247, textAlign: 'center'}}>
          Mohon selesaikan pembayaran Anda sebelum tanggal 2 Juni 2021 14:50 WIB
          dengan rincian sebagai berikut.
        </TextSmall>
      </View>
      <Gap height={34} />
      <Card />
      <Gap height={16} />
      <Card />
    </ContainerPages>
  );
}

const Card = () => {
  return (
    <View
      style={{
        maxWidth: 343,
        width: '100%',
        height: 88,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        padding: 16,
      }}>
      <TextSmall>Transfer ke nomor Virtual Account</TextSmall>
      <Gap height={8} />
      <View style={{flexDirection: 'row'}}>
        <Gap width={8} />
        <TextSmall size={14} weight={500}>
          BCA logo
        </TextSmall>
        <Gap width={16} />
        <TextSmall size={14} weight={500}>
          889123456xxxxxx
        </TextSmall>
      </View>
      <Gap height={8} />
      <TextSmall
        size={10}
        weight={400}
        style={{textDecorationLine: 'underline'}}>
        Salin Nomor Rekening
      </TextSmall>
    </View>
  );
};
