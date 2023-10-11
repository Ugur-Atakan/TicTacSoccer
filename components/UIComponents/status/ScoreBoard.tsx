import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {ViewStyles} from '../../../style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';

export default function ScoreBoard() {
  const Scores=useSelector((state:RootState)=>state.gameBoard.scores);
  const p1Score=Scores[0];
  const p2Score=Scores[1];
  
  return (
    <View style={ViewStyles.container}>
      <View style={ViewStyles.playerContainer}>
        <View style={[ViewStyles.playerBadge, {backgroundColor: '#4CAF50'}]} />
        <Text style={ViewStyles.scoreText}>{p1Score}</Text>
      </View>
      <View style={ViewStyles.scoreSeparator}>
        <Text style={ViewStyles.scoreSeparatorText}>-</Text>
      </View>
      <View style={ViewStyles.playerContainer}>
        <Text style={ViewStyles.scoreText}>{p2Score}</Text>
        <View style={[ViewStyles.playerBadge, {backgroundColor: '#FF4081'}]} />
      </View>
    </View>
  );
}