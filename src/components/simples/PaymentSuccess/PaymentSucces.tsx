import React from 'react';
import {View, Text} from 'react-native';
import {Theme} from '../../../styledcomponent';
import {TextSmall, Gap, ButtonPrimary} from '../../../styledcomponent';

export default function PaymentSucces({onPress, data}) {
  const result = JSON.parse(data);
  return (
    <View
      style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: 0.3,
        }}
      />
      <View
        style={{
          width: 255,
          height: 263,
          backgroundColor: 'white',
          borderRadius: 5,
        }}>
        <View
          style={{
            width: '100%',
            height: 35,
            backgroundColor: Theme.buttonPrimary,
            bore: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextSmall color={'white'} weight={500} size={14}>
            Isi Wallet
          </TextSmall>
        </View>
        <View style={{padding: 16, flex: 1}}>
          <TextSmall color={'#344C7E'} weight={500} size={13}>
            Isi E-Wallet :
          </TextSmall>
          <Gap height={5} />
          <TextSmall color={'#344C7E'} weight={'bold'} size={13}>
            {result.message}
          </TextSmall>
          <Gap height={4} />
          <TextSmall color={'#344C7E'} weight={'500'} size={13}>
            {new Date().toISOString()}
          </TextSmall>
          <Gap height={4} />
          <TextSmall color={'#344C7E'} weight={'500'} size={13}>
            {result.code}
          </TextSmall>
          <Gap height={4} />
          <TextSmall color={'#344C7E'} weight={'500'} size={13}>
            {result.ref_id}
          </TextSmall>
          <Gap height={4} />
          <TextSmall color={'#344C7E'} weight={'500'} size={13}>
            Jumlah : Rp.
            {result.price
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
              .slice(0, String(result.price).length + 2)
              .replace('.', '')}
          </TextSmall>
          <Gap height={4} />
          {/* <TextSmall color={'#344C7E'} weight={'500'} size={13}>
            ADM : Rp. 2.500,-
          </TextSmall> */}
          <Gap height={4} />
          <TextSmall color={'#344C7E'} weight={'500'} size={13}>
            Total : Rp.
            {result.price
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
              .slice(0, String(result.price).length + 2)
              .replace('.', '')}
          </TextSmall>
          <ButtonPrimary
            height={30}
            width={160}
            onPress={onPress}
            style={{alignSelf: 'center', position: 'absolute', bottom: 10}}>
            <TextSmall color={'white'}>Ok</TextSmall>
          </ButtonPrimary>
        </View>
      </View>
    </View>
  );
}
