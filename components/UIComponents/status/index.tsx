import React from 'react';
import CurrentPlayer from './CurrentPlayer';
import {View} from 'react-native';

export default function StatusBar() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <CurrentPlayer />
    </View>
  );
}
