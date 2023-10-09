import React from 'react';
import CurrentPlayer from './CurrentPlayer';
import {View} from 'react-native';
import ScoreBoard from './ScoreBoard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';
import WinnerUser from './WinnerPlayer';

export default function StatusBar() {
  
  const Scores=useSelector((state:RootState)=>state.gameBoard.scores);

  const p1Score=Scores[0];
  const p2Score=Scores[1];

  return (
    <View>
    <View>
       <WinnerUser/>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
      }}>
       
      <ScoreBoard player2Score={p1Score} player1Score={p2Score} />
      <CurrentPlayer />
    </View>
    </View>
  );
}
