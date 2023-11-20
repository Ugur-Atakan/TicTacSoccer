import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    Alert,
    Share,
    View,
    Image,
    Touchable,
    TouchableOpacity,
} from 'react-native';
import { globalStlyes } from '../../../style';
import { Button, Text, IconButton, Card, TextInput } from 'react-native-paper';
import { width } from '../../../style';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';

export default function JoinRoom({ navigation }: any) {
    const [roomCode, setRoomCode] = useState('');
    const { socket } = useSelector((state: RootState) => state.socket);
    const { userData } = useSelector((state: RootState) => state.user);
    const { connectedSockets, connectedUsers } = useSelector((state: RootState) => state.room);

    const joinGame = () => {
        console.log('code', roomCode);
        console.log('connectedSockets', connectedSockets);
        console.log('connectedUsers', connectedUsers);
        if (socket) {
            socket.emit('join-room', { roomCode, userId: userData.id });
            console.log('odaya join olunmaya çalışıldı, userdata:',userData)
        }
        navigation.navigate('Lobby', { roomCode });
    };

    useEffect(() => {
        socket?.on('joined-room', (data: any) => {
            console.log('joined-room-logu: ', data.roomUsers);
            navigation.navigate('Lobby',{ code: roomCode});
        }
        );
        return () => {
            socket?.off('joined-room');
        }}, [socket]);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#3F51B5',
                borderWidth: 1,
                padding: 10,
            }}
        >
            <Text style={{ fontSize: 50, color: 'white', alignSelf: 'center' }}>
                {' '}
                OYUNA KATIL
            </Text>
            <TextInput
                label="Oyun Kodu"
                mode="outlined"
                placeholder="Oyun Kodunu Giriniz"
                style={{ margin: 10, marginTop: 50, paddingTop: 10, borderRadius: 50 }}
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
                }}>
                <Text style={{ fontSize: 30, color: 'white', alignSelf: 'center' }}>
                    OYUNA KATIL
                </Text>
                <IconButton icon="send" size={50} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}