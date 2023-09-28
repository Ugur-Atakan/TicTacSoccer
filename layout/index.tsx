import {View, StyleSheet} from 'react-native';
import GameHeader from '../components/UIComponents/header/GameHeader';
import StatusBar from '../components/UIComponents/status';
import BottomButtons from '../components/UIComponents/buttons';
import BaseGame from '../game/index';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {height, width} from '../utils/globalStyles';
import {Text} from 'react-native-paper';

export default function MainLayout() {
  return (
    <SafeAreaProvider style={Styles.container}>
      <View style={Styles.header}>
        <GameHeader />
      </View>
      <View style={Styles.gameStatus}>
        <StatusBar />
      </View>
      <View style={Styles.game}>
        <BaseGame />
      </View>
      <View style={Styles.bottomButtons}>
        <BottomButtons />
      </View>
      <View style={Styles.footer}>
        <Text>FOOTER</Text>
      </View>
    </SafeAreaProvider>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303F9F',
  },
  header: {
    flex: 0.25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
  },
  gameStatus: {
    marginTop: 15,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginLeft: 0,
  },
  game: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomButtons: {
    flex: 0.3,
    justifyContent: 'center',

  },
  footer: {
    flex: 0.5,
    backgroundColor: 'rgba(255,255,255,0.3)',
    maxHeight: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
