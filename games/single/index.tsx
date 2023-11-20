import React, { useRef, useState, useEffect } from 'react';
import { AppState, View } from 'react-native';
import { useSelector } from 'react-redux';

import BaseGame from '../../game/index';
import GameHeader from '../../components/UIComponents/header/GameHeader';
import StatusBar from '../../components/UIComponents/status';
import BottomButtons from '../../components/UIComponents/buttons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { globalStlyes } from '../../style';
import { RootState } from '../../utils/redux/stores/store';
import SliderComponent from '../../components/UIComponents/slider/index';
import SoundPlayer from 'react-native-sound-player';
import BannerADS from '../../components/UIComponents/Banner';
import WinnerModal from '../../components/UIComponents/Modal/WinnerModal';
import { useFocusEffect } from '@react-navigation/native';

export default function SingleGame() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const gameStatus = useSelector((state: RootState) => state.gameStatus.gameStatus);
  const soundVolume = useSelector((state: RootState) => state.soundVolume.soundVolume);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {

      if (gameStatus === true && appStateVisible == 'active') {
        try {
          SoundPlayer.setVolume(soundVolume);
          SoundPlayer.playSoundFile('bgsound', 'm4a')
  
        } catch (e) {
          console.log(`cannot play the sound file`, e)
        }
      }
      return () => {
        try {
        SoundPlayer.stop();
      } catch (e) {
        console.log(`cannot stop the sound file`, e)
      }
      };
    }, [gameStatus, appStateVisible, soundVolume]),
  );

  return (
    <SafeAreaProvider style={globalStlyes.container}>
      <WinnerModal />
      <View style={globalStlyes.gameStatus}>
        <StatusBar />
      </View>
      <View style={globalStlyes.game}>
        <BaseGame />
      </View>
      <View style={globalStlyes.bottomButtons}>
        <BottomButtons />
      </View>
      <View style={globalStlyes.footer}>
        <BannerADS />
      </View>
    </SafeAreaProvider>
  );
}

