import React, { useRef, useState, useEffect } from 'react';
import { AppState, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BaseGame from '../../game/index';
import StatusBar from '../../components/UIComponents/status';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { globalStlyes, textStyles } from '../../style';
import { RootState } from '../../utils/redux/stores/store';
import SoundPlayer from 'react-native-sound-player';
import BannerADS from '../../components/UIComponents/Banner';
import WinnerModal from '../../components/UIComponents/Modal/WinnerModal';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from 'react-native';
import { finishGame, startOnlineGame, synchronizeGame, updateTeamCells } from '../../utils/redux/actions/game';
import baseAPI from '../../utils/http/base';
import { HStack } from 'react-native-flex-layout';
import { Button } from 'react-native-paper';

export default function OnlineGame({route, navigation}:any) {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);
  const soundVolume = useSelector((state: RootState) => state.soundVolume.soundVolume);
  const roomCode = useSelector((state: RootState) => state.room.roomCode);
  const gameData = useSelector((state: RootState) => state.game.gameData);
  const userData = useSelector((state: RootState) => state.user.userData);
  const { socket } = useSelector((state: RootState) => state.socket);
  const dispatch = useDispatch();
  const isHost = route.params.isHost==true?true:false;

  const handleStartOnlineGame = async () => {
    try {
      const teams = (await baseAPI.get('game')).data;
        await dispatch(updateTeamCells(teams) as any);
       await dispatch(startOnlineGame() as any)
      socket?.emit('prepare-game', { roomCode: roomCode, teams: teams });
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  const handleStopOnlineGame = async () => {
    try {
      let data =
      { 
        roomCode: roomCode,
      }
      await dispatch(finishGame() as any);
            socket?.emit('stop-game',data);
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  useEffect(() => {
    if(socket){
      socket.on('game-data-changed', (data: any) => {
        try{
          dispatch(synchronizeGame(data.gameData) as any);

        }
        catch(error){
          console.log(error);
        }
      })

      socket?.on('stop-game', () => {
        try{
          dispatch(finishGame() as any);
        }
        catch(error){
          console.log(error);
        }
      });

      socket?.on('prepare-game', async (data: any) => {
        try{
         await dispatch(synchronizeGame(data.gameData) as any);
         await dispatch(startOnlineGame() as any)
        }
        catch(error){
          console.log(error);
        }
      }
      );
      return () => {
        socket.off('stop-game');
        socket.off('game-data-changed');
        socket.off('prepare-game');

      };
    }
  }, [socket]);


  useEffect(() => {
    if(socket){
    socket?.on('played', (data: any) => {
      try{
        console.log('PLAYED gelen data: ',data);
      }
      catch(error){
        console.log(error);
      }
    }
    );
    return () => {
      socket.off('played');
    };
  }
  }, [socket]);
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
      <HStack
      style={{
        justifyContent: 'space-around',
      }}
      shouldWrapChildren>
        {gameStatus==true?
 <Button
 disabled
 mode="contained"
 buttonColor="#448AFF" >
Oyunu Başlat
</Button>
:
 <Button
 mode="contained"
 buttonColor="#448AFF"
 onPress={handleStartOnlineGame}>
Oyunu Başlat
</Button>
}
     
{gameStatus==true?
  <Button
        buttonColor="#448AFF"
        mode="contained"
        onPress={handleStopOnlineGame}>
        Oyunu Bitir
      </Button>:
      <Button
      disabled
        buttonColor="#448AFF"
        mode="contained"
        onPress={handleStopOnlineGame}>
        Oyunu Bitir
      </Button>
}
    </HStack>
      </View>
      <View style={globalStlyes.footer}>
        <BannerADS />
      </View>
    </SafeAreaProvider>
  );
}

