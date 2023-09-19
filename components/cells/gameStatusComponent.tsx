import * as React from 'react';
import {View} from 'react-native';
import GlobalStyles from '../../utils/globalStyles';
import {Text} from '@rneui/themed'

const GameStatusComponent=({winnerUser,currentPlayer}:any)=>{

    return(
        <View>
        {winnerUser === 'Berabere' ? (
            <Text style={GlobalStyles.fs30bold}>Berabere Bitti</Text>
          ) : winnerUser ? (
            <Text style={GlobalStyles.fs30bold}>
              Kazanan oyuncu {winnerUser}
            </Text>
          ) : (
            <Text style={GlobalStyles.fs30bold}>
              Sıradaki oyuncu {currentPlayer}
            </Text>
          )}
        </View>
    )
}

export default GameStatusComponent;