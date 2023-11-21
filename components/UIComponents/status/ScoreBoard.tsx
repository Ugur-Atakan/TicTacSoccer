import {Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {width} from '../../../style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';

export default function ScoreBoard() {
  const Scores=useSelector((state:RootState)=>state.game.scores);
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
const ViewStyles=StyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 30,
      justifyContent: 'space-around',
      backgroundColor: '#448AFF',
      width: width * 0.25,
      height: width * 0.09,
    },
  
    playerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    playerBadge: {
      backgroundColor: 'blue',
      borderRadius: 50,
      width: width * 0.09,
      height: width * 0.09,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 0,
    },
  
    scoreText: {
      fontSize: width * 0.045,
      marginHorizontal: 5,
      fontWeight: 'bold',
      color: '#fff',
    },
    scoreSeparator: {
      paddingHorizontal: width * 0.025,
    },
    scoreSeparatorText: {
      fontSize: width * 0.045,
      fontWeight: 'bold',
      color: '#fff',
    }
})