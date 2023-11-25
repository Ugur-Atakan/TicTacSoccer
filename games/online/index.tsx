import React, { useRef, useState, useEffect, useCallback } from 'react';
import { AppState, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BaseGame from '../../game/index';
import StatusBar from '../../components/UIComponents/status';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { globalStlyes, modalStyles, textStyles } from '../../style';
import { RootState } from '../../utils/redux/stores/store';
import SoundPlayer from 'react-native-sound-player';
import BannerADS from '../../components/UIComponents/Banner';
import { useFocusEffect } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import { finishGame, gameReset, listenerFinishGame, listenerNextPlayerTurn, listenerNextRound, nextPlayerTurn, nextRound, playListener, startOnlineGame, updateTeamCells } from '../../utils/redux/actions/game';
import baseAPI from '../../utils/http/base';
import { HStack } from 'react-native-flex-layout';
import { Button, Modal, Portal } from 'react-native-paper';

export default function OnlineGame({ route, navigation }: any) {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [visible, setVisible] = useState(false);

  const { socket } = useSelector((state: RootState) => state.socket);
  const roomCode = useSelector((state: RootState) => state.room.roomCode);
  const soundVolume = useSelector((state: RootState) => state.soundVolume.soundVolume);
  
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);
  const { winnerUserData } = useSelector((state: RootState) => state.game);
  const Scores = useSelector((state: RootState) => state.game.scores);
 
  const dispatch = useDispatch();
  const isHost = route.params.isHost == true ? true : false;
  const containerStyle = { backgroundColor: '#BDBDBD', padding: 20 };


  const hideModal = () => setVisible(false);

  const listenPrepareGame = () => {
    console.log('listenPrepareGame');
    try {
      dispatch(gameReset() as any);
      navigation.navigate('OnlineGame', { isHost: false } as any);
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  const StartOnlineGame = async () => {
    try {
      const teams = (await baseAPI.get('game')).data;
      await dispatch(updateTeamCells(teams) as any);
      socket.emit('start-game', { roomCode: roomCode, teams: teams });
      await dispatch(startOnlineGame() as any)
      console.log('StartOnlineGame', { roomCode: roomCode, teams: teams });
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  const ListenStartOnlineGame = async (data: any) => {
    console.log('ListenStartOnlineGame', data);
    try {
      await dispatch(updateTeamCells(data) as any);
      dispatch(startOnlineGame() as any)
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  const StopOnlineGame = async () => {
    console.log('StopOnlineGame');
    try {
      await dispatch(finishGame(roomCode) as any);
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  const ListenStopOnlineGame = async () => {
    try {
      await dispatch(listenerFinishGame() as any);
      hideModal();
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  };

  const ListenPlayed = (data: any) => {
    console.log('ListenPlayed', data.data);
    try {
      dispatch(playListener(data.data) as any);
    } catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  }
  const ListenNextPlayer = () => {
    console.log('ListenNextPlayer');
    try {
      dispatch(listenerNextPlayerTurn() as any);
    }
    catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  }

  const ListenNextRound = () => {
    console.log('ListenNextRound');
    try {
      dispatch(listenerNextRound() as any);
      hideModal();
    }
    catch (error) {
      console.error('Bir hata oluştu:', error);
    }
  }

  useEffect(() => {
    if (socket) {
      socket.on('game-prepared', listenPrepareGame);
      socket.on('game-started', ListenStartOnlineGame);
      socket.on('game-stopped', ListenStopOnlineGame);
      socket.on('played', ListenPlayed);
      socket.on('next-player', ListenNextPlayer)
      socket.on('next-round', ListenNextRound)

      return () => {
        socket.off('game-prepared');
        socket.off('game-started');
        socket.off('game-stopped');
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
   useCallback(() => {

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

  useEffect(() => {
    if (winnerUserData?.id != null) {
      setVisible(true);
    }
  }, [winnerUserData]);
  return (
    <SafeAreaProvider style={globalStlyes.container}>
      <Portal>
        <Modal visible={visible} contentContainerStyle={containerStyle}>
          <Text style={{ fontSize: 30, alignSelf: 'center', fontWeight: 'bold' }}>BU RAUND BİTTİ !</Text>
          <View style={{ padding: 10, margin: 10 }}>
            <Text variant="headlineLarge"> Kazanan Oyuncu {JSON.stringify(winnerUserData.id)}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={[modalStyles.PlayersBackGround, { backgroundColor: '#4CAF50' }]}>
              <Text style={textStyles.fs60whiteBold}>{Scores[0]}</Text>
            </View>
            <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>VS</Text>
            <View style={[modalStyles.PlayersBackGround, { backgroundColor: '#FF4081' }]}>
              <Text style={textStyles.fs60whiteBold}>{Scores[1]}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10 }}>
            <Button
              buttonColor="#448AFF"
              mode="contained"
              disabled={!isHost}
              onPress={() => {
                hideModal();
                dispatch(finishGame(roomCode) as any);
              }}>
              Oyunu Bitir
            </Button>
            <Button
              mode="contained"
              buttonColor="#448AFF"
              disabled={!isHost}
              onPress={
                () => {
                  dispatch(nextRound(roomCode) as any);
                  hideModal();
                }}>
              Sonraki Raund
            </Button>
          </View>
        </Modal>
      </Portal>


      <View style={globalStlyes.gameStatus}>
        <Text style={textStyles.fs15white}>ROOM CODE : {roomCode}</Text>
        <StatusBar />
      </View>
      <View style={globalStlyes.game}>
        <BaseGame isOnlineGame={true} />
      </View>

      <View style={globalStlyes.bottomButtons}>
        <HStack
          style={{
            justifyContent: 'space-around',
          }}
          shouldWrapChildren>
          {
            (gameStatus == true) ?
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
                onPress={isHost ? StartOnlineGame : undefined}
                disabled={!isHost}
              >
                Oyunu Başlat
              </Button>
          }

          {gameStatus == true ?
            <Button
              buttonColor="#448AFF"
              mode="contained"
              onPress={StopOnlineGame}
              disabled={!isHost}
            >
              Oyunu Bitir
            </Button> :
            <Button
              disabled
              buttonColor="#448AFF"
              mode="contained"
            >
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