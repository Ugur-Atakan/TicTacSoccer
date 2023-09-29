import {Button, Text} from 'react-native-paper';
import React from 'react';
import GlobalStyles, { width } from '../../../utils/globalStyles';
import {StyleSheet, View} from 'react-native';
import {RootState} from '../../../utils/redux/stores/store';
import {useSelector} from 'react-redux';
import Circle from './circle';
export default function CurrentPlayer() {
  const {winnerUserData, currentPlayer} = useSelector(
    (state: RootState) => state.gameBoard,
  );
  return (
    <View>
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
        <View style={{backgroundColor:'#448AFF',
        width: width * 0.3,
        height: width * 0.1,
        borderRadius:30,
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        }}>
    <Text style={{color:'white',fontWeight:'bold',fontSize:width*0.04,paddingRight:10}}>Oyuncu</Text>
    <Circle />
        </View>
      )}
    </View>
  );
}


const style=StyleSheet.create({
  currentplayer:{
    backgroundColor: '#448AFF',
    borderRadius: 20,
    height: 40,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    alignItems:'stretch',
  }
})