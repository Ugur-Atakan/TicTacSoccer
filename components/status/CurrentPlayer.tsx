import {Text} from '@rneui/themed';
import React from 'react';
import GlobalStyles from '../../utils/globalStyles';
import Handlers from '../../utils/handlers';
import {View} from 'react-native';
export default function CurrentPlayer() {
  const {winnerUser, currentPlayer} = Handlers();
  return (
    <View>
      {winnerUser === 'Berabere' ? (
        <Text style={GlobalStyles.fs30bold}>Berabere</Text>
      ) : winnerUser ? (
        <Text style={GlobalStyles.fs30bold}>Kazanan oyuncu {winnerUser}</Text>
      ) : (
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000'}}>
          {currentPlayer} Oynuyor
        </Text>
      )}
    </View>
  );
}
