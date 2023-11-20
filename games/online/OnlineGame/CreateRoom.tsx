import React, { useEffect, useState } from 'react';
import { SafeAreaView, Alert, Share, View, Image } from 'react-native';
import { globalStlyes, width } from '../../../style';
import { Button, Text, IconButton, Card } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import {updateJoinedUsersState} from '../../../utils/redux/reducers/roomReducer';
import { RootState } from '../../../utils/redux/stores/store';
import { createRoom } from '../../../utils/redux/reducers/roomReducer';

export default function CreateRoom() {
  const { socket } = useSelector((state: RootState) => state.socket);
  const { roomCode, connectedUsers } = useSelector((state: RootState) => state.room);
  const { userData } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('oda kodu: ', roomCode);
  }, [roomCode]);

  useEffect(() => {
    console.log(roomCode,'kodlu oda',socket?.id,'idli soket tarafından oluşturuldu');
    if (socket) {
      socket.on('joined-room', (data: any) => {
        console.log('joined-room-logu: ', data);
        dispatch(updateJoinedUsersState({
          connectedUsers: data.roomUsers,
        }) as any );
      });
    }
    if (socket && !roomCode) {
      dispatch(
        createRoom({
          user: userData,
        } as any) as any,
      );
    }
    if (roomCode) {
      socket?.emit('join-room', { userId: userData.id, roomCode });
    }

    return () => {
      socket?.off('joined-room');
    };
  }, [socket, roomCode]);
  
  useEffect(() => {
    console.log('connectedUsers değişti: ', connectedUsers);
  }
  , [connectedUsers]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `İşte Oda Kodu: ${roomCode} Bu kodu kullanarak benimle birlikte 3 5 2 (Tiki Taka) oynayabilirsin. Haydi seni bekliyorum!`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={globalStlyes.container}>
      <View>
        <Text
          style={{
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          ONLİNE OYUN MODU
        </Text>
      </View>
      <View style={{ flex: 1, paddingTop: width * 0.15 }}>
        <View>
          <Button
            mode="contained"
            buttonColor="#448AFF"
            onPress={() => {
              // createGame();
            }}>
            YENİ ONLİNE OYUN OLUŞTUR.
          </Button>
          <Text
            style={{
              fontSize: width * 0.03,
              color: 'white',
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Aşağıdaki oluşacak oyun kodunu arkadaşınızla paylaşarak onu oyun
            odanıza davet edebilirsiniz.
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            padding: width * 0.06,
          }}>
          <Text
            selectable
            style={{
              fontSize: width * 0.12,
              color: 'white',
              alignSelf: 'center',
              backgroundColor: '#3F51B5',
              borderRadius: 30,
              padding: width * 0.03,
            }}>
            {roomCode}
          </Text>
          <IconButton
            icon="share"
            iconColor="rgba(255,255,255,0.9)"
            size={80}
            onPress={onShare}
          />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text
          style={{
            fontSize: 30,
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          OYUNCULAR
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex:1,
              backgroundColor: '#4CAF50',
              padding: 10,
              borderRightWidth: 1,
              borderColor: 'white',
            }}>
            <Text
              style={{
                fontSize: width*0.045,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
            {connectedUsers[0]?.name+' '+connectedUsers[0]?.lastName}
            </Text>
            <Text
              style={{
                fontSize: width*0.045,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              {' '}
              {connectedUsers[0]?.name ?'Hazır':'Bekleniyor'}
            </Text>
          </View>
          <View
            style={{
              flex:1,
              backgroundColor: '#FF4081',
              padding: 10,
              borderLeftWidth: 1,
              borderColor: 'white',
            }}>
            <Text
              style={{
                fontSize: width*0.045,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
            {connectedUsers[1]?.name+' '+connectedUsers[1]?.lastName ?connectedUsers[1]?.name+' '+connectedUsers[1]?.lastName :''}
            </Text>
            <Text
              style={{
                fontSize: width*0.045,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              {' '}
              {connectedUsers[1]?.name ?'Hazır':'Bekleniyor'}
            </Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button
            mode="contained"
            buttonColor="#448AFF"
            onPress={() => {
              console.log('Oyunu Başlat');
            }}>
            OYUNU BAŞLAT
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}