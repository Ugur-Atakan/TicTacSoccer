import {View,SafeAreaView} from "react-native";
import GameHeader from "../components/GameHeader";
import StatusBar from "../components/status";
import BottomButtons from "../components/buttons";
import BaseGame from "../game/index";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
export default function MainLayout() {
    const image = {uri: 'https://e1.pxfuel.com/desktop-wallpaper/812/237/desktop-wallpaper-55-soccer-field-soccer-pitch.jpg'};

    return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground  source={image} resizeMode="cover">
            <View style={{flex:0.5,paddingHorizontal:20,marginTop:16,marginBottom:36,backgroundColor:'rgba(255,255,255,0.2)',justifyContent:'center',shadowColor:'red'}}>
                <GameHeader />
            </View>
            <View style={{flex:0.7,justifyContent:'center',paddingHorizontal:5}}>
                <StatusBar/>
            </View>
            <View style={{flex:3.5,backgroundColor:'#013220'}}>
              <BaseGame />
            </View>
            <View style={{flex:0.5}}>
               <BottomButtons />
            </View>
            <View style={{flex:0.7,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(255,255,255,0.3)'}}>
        <Text style={{color:'white',fontSize:30,fontWeight:900}}>ADS/Sponsor Area</Text>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}