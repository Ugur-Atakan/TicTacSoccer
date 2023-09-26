import {Text} from '@rneui/themed';
import React from 'react';
import GlobalStyles from '../../../utils/globalStyles';
import {View} from 'react-native';
import { RootState } from '../../../utils/redux/stores/store';
import { useSelector } from 'react-redux';
export default function CurrentPlayer() {
  const {winnerUserData, currentPlayer} =useSelector((state:RootState)=>state.gameBoard);
  return (
    <View style={{
      backgroundColor: 'lightgray',
      borderRadius: 20,
      height: 40,
      paddingHorizontal:15,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {winnerUserData === 'Berabere' ? (
        <Text style={GlobalStyles.fs30bold}>Oyun Berabere Bitti</Text>
      ) : winnerUserData ? (
        <View style={{width:170,justifyContent:'center',alignItems:'center'}}>
        <Text style={GlobalStyles.fs30bold}>Kazanan Oyuncu {winnerUserData?.id}</Text>
        </View>
      ) : (
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>Sıradaki Oyuncu P
          {currentPlayer.id}
        </Text>
      )}
    </View>
  );
}
