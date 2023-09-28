import React from 'react';
import CurrentPlayer from './CurrentPlayer';
import {View} from 'react-native';
import ScoreBoard from './ScoreBoard';

export default function StatusBar() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
      }}>
      <ScoreBoard player2Score={5} player1Score={4} />
      <CurrentPlayer />
    </View>
  );
}
