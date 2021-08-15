import React, {useState} from 'react';

import {
  ButtonPrimary,
  Gap,
  TextInputComponent,
  TextSmall,
} from '../../../styledcomponent';

import {IC_WALLET} from '../../../assets/icon';

import ModalSelector from 'react-native-modal-selector';
import PaymentSucces from '../../../components/simples/PaymentSuccess/PaymentSucces';

export const ItemContext = React.createContext();
let index = 0;
const data = [
  {key: index++, label: 'OVO'},
  {key: index++, label: 'DANA'},
  {key: index++, label: 'GOPAY'},
];

export default function IsiEwallet() {
  const [textWallet, setTextWallet] = useState('');
  const [number, setNumber] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [modal, setmodal] = useState(false);

  const formatNumber = (value: string) => {
    const regexNumber = value
      .replace(/[Rp. ]/gi, '')
      .replace(/[^\w\s]/gi, '')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    regexNumber === '' ? setNumber('') : setNumber(`Rp. ${regexNumber}`);
  };
  const formatPhoneNumber = (value: string) => {
    const regexNumber = value
      .replace(/[-]/g, '')
      .replace(/(\d{4})(?=(\d))/g, '$1-');
    regexNumber.length <= 14 && setphoneNumber(regexNumber);
  };

  return (
    <>
      <TextInputComponent
        placeholder="Masukan Nomor Telpon"
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 50,
        }}
        autoCapitalize={'none'}
        keyboardType={'phone-pad'}
        onChangeText={(value: string) => {
          formatPhoneNumber(value);
        }}
        value={phoneNumber}
      />
      <ModalSelector
        data={data}
        onChange={option => {
          //   this.setState({textInputValue: option.label});
        }}
        backdropPressToClose={true}
        visible={false}
        onChange={option => {
          setTextWallet(option.label);
        }}
        optionStyle={{borderWidth: 0, borderBottomColor: 'white'}}
        optionContainerStyle={{backgroundColor: 'white'}}
        optionTextStyle={{fontWeight: '500', color: '#3F598E'}}
        cancelStyle={{opacity: 0}}>
        <Gap
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            paddingHorizontal: 16,
          }}>
          <IC_WALLET />
          <TextInputComponent
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: 50,
              fontWeight: '400',
            }}
            editable={false}
            placeholder="Pilih E-Wallet"
            placeholderTextColor={'#374F82'}
            value={textWallet}
          />
        </Gap>
      </ModalSelector>
      <TextInputComponent
        placeholder="Masukan Nominal"
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 50,

          color: '#374F82',
          fontWeight: '500',
        }}
        autoCapitalize={'none'}
        keyboardType={'number-pad'}
        onChangeText={(value: string) => {
          formatNumber(value);
        }}
        value={number}
      />
      <Gap height={24} />
      <ButtonPrimary
        width={271}
        height={35}
        style={{alignSelf: 'center'}}
        onPress={() => setmodal(true)}>
        <TextSmall color={'white'}>Konfirmasi</TextSmall>
      </ButtonPrimary>
      {modal && <PaymentSucces onPress={() => setmodal(false)} />}
    </>
  );
}
