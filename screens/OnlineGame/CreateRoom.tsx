import React, { useState } from "react";
import { SafeAreaView, Alert, Share, View, Image } from "react-native";
import { globalStlyes, width } from "../../style";
import { Button, Text, IconButton, Card } from "react-native-paper";
import { socket } from "../../utils/socketService";
import baseAPI from "../../utils/http/base";

export default function CreateRoomScreen() {
  const [roomCode, setRoomCode] = useState('                    ');
  const photo = { uri: 'https://picsum.photos/200' }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `İşte Oda Kodu: ${roomCode} Bu kodu kullanarak benimle birlikte 3 5 2 (Tiki Taka) oynayabilirsin. Haydi seni bekliyorum!`
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



  async function createGame() {
    try {
      const response = await baseAPI.get("room/create-room");
      //     const response = await axios.post("http://localhost:3003/api/room/create-room",{ email: "cefatihates@gmail.com"}),
      socket.emit("join-room-with-code", {
        roomCode: response.data.roomCode,
      });
      setRoomCode(response.data.roomCode);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <SafeAreaView style={globalStlyes.container}>
      <View>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}> ONLİNE OYUN MODU</Text>
      </View>
      <View style={{ flex: 2, paddingTop: width * 0.15 }}>
        <View>
          <Button
            mode="contained"
            buttonColor="#448AFF"
            onPress={() => { createGame() }}
          >
            YENİ ONLİNE OYUN OLUŞTUR.
          </Button>
          <Text style={{ fontSize: width * 0.03, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Aşağıdaki oluşacak oyun kodunu arkadaşınızla paylaşarak onu oyun odanıza davet edebilirsiniz.</Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', padding: width * 0.06 }}>
          <Text selectable style={{ fontSize: width * 0.120, color: 'white', alignSelf: 'center', backgroundColor: '#3F51B5', borderRadius: 30, padding: width * 0.03 }}>{roomCode}</Text>
          <IconButton
            icon="share"
            iconColor="rgba(255,255,255,0.9)"
            size={80}
            onPress={onShare}
          />

        </View>
      </View>
      <View style={{ flex: 3, flexDirection: "column" }}>
        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>OYUNCULAR</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#4CAF50', padding: 10, borderRightWidth: 2, height: 300 }}>
            <Image width={190} height={200} source={{ uri: 'https://media.licdn.com/dms/image/C4E03AQEcqn1DbcUfvg/profile-displayphoto-shrink_800_800/0/1651873246055?e=2147483647&v=beta&t=L8_md6oOE96E0a8YlI_p8ZoGWx77rg7LBxdMDcACbKE' }} />
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Fatih ATEŞ</Text>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Skoru: 56</Text>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}> Hazır</Text>
          </View>
          <View style={{ backgroundColor: '#FF4081', padding: 10, borderLeftWidth: 2, height: 300 }}>
            <Image width={190} height={200} source={{ uri: 'https://pbs.twimg.com/profile_images/924662122470141954/MrpWxlRK_400x400.jpg' }} />
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Orhan CANBULAT</Text>
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>Skoru: 1315</Text>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold', alignSelf: 'center' }}> Hazır</Text>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button
            mode="contained"
            buttonColor="#448AFF"
            onPress={() => { console.log("Oyunu Başlat") }}
          >
            OYUNU BAŞLAT
          </Button>
        </View>
      </View>
    </SafeAreaView>

  )
}
