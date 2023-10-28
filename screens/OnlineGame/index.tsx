import React, {useState} from 'react';
import {
  SafeAreaView,
  Alert,
  Share,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {globalStlyes} from '../../style';
import {Button, Text, IconButton, Card, TextInput} from 'react-native-paper';
import {width} from '../../style';
import {useSelector} from 'react-redux';
import {RootState} from '../../utils/redux/stores/store';
export default function OnlineGameManagement({navigation, route}: any) {
  const [roomCode, setRoomCode] = useState('');
  const {socket} = useSelector((state: RootState) => state.socket);
  const {userData} = useSelector((state: RootState) => state.user);
  const joinGame = () => {
    console.log('code', roomCode);
    if (socket) {
      socket.emit('join-room', {roomCode, userId: userData.id});
    }
  };

  return (
    <SafeAreaView style={globalStlyes.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#536DFE',
          borderWidth: 1,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CreateRoom')}>
          <Text style={{fontSize: 50, color: 'white', alignSelf: 'center'}}>
            {' '}
            OYUN OLUŞTUR
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#3F51B5',
          borderWidth: 1,
          padding: 10,
        }}>
        <Text style={{fontSize: 50, color: 'white', alignSelf: 'center'}}>
          {' '}
          OYUNA KATIL
        </Text>
        <TextInput
          label="Oyun Kodu"
          mode="outlined"
          placeholder="Oyun Kodunu Giriniz"
          style={{margin: 20, borderRadius: 50}}
          onChangeText={text => setRoomCode(text)}
        />

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#536DFE',
            borderRadius: 30,
            height: width * 0.15,
          }}
          onPress={() => {
            joinGame();
            navigation.navigate('Temel Oyun', {
              names: ['Brent', 'Satya', 'Michaś'],
            });
          }}>
          <Text style={{fontSize: 30, color: 'white', alignSelf: 'center'}}>
            OYUNA KATIL
          </Text>
          <IconButton icon="send" size={50} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
