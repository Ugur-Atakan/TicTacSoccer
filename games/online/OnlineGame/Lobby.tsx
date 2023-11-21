import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { globalStlyes, width } from '../../../style';
import { Text } from 'react-native-paper';
import { RootState } from '../../../utils/redux/stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../../../utils/socketService';
import { roomPlayerstoGameBoard, updateJoinedUsersState, updatejoinedUsers } from '../../../utils/redux/reducers/roomReducer';
import baseAPI from '../../../utils/http/base';

export default function Lobby({ route }:any){
    const {connectedUsers} = useSelector((state:RootState)=>state.room);
    const roomCode = route.params?.roomCode || 'Bekleniyor';
    const dispatch = useDispatch();   
    useEffect(() => {
     baseAPI.get(`/room/room-players?roomCode=${roomCode}`).then((res)=>{
      dispatch(roomPlayerstoGameBoard({connectedUsers: res.data}) as any )
      dispatch(updateJoinedUsersState({ connectedUsers: res.data}) as any );
    }
      ).catch((err)=>{
        console.log(err);
      });
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