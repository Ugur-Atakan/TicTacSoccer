import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { Text, IconButton, TextInput } from 'react-native-paper';
import { width } from '../../../style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';
import { joinRoomState } from '../../../utils/redux/reducers/roomReducer';


export default function JoinRoom({ navigation }: any) {
    const [roomCode, setRoomCode] = useState('');
    const { socket } = useSelector((state: RootState) => state.socket);
    const { userData } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const joinGame = async () => {
        await dispatch(joinRoomState({ roomCode: roomCode, user: userData }) as any);
        if (socket) {
            socket.emit('join-room', { roomCode, userId: userData.id });
        }
        navigation.navigate('Lobby');
    };

    useEffect(() => {
        socket?.on('joined-room', (data: any) => {
            navigation.navigate('Lobby', { code: roomCode });
        }
        );
        return () => {
            socket?.off('joined-room');
        }
    }, [socket]);

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