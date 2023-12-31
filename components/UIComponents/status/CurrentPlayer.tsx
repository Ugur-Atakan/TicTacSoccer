import {Text} from 'react-native-paper';
import React from 'react';

import {View} from 'react-native';
import {RootState} from '../../../utils/redux/stores/store';
import {useSelector} from 'react-redux';
import Circle from './circle';
import { textStyles, width } from '../../../style';
export default function CurrentPlayer() {
  const {winnerUserData, currentPlayer} = useSelector((state: RootState) => state.game);
  return (
        <View style={{backgroundColor:'#448AFF',
        width: width * 0.28,
        height: width * 0.09,
        borderRadius:50,
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        }}>
    <Text style={{color:'white',fontWeight:'bold',fontSize:width*0.035,paddingRight:10}}>Oyuncu</Text>
    <Circle />
       
    </View>
  );
}

