import {Text} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {HStack} from 'react-native-flex-layout';

export default function ScoreBoard({player1Score, player2Score}: any) {
  return (
    // <View style={{ backgroundColor: 'darkslategrey', height:40,
    // borderRadius:20,
    // justifyContent:'center',alignItems:'center'}}>
    //     <HStack spacing={3}>
    //         <Text style={{ color: 'red', fontSize: 20, backgroundColor: 'white' }}> </Text>
    //         <Text style={{ color: 'white', fontSize: 20 }}> P 1</Text>
    //         <View style={{backgroundColor:'#50C878',paddingHorizontal:6}}>
    //         <Text style={{ fontWeight:'900', fontSize: 22}}> {player1Score}-{player2Score} </Text>
    //         </View>
    //         <Text style={{ color: 'white', fontSize: 20 }}> P 2</Text>
    //         <Text style={{fontSize: 30, backgroundColor: 'blue', borderRadius:0}}> </Text>
    //     </HStack>
    //     <View style={{backgroundColor:'red',borderRadius:20,height:50}}></View>
    // </View>
    <View style={styles.container}>
      <View style={styles.playerContainer}>
        <View style={[styles.playerBadge, {backgroundColor: 'blue'}]}>
          <Text style={styles.playerText}>P1</Text>
        </View>
        <Text style={styles.scoreText}>{player1Score}</Text>
      </View>
      <View style={styles.scoreSeparator}>
        <Text style={styles.scoreSeparatorText}>-</Text>
      </View>
      <View style={styles.playerContainer}>
        <Text style={styles.scoreText}>{player2Score}</Text>
        <View style={[styles.playerBadge, {backgroundColor: 'red'}]}>
          <Text style={styles.playerText}>P2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 20,
    justifyContent: 'space-around',
    width: 170,
  
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
    color: '#000',
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
