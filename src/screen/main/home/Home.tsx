import React, {useState} from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ContainerPages,
  Gap,
  TextSmall,
  TextLarge,
  ContainerHomeHeader,
  TextInputComponent,
} from '../../../styledcomponent';
import Icon from 'react-native-vector-icons/Feather';
import * as IconFill from 'react-native-vector-icons/FontAwesome';
import {
  IC_MENU_HOME,
  IC_MENU_LIGHTNING,
  IC_MENU_TELKOM_PAY,
  IC_MENU_EMONEY,
  IC_MENU_VOUCHER,
  IC_MENU_WALLET,
} from '../../../assets/icon';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ItemMenu} from './ItemMenu';
import MainContent, {MainContentMemo} from './MainContent';
import {Easing} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/core';
import {currentUser} from '../../../utils/firebase/firebase';
const data = [
  {
    color: '#F3705A',
    image: IC_MENU_HOME,
    text: 'Pembayaran IPL',
  },
  {
    color: '#4891D3',
    image: IC_MENU_EMONEY,
    text: 'Top up E-Money',
  },
  {
    color: '#FFD164',
    image: IC_MENU_VOUCHER,
    text: 'Isi Ulang Voucher',
  },
  {
    color: '#3DCCB4',
    image: IC_MENU_WALLET,
    text: 'Top up E-Wallet',
  },

  {
    color: '#FFDC64',
    image: IC_MENU_LIGHTNING,
    text: 'Pembayaran Tagihan Listrik',
  },
  {
    color: '#4DD4F7',
    image: IC_MENU_TELKOM_PAY,
    text: 'Pembayaran Telkom/Indihome',
  },
];
const Header = () => {
  const [search, setsearch] = React.useState<String>('');

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setsearch('');
      };
    }, []),
  );
  return (
    <>
      <ContainerHomeHeader>
        <Gap style={styles.container}>
          {/* <Gap>
            <TextSmall size={14} weight={600} color={'white'}>
              Hi, Mr. Gopal
            </TextSmall>
            <TextSmall style={styles.detailInfo} weight={400} color={'white'}>
              Kluster Kaliska Blok A1 No. 5 0895-1234-5670
            </TextSmall>
          </Gap> */}
          <TextSmall
            size={36}
            weight={600}
            color={'white'}
            style={styles.textTitle}>
            Madava
          </TextSmall>
          {/* <Icon name={'bell'} color={'white'} size={18} /> */}
        </Gap>
        <Gap height={21} />
        <Gap style={styles.search}>
          <Icon
            name="search"
            size={21}
            color={'#D3D3D3'}
            style={styles.iconSearch}
          />
          <TextInputComponent
            style={styles.searchContainer}
            placeholder={'Search for...'}
            onChangeText={value => {
              setsearch(value);
            }}
            value={search}
          />
        </Gap>
      </ContainerHomeHeader>
      <Gap style={styles.menuContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.text}
          key={index => index}
          renderItem={({item}) => <ItemMenu item={item} />}
          numColumns={3}
          style={[styles.flatListStyle]}
          contentContainerStyle={[styles.containerFlatlist]}
          scrollEnabled={false}
          initialNumToRender={6} // Reduce initial render amount
          maxToRenderPerBatch={1} // Reduce number in each render batch
          updateCellsBatchingPeriod={100} // Increase time between renders
          windowSize={1}
          getItemLayout={(data, index) => ({
            length: 113,
            offset: 113 * index,
            index,
          })}
        />
      </Gap>
    </>
  );
};
const HeaderMemo = React.memo(Header);

export default function Home() {
  const ref = React.useRef(new Animated.Value(0)).current;
  const headerDistance = Animated.diffClamp(ref, 0, 60).interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2],
  });

  return (
    <ContainerPages dir={'flex-start'}>
      <Animated.FlatList
        data={['Important Notice', 'Ongoing Promos', 'News', 'Lifestyle']}
        renderItem={({item}) => <>{/* <MainContentMemo item={item} /> */}</>}
        keyExtractor={item => item}
        key={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderMemo />}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {y: ref}}}], {
          useNativeDriver: true,
        })}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => (
          <>
            <Gap height={100} />
          </>
        )}
        initialNumToRender={4}
        maxToRenderPerBatch={1}
        getItemLayout={(data, index) => ({
          length: 157,
          offset: 157 * index,
          index,
        })}
        windowSize={1}
        scrollEventThrottle={8}
      />
      <FooterMemo opacity={headerDistance} />
    </ContainerPages>
  );
}
const Footer = ({opacity}) => {
  const [json, setjson] = useState({
    displayName: '',
    phone: '',
    house: '',
  });
  const test = async () => {
    const res = await currentUser();
    setjson({
      displayName: res?.displayName,
      phone: res?.phoneNumber,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      test();
    }, []),
  );
  return (
    <Animated.View
      style={{
        height: 80,
        backgroundColor: 'white',
        width: '100%',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: {height: 1, width: 1}, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 20,
        paddingHorizontal: 24,
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        transform: [
          {
            translateY: opacity,
          },
        ],
      }}>
      <Gap style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://daman.co.id/daman.co.id/wp-content/uploads/2014/02/104-109_Feature-Darling-Pevita-Pearce2.jpg',
          }}
          style={{
            width: 50,
            height: 50,
            resizeMode: 'cover',
            borderRadius: 38,
          }}
        />
        <Gap style={{marginStart: 16}}>
          <TextLarge weight={500} style={{fontSize: 14, width: 100}}>
            Hi, {json.displayName}
          </TextLarge>
          <TextSmall style={{width: 180}}>
            Kluster Kaliska Blok A1 No. 5 {json.phone}
          </TextSmall>
        </Gap>
      </Gap>
      <Gap>
        <IconFill.default
          name="circle"
          size={10}
          color={'#C90E10'}
          style={{position: 'absolute', right: 2}}
        />
        <Icon name="bell" size={25} style={{color: '#000'}} />
      </Gap>
    </Animated.View>
  );
};
const FooterMemo = React.memo(Footer);

const styles = StyleSheet.create({
  textTitle: {
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailInfo: {
    width: 104,
  },
  containerFlatlist: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flexGrow: 1,
  },
  flatListStyle: {
    alignSelf: 'center',
  },
  menuContainer: {
    width: '85%',
    minHeight: 300,
    backgroundColor: 'white',
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: -34,
    maxWidth: '100%',
    justifyContent: 'center',
  },
  searchContainer: {
    width: 280,
    backgroundColor: 'white',
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 309,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
  iconSearch: {position: 'relative', zIndex: 2},
});
