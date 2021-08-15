import React, {useState} from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import {
  ButtonPrimary,
  Gap,
  TextInputComponent,
  TextLarge,
  TextSmall,
  Theme,
} from '../../../styledcomponent';

import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IC_DISCOUNT} from '../../../assets/icon';
import {useFocusEffect} from '@react-navigation/core';
import {
  apiIsiPulsa,
  apiIsiPulsaPost,
  getProvider,
} from '../../../utils/api/MobilePulsaDev';
import Loading from '../../../components/simples/Loading/Loading';
import {showMessage} from 'react-native-flash-message';

export const ItemContext = React.createContext();
export default function IsiUlangPulsa() {
  const [state, setstate] = React.useState(true);
  const [datalist, setdatalist] = useState([]);
  const [number, setnumber] = useState('');
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...prevState,
          item: action.item,
          turn: action.turn,
        };
      case 'LOADING':
        return {
          ...prevState,
          loading: action.loading,
        };
    }
  };

  const [data, dispatch] = React.useReducer(reducer, {
    item: null,
    turn: false,
    loading: false,
  });
  const memoFunction = React.useMemo(
    () => ({
      addItem: item => {
        dispatch({type: 'ADD_ITEM', item: item, turn: true});
      },
      loading: loading => {
        dispatch({type: 'LOADING', loading: loading});
        setnumber('');
        setstate(!state);
        setdatalist([]);
      },
    }),
    [data],
  );
  const setDataNumber = async val => {
    setnumber(val);

    if (number.length > 4) {
      await getData();
    }
  };
  const getData = async () => {
    const res = await getProvider(number);
    const getList = await apiIsiPulsa(res);
    setdatalist(getList);
  };
  const onPress = async () => {
    if (number.length > 4) {
      setstate(!state);
    }
  };
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        memoFunction.addItem(null);
        setstate(true);
      };
    }, []),
  );

  return (
    <>
      {data.loading ? (
        <Loading />
      ) : (
        <ItemContext.Provider value={memoFunction}>
          <TextInputComponent
            placeholder="Masukan Nomor Telpon"
            onChangeText={val => setDataNumber(val)}
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: 50,
              zIndex: 10,
            }}
          />
          <TouchableOpacity
            style={{
              zIndex: 10,
              backgroundColor: 'white',
              height: 50,
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 16,
              flexDirection: 'row',
            }}
            activeOpacity={1}
            onPress={() => {
              onPress();
            }}>
            <Gap style={{flexDirection: 'row', alignItems: 'center'}}>
              <IC_DISCOUNT />
              <Gap width={10} />
              <TextSmall size={12} style={{color: Theme.buttonPrimary}}>
                Pilih Voucher
              </TextSmall>
            </Gap>
            <Icon
              name={state ? 'chevron-down' : 'chevron-up'}
              color={'#374F82'}
            />
          </TouchableOpacity>
          <Collapsible
            collapsed={state}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              maxHeight: 600,
            }}>
            <CardMemo data={data} datalist={datalist} phone={number} />
          </Collapsible>
        </ItemContext.Provider>
      )}
    </>
  );
}
const Card = ({data, datalist, phone}) => {
  const {loading} = React.useContext(ItemContext);
  const postPulsa = async () => {
    loading(true);
    try {
      const res = await apiIsiPulsaPost(phone, datalist[data.item].pulsa_code);
      if (res.data.status === 0) {
        showMessage({
          message: 'Succeed',
          description: `Your purchase is in process`,
          backgroundColor: 'blue',
        });
      }
    } catch (error) {
      loading(false);
      throw error;
    }
    loading(false);
  };
  return (
    <FlatList
      data={datalist.length > 0 ? datalist : [0]}
      renderItem={({item, index}) => (
        <RenderItem itemData={item} data={data} index={index} />
      )}
      keyExtractor={item => item.pulsa_code}
      key={item => item}
      numColumns={3}
      contentContainerStyle={{
        justifyContent: 'space-between',
      }}
      columnWrapperStyle={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 8,
      }}
      ListHeaderComponent={() => {
        return <Gap height={24} />;
      }}
      ListFooterComponent={() => {
        return (
          <Gap style={{justifyContent: 'center', alignItems: 'center'}}>
            <Gap height={24} />
            <ButtonPrimary
              width={271}
              height={35}
              onPress={() => {
                postPulsa();
              }}>
              <TextSmall color={'white'} weight={500}>
                Pilih
              </TextSmall>
            </ButtonPrimary>
          </Gap>
        );
      }}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
    />
  );
};

const RenderItem = ({data, index, itemData}) => {
  const {addItem} = React.useContext(ItemContext);
  const {item} = data;

  const onPress = () => {
    if (item === index) {
      addItem(null);
    } else {
      addItem(index);
    }
  };

  const checkItem = () => {
    return item === index ? `${Theme.buttonPrimary}` : 'white';
  };
  const reverseCheckItem = () => {
    return item === index ? 'white' : `${Theme.buttonPrimary}`;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Gap
        style={{
          width: 100,
          zIndex: 2,
          borderRadius: 5,
          paddingHorizontal: 8,
          paddingVertical: 12,
          marginHorizontal: 4,
          backgroundColor: checkItem(),
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 1,
        }}>
        <TextLarge
          style={{fontSize: 14}}
          weight={500}
          color={reverseCheckItem()}>
          {typeof itemData.pulsa_nominal !== 'undefined' &&
            Number(itemData.pulsa_nominal)
              .toFixed(1)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
              .slice(0, itemData.pulsa_nominal.length + 2)
              .replace('.', '')}
        </TextLarge>
        <TextSmall size={8} style={{color: reverseCheckItem()}}>
          Harga Rp.
          {typeof itemData.pulsa_nominal !== 'undefined' &&
            Number(itemData.pulsa_price)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
              .slice(0, itemData.pulsa_nominal.length + 2)
              .replace('.', '')}
        </TextSmall>
      </Gap>
    </TouchableOpacity>
  );
};
export const CardMemo = React.memo(Card);
