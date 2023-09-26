import {View,Text, ImageBackground} from 'react-native';
import GameHeader from '../components/UIComponents/header/GameHeader';
import StatusBar from '../components/UIComponents/status';
import BottomButtons from '../components/UIComponents/buttons';
import BaseGame from '../game/index';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function MainLayout() {
  const image = {
    uri: 'https://e1.pxfuel.com/desktop-wallpaper/812/237/desktop-wallpaper-55-soccer-field-soccer-pitch.jpg',
  };

  return (
    <SafeAreaProvider style={{flex:1}}>
    <ImageBackground source={image}  style={{height: null, overflow: "hidden", flex: 1}}>
        <View
          style={{
            flex: 0.5,
            paddingHorizontal: 1,
            marginTop: 16,
            marginBottom: 36,
            backgroundColor: 'rgba(255,255,255,0.2)',
            justifyContent: 'center',
            shadowColor: 'red',
          }}>
          <GameHeader />
        </View>
        <View
          style={{flex: 0.7, justifyContent: 'center', marginHorizontal:5}}>
          <StatusBar />
        </View>
        <View style={{flex: 4,justifyContent:'center',alignItems:'center'}}>
          <BaseGame />
        </View>
        <View style={{flex: 0.5}}>
          <BottomButtons />
        </View>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.3)',
          }}>
          <Text>
            ADS/Sponsor Area
          </Text>
        </View>
        </ImageBackground>
    </SafeAreaProvider>
  );
}
