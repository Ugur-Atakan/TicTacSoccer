import React from 'react';
import CurrentPlayer from './CurrentPlayer';
import {View} from 'react-native';
import ScoreBoard from './ScoreBoard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';
import { Text } from 'react-native-paper';
import { width } from '../../../style';
export default function StatusBar() {

  const Round = useSelector((state:RootState)=>state.game.round);

  return (
    <View>
      <View style={{backgroundColor:'rgba(255,255,255,0.1)'}}>
        <Text style={{color:'white',fontWeight:'bold',fontSize:width*0.05,textAlign:'center'}}>Round {Round}</Text>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
      }}>
       
      <ScoreBoard />
      <CurrentPlayer />
    </View>
    </View>
  );
}
