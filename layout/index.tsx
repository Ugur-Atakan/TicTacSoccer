import {View, StyleSheet} from 'react-native';
import GameHeader from '../components/UIComponents/header/GameHeader';
import StatusBar from '../components/UIComponents/status';
import BottomButtons from '../components/UIComponents/buttons';
import BaseGame from '../game/index';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

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
      <View style={Styles.footer} />
    </SafeAreaProvider>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303F9F',
  },
  imageBg: {height: null, overflow: 'hidden', flex: 1},

  header: {
    flex: 0.2,
    paddingHorizontal: 1,
    marginTop: 1,
    marginBottom: 0,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    shadowColor: 'red',
  },
  gameStatus: {
    flex: 0.1,
    marginTop: 25,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginLeft: 6,
  },
  game: {
    flex: 2.0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomButtons: {
    flex: 0.5,
  },
  footer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
});
