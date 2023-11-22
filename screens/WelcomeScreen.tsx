import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { VStack } from 'react-native-flex-layout';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../utils/redux/stores/store';
import { width } from '../style';
import { synchronizeGame } from '../utils/redux/reducers/gameReducers/gameReducer.duck';

function WelcomeScreen({ navigation }: any): JSX.Element {
  const [isConnected, setIsConnected] = useState(false);
  const { socket } = useSelector((state: RootState) => state.socket);
  const { userData } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if(socket){
      socket.on('game-data-changed', (data: any) => {
        dispatch(synchronizeGame(data.gameData) as any);
          navigation.navigate('OnlineGame');
     
        console.log('game-data-changed listener:', data);
      });
      return () => {
        socket.off('game-data-changed');
      };
    }
  }, [socket]);


  useEffect(() => {
    if (socket) {
      function onConnect() {
        setIsConnected(true);
        socket!.emit('register-socket', {
          id: userData.id,
        });
      }

      function onDisconnect() {
        setIsConnected(false);
      }
      
      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);

      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
      };
    }
  }, [socket, userData]);

  useEffect(() => {
    if (socket) {
      if (!isConnected) {
        socket.connect();
      }
      console.log('socket id: ', socket.id, 'isConnected: ', isConnected);
    }
  }, [isConnected, socket]);

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#303F9F' }}>
      <View style={{ flex: 3.5, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: width * 0.08, color: '#fff' }}>
          3 5 2'YE HOŞ GELDİNİZ
        </Text>
      </View>

      <View style={{ flex: 6 }}>
        <VStack
          center
          shouldWrapChildren
          spacing={10}
          style={{ paddingTop: 100 }}>
          <Text style={{ fontSize: width * 0.05, color: 'white' }}>
            {' '}
            Ya 3 ya 5'ini bilir Kazanırsın
          </Text>
          <Text style={{ fontSize: width * 0.05, color: 'white' }}>
            {' '}
            Yada 2 bilir kaybedersin
          </Text>
        </VStack>

      </View>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: width * 0.04, color: '#fff' }}>
          Oyun kuralarını görmek için soldaki menüyü kullanabilirsiniz
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
export default WelcomeScreen;
