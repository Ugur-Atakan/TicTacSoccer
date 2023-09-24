import {Text} from '@rneui/themed';
import React from 'react';
import GlobalStyles from '../../../utils/globalStyles';
import {View} from 'react-native';
import { RootState } from '../../../utils/redux/stores/store';
import { useSelector } from 'react-redux';
export default function CurrentPlayer() {
  const {winnerUserData, currentPlayer} =useSelector((state:RootState)=>state.gameBoard);
  return (
    <View>
      {winnerUserData === 'Berabere' ? (
        <Text style={GlobalStyles.fs30bold}>Berabere</Text>
      ) : winnerUserData ? (
        <View style={{width:170,justifyContent:'center',alignItems:'center'}}>
<Text style={GlobalStyles.fs30bold}>Kazanan{JSON.stringify(winnerUserData)}</Text>
        </View>
      ) : (
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
          {currentPlayer.id} Oynuyor
        </Text>
      )}
    </View>
  );
}
