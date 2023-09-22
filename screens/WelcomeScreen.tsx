import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
function WelcomeScreen(): JSX.Element {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 3}}>
        <Text style={{fontSize: 32}}>
          Tic Tac Toe Futboller Game'e hoş geldiniz
        </Text>
        <Text>
          Oyun Modlarını ve kuraları görmek için soldaki menüyü
          kullanabilirsiniz
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default WelcomeScreen;
