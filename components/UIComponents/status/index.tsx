import React from 'react';
import CurrentPlayer from './CurrentPlayer';
import {View} from 'react-native';
import ScoreBoard from './ScoreBoard';
import {HStack} from 'react-native-flex-layout';

export default function StatusBar() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
      <HStack spacing={100}>
        <View>
          <ScoreBoard player2Score={5} player1Score={4} />
        </View>
        <View>
          <CurrentPlayer />
        </View>
      </HStack>
    </View>
  );
}
