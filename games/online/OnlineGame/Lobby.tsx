import React, { useEffect, useState } from 'react';
import { SafeAreaView, Alert, View, Image } from 'react-native';
import { globalStlyes, width } from '../../../style';
import { Button, Text, IconButton, Card } from 'react-native-paper';
import { RootState } from '../../../utils/redux/stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../../../utils/socketService';
import { updatejoinedUsers } from '../../../utils/redux/reducers/roomReducer';
import baseAPI from '../../../utils/http/base';

export default function Lobby({ route }:any){
    const {connectedUsers} = useSelector((state:RootState)=>state.room);
    const roomCode = route.params?.roomCode || 'Bekleniyor';
    const dispatch = useDispatch();

    // useEffect(() => {
    //  baseAPI.get(`/room/room-players?roomCode=${roomCode}`).then((res)=>{
    //   console.log('joined-room-logu: ', res.data);
    //   dispatch(updatejoinedUsers({
    //     connectedUsers: res.data,
    //   }));
    //  }
    //   ).catch((err)=>{
    //     console.log(err);
    //   });
    // }, [socket]);

    useEffect(() => {

      socket?.on('joined-room', (data: any) => {
        console.log('joined-room-logu from Lobby: ', data.roomUsers);
        dispatch(updatejoinedUsers({
          connectedUsers: data.roomUsers,
        }) as any );
      }
      );
    }, [socket]);

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
              ONLİNE OYUN LOBİSİ
            </Text>
          </View>
          <View style={{ flex: 1, paddingTop: width * 0.15 }}>
            <Text style={{
                fontSize: 30,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>Oda Kodu</Text>
            <Text style={{
                fontSize: 30,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>{roomCode}</Text>
          </View>
          <View style={{ flex: 2, flexDirection: 'column' }}>
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
                {connectedUsers[1]?.name+' '+connectedUsers[1]?.lastName ?connectedUsers[1]?.name+' '+connectedUsers[1]?.lastName:'Bekleniyor'}
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
            <Text style={{
                    fontSize: width*0.045,
                    color: 'white',
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>Başlatma bekleniyor</Text>

          </View>
        </SafeAreaView>
      );
}