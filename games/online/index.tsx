import React, { useRef, useState, useEffect } from 'react';
import { AppState, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import BaseGame from '../../game/index';
import StatusBar from '../../components/UIComponents/status';
import BottomButtons from '../../components/UIComponents/buttons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { globalStlyes, textStyles } from '../../style';
import { RootState } from '../../utils/redux/stores/store';
import SoundPlayer from 'react-native-sound-player';
import BannerADS from '../../components/UIComponents/Banner';
import WinnerModal from '../../components/UIComponents/Modal/WinnerModal';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from 'react-native';
import { synchronizeGame } from '../../utils/redux/reducers/gameReducers/gameReducer.duck';

export default function OnlineGame({ route, navigation }: any) {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);
  const soundVolume = useSelector((state: RootState) => state.soundVolume.soundVolume);
  const roomCode = useSelector((state: RootState) => state.room.roomCode);
  const gameData = useSelector((state: RootState) => state.game);
  const userData = useSelector((state: RootState) => state.user.userData);
  const { socket } = useSelector((state: RootState) => state.socket);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(socket){
      socket.on('game-data-changed', (data: any) => {
        console.log('socketen gelen data',JSON.stringify(data.gameData));
        console.log('gameData', gameData);
        if (!isGameDataEqual(data.gameData, gameData)) {
          dispatch(synchronizeGame(data.gameData) as any);
        }else{
          console.log('gameData is equal');
        }
      });
      return () => {
        socket.off('game-data-changed');
      };
    }
  }, [gameData]);

  useEffect(() => {
  console.log('game-data-change-sender', gameData);
  let data={
    roomCode:roomCode,
    gameData: gameData,
    userId: userData.id
  } 
socket?.emit('game-data-changed', data);

  return () => {
    socket?.off('game-data-changed');
  };
}
, [gameData]);

const isGameDataEqual = (newGameData: any, currentGameData: any): boolean => {
  return JSON.stringify(newGameData) === JSON.stringify(currentGameData);
};

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
      <Text style={textStyles.fs15white}>ROOM CODE : {roomCode}</Text>
        <StatusBar />
        
      </View>
      <View style={globalStlyes.game}>
        <BaseGame />
      </View>
      <View style={globalStlyes.bottomButtons}>
        <BottomButtons roomCode={roomCode} />
      </View>
      <View style={globalStlyes.footer}>
        <BannerADS />
      </View>
    </SafeAreaProvider>
  );
}

