import React from 'react';
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
import {Picker} from '@react-native-picker/picker';
import {Easing} from 'react-native-reanimated';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IC_DISCOUNT} from '../../../assets/icon';
import {useFocusEffect} from '@react-navigation/core';
export const ItemContext = React.createContext();
export default function PaketData() {
  const [state, setstate] = React.useState(false);
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...prevState,
          item: action.item,
          turn: action.turn,
        };
    }
  };

  const [data, dispatch] = React.useReducer(reducer, {
    item: null,
    turn: false,
  });
  const memoFunction = React.useMemo(
    () => ({
      addItem: item => {
        dispatch({type: 'ADD_ITEM', item: item, turn: true});
      },
    }),
    [],
  );
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
      <ItemContext.Provider value={memoFunction}>
        <TextInputComponent
          placeholder="Masukan Nomor Telpon"
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
            setstate(!state);
          }}>
          <Gap style={{flexDirection: 'row', alignItems: 'center'}}>
            <IC_DISCOUNT />
            <Gap width={10} />
            <TextSmall size={12} style={{color: Theme.buttonPrimary}}>
              Pilih Paket Data
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
            maxHeight: '100%',
          }}>
          <CardMemo data={data} />
        </Collapsible>
      </ItemContext.Provider>
    </>
  );
}
const Card = ({data}) => {
  return (
    <FlatList
      data={[0, 1, 2, 3, 4, 5, 6, 7]}
      renderItem={({item, index}) => (
        <RenderItem item={item} data={data} index={index} />
      )}
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
            <ButtonPrimary width={271} height={35}>
              <TextSmall color={'white'} weight={500}>
                Pilih
              </TextSmall>
            </ButtonPrimary>
          </Gap>
        );
      }}
      scrollEnabled={false}
    />
  );
};

const RenderItem = ({index, data}) => {
  const [clicked, setClicked] = React.useState<Boolean>();
  const {addItem} = React.useContext(ItemContext);
  const {item} = data;

  const onPress = () => {
    setClicked(!clicked);
    addItem(index);
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
          backgroundColor: checkItem(),
          zIndex: 2,
          borderRadius: 5,
          paddingHorizontal: 8,
          paddingVertical: 12,
          marginHorizontal: 4,
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
          1GB - 1 hari
        </TextLarge>
        <TextSmall size={8} style={{color: reverseCheckItem()}}>
          Harga Rp. 6.000
        </TextSmall>
      </Gap>
    </TouchableOpacity>
  );
};
export const CardMemo = React.memo(Card);
