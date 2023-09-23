import {View,SafeAreaView} from "react-native";
import GameHeader from "../components/GameHeader";
import StatusBar from "../components/status";
import BottomButtons from "../components/buttons";
import { gameModes } from "../games";
export default function MainLayout() {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'#300c3b'}}>
            <View style={{flex:1}}>
                <GameHeader />
            </View>
            <View style={{flex:1,paddingTop:10,alignItems:'center'}}>
                <StatusBar/>
            </View>
            <View style={{flex:7}}>
              <gameModes.BaseGame />
            </View>
            <View style={{flex:1}}>
               <BottomButtons />
            </View>
        </SafeAreaView>
    )
}