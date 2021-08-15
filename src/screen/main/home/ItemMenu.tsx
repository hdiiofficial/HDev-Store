import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import {Gap, TextSmall} from '../../../styledcomponent';

const RenderItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <Gap
      style={{
        marginHorizontal: 18,
        width: 75,
        alignItems: 'center',
        marginVertical: 12,
      }}>
      <Pressable
        style={{
          width: 61,
          height: 61,
          shadowColor: 'rgba(0,0,0, .4)', // IOS
          shadowOffset: {height: 1, width: 1}, // IOS
          shadowOpacity: 1, // IOS
          shadowRadius: 1, //IOS
        }}
        onPress={() => {
          navigation.navigate(item.text);
        }}>
        <Svg height="100" width="100">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="0.6">
              <Stop offset="30%" stopColor={item.color} stopOpacity="1" />
              <Stop offset="100%" stopColor="white" stopOpacity="1" />
            </LinearGradient>
            <ClipPath id="clip">
              <G scale="1" x="0">
                <Circle cx="30" cy="30" r="30" />
              </G>
            </ClipPath>
          </Defs>
          <Rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="url(#grad)"
            clipPath="url(#clip)"
          />
        </Svg>
        <Gap
          style={{
            position: 'absolute',
            alignSelf: 'center',
            top: 0,
            bottom: 0,
            marginVertical: 0,
            justifyContent: 'center',
          }}>
          {item.image()}
        </Gap>
      </Pressable>
      <TextSmall
        size={8}
        style={{width: 50, textAlign: 'center', marginTop: 8}}>
        {item.text}
      </TextSmall>
    </Gap>
  );
};
export const ItemMenu = React.memo(RenderItem);
