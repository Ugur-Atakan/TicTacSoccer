import * as React from 'react';
import {Text, View} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';
import handlers from './handlers';
import { gameStatus } from './redux/reducers/gameReducers/gameStatus';
import { useSelector } from 'react-redux';

const GameStatusChecker = () => {
const gamestats=useSelector()
  let game = 'GS';
  if ((gameStatus = 'NOT_STARTED')) {
    return (
      <View>
        <Text style={GlobalStyles.fs30bold}>Oyun Başlatılmadı</Text>
      </View>
    );
  } else if (game === 'IN_PROGRESS') {
    return (
      <View>
        <Text style={GlobalStyles.fs30bold}>Oyun Başladı</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={GlobalStyles.fs30bold}>Oyun Bitti</Text>
      </View>
    );
  }
};
export default GameStatusChecker;
