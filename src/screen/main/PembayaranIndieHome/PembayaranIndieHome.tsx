import React, {useState} from 'react';
import PaymentSucces from '../../../components/simples/PaymentSuccess/PaymentSucces';
import {
  ButtonPrimary,
  Gap,
  TextInputComponent,
  TextSmall,
} from '../../../styledcomponent';

import {IC_WALLET} from '../../../assets/icon';

import ModalSelector from 'react-native-modal-selector';

export default function PembayaranIndieHome() {
  const [textWallet, setTextWallet] = useState('');
  const [modal, setmodal] = useState(false);

  return (
    <>
      <TextInputComponent
        placeholder="Masukan Nomor ID Pelanggan"
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 50,
        }}
        autoCapitalize={'none'}
        keyboardType={'phone-pad'}
      />
      <Gap height={24} />
      <ButtonPrimary
        width={271}
        height={35}
        style={{alignSelf: 'center'}}
        onPress={() => {
          setmodal(true);
        }}>
        <TextSmall color={'white'}>Konfirmasi</TextSmall>
      </ButtonPrimary>
      {modal && (
        <PaymentSucces
          onPress={() => {
            setmodal(false);
          }}
        />
      )}
    </>
  );
}
