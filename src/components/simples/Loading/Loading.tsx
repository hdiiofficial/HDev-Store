import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Theme} from '../../../styledcomponent';

export default function Loading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <ActivityIndicator color={Theme.buttonPrimary} />
    </View>
  );
}
