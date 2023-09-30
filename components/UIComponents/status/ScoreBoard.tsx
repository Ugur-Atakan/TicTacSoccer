import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {ViewStyles} from '../../../style';

export default function ScoreBoard({player1Score, player2Score}: any) {
  return (
    <View style={ViewStyles.container}>
      <View style={ViewStyles.playerContainer}>
        <View style={[ViewStyles.playerBadge, {backgroundColor: '#4CAF50'}]} />
        <Text style={ViewStyles.scoreText}>{player1Score}</Text>
      </View>
      <View style={ViewStyles.scoreSeparator}>
        <Text style={ViewStyles.scoreSeparatorText}>-</Text>
      </View>
      <View style={ViewStyles.playerContainer}>
        <Text style={ViewStyles.scoreText}>{player2Score}</Text>
        <View style={[ViewStyles.playerBadge, {backgroundColor: '#FF4081'}]} />
      </View>
    </View>
  );
}