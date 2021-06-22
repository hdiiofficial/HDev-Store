import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Gap, TextSmall} from '../../../styledcomponent';
export default function ButtonSocialMedia() {
  return (
    <>
      <Gap height={24} />
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <View style={styles.lineLimit}>
          <TextSmall>Or Connecting with</TextSmall>
        </View>
        <View style={styles.line} />
      </View>
      <Gap height={24} />
      <Gap style={{flexDirection: 'row'}}>
        <Icon.Button
          name="facebook"
          iconStyle={styles.iconStyle}
          size={24}
          style={styles.icon}
          backgroundColor={'#3B5997'}
        />
        <Gap width={16} />
        <Icon.Button
          name="google"
          iconStyle={styles.iconStyle}
          size={24}
          style={styles.icon}
          backgroundColor={'#FB6852'}
        />
        <Gap width={16} />
        <Icon.Button
          name="twitter"
          iconStyle={styles.iconStyle}
          size={24}
          style={styles.icon}
          backgroundColor={'#46C9F9'}
        />
      </Gap>
    </>
  );
}
const styles = StyleSheet.create({
  iconStyle: {
    marginRight: 0,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  lineLimit: {
    paddingHorizontal: 10,
  },
});
