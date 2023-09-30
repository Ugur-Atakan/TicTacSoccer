import React,{useRef,useState,useEffect} from 'react';
import {AppState,View} from 'react-native';
import {Text} from 'react-native-paper';
import Sound from 'react-native-sound';
import {useSelector} from 'react-redux';

import BaseGame from '../game/index';
import GameHeader from '../components/UIComponents/header/GameHeader';
import StatusBar from '../components/UIComponents/status';
import BottomButtons from '../components/UIComponents/buttons';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {globalStlyes} from '../style';
import { RootState } from '../utils/redux/stores/store';

export default function MainLayout() {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const gameStatus = useSelector((state: RootState) => state.gameStatus.gameStatus);



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

  console.log(appStateVisible);
  
  useEffect(() => {
    if(gameStatus==true&& appStateVisible=='active')
    {
      const backgroundMusic = new Sound('bgsound.m4a', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('Ses yüklenemedi', error);
        } else {
          backgroundMusic.play();
        }
      });
      return () => {
        backgroundMusic.stop();
        backgroundMusic.release();
        backgroundMusic.setVolume(0.0001); 
      };
    }
  }, [gameStatus,appStateVisible]);


  return (
    <SafeAreaProvider style={globalStlyes.container}>
      <View style={globalStlyes.header}>
        <GameHeader />
      </View>
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
        <Text>FOOTER</Text>
      </View>
    </SafeAreaProvider>
  );
}

