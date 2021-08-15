import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {ChangeColorStatusBarContext} from '../../../../App';
import {
  ContainerPages,
  Gap,
  TextSmall,
  ButtonPrimary,
} from '../../../styledcomponent/index';
export default function DetailTagihan({navigation}) {
  const {changeBackground} = React.useContext(ChangeColorStatusBarContext);
  useFocusEffect(
    React.useCallback(() => {
      changeBackground('#E5E5E5');
      return () => {};
    }, []),
  );
  return (
    <ContainerPages dir={'flex-start'}>
      <Gap height={34} />
      <View
        style={{
          maxWidth: 343,
          width: '100%',
          height: 74,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 10,
          elevation: 1,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.5,
          shadowRadius: 3,
          padding: 16,
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextSmall>Tagihan Bulan Juni</TextSmall>
          <TextSmall weight={500}>Juni 2021</TextSmall>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextSmall>No. Refrensi :</TextSmall>
          <TextSmall weight={500}>IPL-GG123456778</TextSmall>
        </View>
      </View>
      <Gap height={34} />
      <View
        style={{
          maxWidth: 343,
          width: '100%',
          height: 115,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 10,
          elevation: 1,
          shadowColor: 'black',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.5,
          shadowRadius: 3,
          padding: 16,
          justifyContent: 'space-between',
        }}></View>
      <Gap height={36} />
      <ButtonPrimary
        width={271}
        height={35}
        style={{alignSelf: 'center'}}
        onPress={() => navigation.navigate('Bayar Tagihan')}>
        <TextSmall color={'white'} weight={500}>
          Bayar Tagihan
        </TextSmall>
      </ButtonPrimary>
    </ContainerPages>
  );
}
