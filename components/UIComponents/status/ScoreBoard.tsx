import {Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {height, width} from '../../../utils/globalStyles';

export default function ScoreBoard({player1Score, player2Score}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <View style={[styles.playerBadge, {backgroundColor: '#4CAF50'}]} />
        <Text style={styles.scoreText}>{player1Score}</Text>
      </View>
      <View style={styles.scoreSeparator}>
        <Text style={styles.scoreSeparatorText}>-</Text>
      </View>
      <View style={styles.playerContainer}>
        <Text style={styles.scoreText}>{player2Score}</Text>
        <View style={[styles.playerBadge, {backgroundColor: '#FF4081'}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'space-around',
    backgroundColor: '#448AFF',
    width: width * 0.3,
    height: width * 0.1,
  },

  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerBadge: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: width * 0.1,
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },

  scoreText: {
    fontSize: width * 0.05,
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: '#fff',
  },
  scoreSeparator: {
    paddingHorizontal: width * 0.03,
  },
  scoreSeparatorText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#fff',
  },
});
