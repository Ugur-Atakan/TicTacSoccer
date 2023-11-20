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
import {globalStlyes} from '../../../style';
import {Button, Text, IconButton, Card, TextInput} from 'react-native-paper';
import {width} from '../../../style';
import {useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/stores/store';
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
          justifyContent:'space-around',
        }}>
          <View style={{flex:1,borderWidth:2,backgroundColor:'#1976D2',alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('CreateRoom')}>
          <Text style={{fontSize: 50, color: 'white', alignSelf: 'center'}}>
            {' '}
            OYUN OLUŞTUR
          </Text>
        </TouchableOpacity>
          </View>

          <View style={{flex:1,borderWidth:2,backgroundColor:'#536DFE',alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('JoinRoom')}>
          <Text style={{fontSize: 50, color: 'white', alignSelf: 'center'}}>
            {' '}
            OYUNA KATIL
          </Text>
        </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}
