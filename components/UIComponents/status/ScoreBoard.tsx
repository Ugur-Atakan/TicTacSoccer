import {Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

export default function ScoreBoard({player1Score, player2Score}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <View style={[styles.playerBadge, {backgroundColor: '#8BC34A'}]} />
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
    borderRadius: 10,
    justifyContent: 'space-around',
    backgroundColor: '#448AFF',
    width: 125,
  },

  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerBadge: {
    backgroundColor: 'blue',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
    zIndex: 0,
  },
  playerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  scoreText: {
    fontSize: 24,
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  scoreSeparator: {
    paddingHorizontal: 5,
  },
  scoreSeparatorText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});
