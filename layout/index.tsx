import {View,SafeAreaView} from "react-native";
import GameHeader from "../components/GameHeader";
import StatusBar from "../components/status";
import BottomButtons from "../components/buttons";
import BaseGame from "../games/BaseGame";
import { Text } from "react-native";
export default function MainLayout() {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'#300c3b'}}>
            <View style={{flex:1}}>
                <GameHeader />
            </View>
            <View style={{flex:0.7,justifyContent:'center'}}>
                <StatusBar/>
            </View>
            <View style={{flex:4}}>
              <BaseGame />
            </View>
            <View style={{flex:0.5}}>
               <BottomButtons />
            </View>
            <View style={{flex:0.7,backgroundColor:'white'}}>
        <Text>ADS/Sponsor Area</Text>
            </View>
        </SafeAreaView>
    )
}