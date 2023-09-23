import React from "react";
import ScoreBoard from './ScoreBoard'
import CurrentPlayer from "./CurrentPlayer";
import { View } from "react-native";

export default function StatusBar(){
    return (
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<View >
    <ScoreBoard player1Score={3} player2Score={5}/>
    </View>
<View style={{backgroundColor:'lightgray',
borderRadius:20,
height:40,
paddingHorizontal:10,
justifyContent:'center',
alignItems:'center'
}}>
<CurrentPlayer />    
</View>
</View>
    )
}