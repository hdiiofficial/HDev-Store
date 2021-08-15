import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { ChangeColorStatusBarContext } from '../../../../App';
import {IC_VECTOR_CARD, IC_VECTOR_CARD_BOTTOM} from '../../../assets/icon';
import {
  ContainerPages,
  Gap,
  TextSmall,
  ButtonPrimary,
  Theme,
} from '../../../styledcomponent/index';
export default function PembayaranIpl({navigation}) {
  const {changeBackground} = React.useContext(ChangeColorStatusBarContext);
  useFocusEffect(
    React.useCallback(() => {
      changeBackground('#E5E5E5');
      return () => {};
    }, []),
  );
  return (
    <ContainerPages dir={'flex-start'}>
      <Gap height={54} />
      <View
        style={{
          maxWidth: 343,
          width: '100%',
          height: 170,
          backgroundColor: 'white',
          borderRadius: 10,
          alignSelf: 'center',
        }}>
        <View>
          <View style={{position: 'absolute', right: 0}}>
            <IC_VECTOR_CARD />
          </View>
          <View style={{position: 'absolute', right: 0}}>
            <IC_VECTOR_CARD_BOTTOM />
          </View>
        </View>
        <View style={{padding: 16}}>
          <TextSmall weight={500} size={16}>
            Madava
          </TextSmall>
          <Gap height={61} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <TextSmall weight={500} size={14}>
                Gopal the great
              </TextSmall>
              <TextSmall weight={500} size={10} style={{width: 102}}>
                Kluster Kaliska Blok A1 No. 5 0895-1234-5670
              </TextSmall>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TextSmall
                weight={400}
                size={10}
                style={{width: 102, textAlign: 'right'}}>
                Tagihan IPL bulan Juni
              </TextSmall>
              <TextSmall
                weight={500}
                size={12}
                style={{width: 102, textAlign: 'right'}}>
                Rp. 200.000,-
              </TextSmall>
              <Gap height={8} />

              <View style={{flexDirection: 'row'}}>
                <ButtonPrimary width={64} height={20}>
                  <TextSmall color={'white'}>Bayar</TextSmall>
                </ButtonPrimary>
                <Gap width={8} />
                <ButtonPrimary
                  width={64}
                  height={20}
                  style={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: Theme.buttonPrimary,
                  }}
                  onPress={() => navigation.navigate('Detail Tagihan')}>
                  <TextSmall color={Theme.buttonPrimary}>Detail</TextSmall>
                </ButtonPrimary>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ContainerPages>
  );
}
