import {Button, Text} from 'react-native-paper';
import React from 'react';
import GlobalStyles from '../../../utils/globalStyles';
import {View} from 'react-native';
import {RootState} from '../../../utils/redux/stores/store';
import {useSelector} from 'react-redux';
export default function CurrentPlayer() {
  const {winnerUserData, currentPlayer} = useSelector(
    (state: RootState) => state.gameBoard,
  );
  return (
    <View
      style={{
        backgroundColor: '#448AFF',
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'space-between',
      }}>
      {winnerUserData === 'Berabere' ? (
        <Text style={GlobalStyles.fs30bold}>Oyun Berabere Bitti</Text>
      ) : winnerUserData ? (
        <View
          style={{width: 170, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={GlobalStyles.fs30bold}>
            Kazanan Oyuncu {winnerUserData?.id}
          </Text>
        </View>
      ) : (
        <Button buttonColor="#448AFF" mode="contained">
          Oyuncu 1
        </Button>
      )}
    </View>
  );
}
