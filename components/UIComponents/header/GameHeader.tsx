import {Text} from 'react-native-paper';
import React from 'react';
import {width} from '../../../style';
export default function GameHeader() {
  return (
    <Text
      style={{
        fontWeight: 'bold',
        fontSize: width * 0.04,
        color: 'white',
        alignSelf: 'center',
      }}>
      TİKİ TAKA SOCCER TÜRKİYE{' '}
    </Text>
  );
}
