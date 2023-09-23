import React from "react";
import ScoreBoard from './ScoreBoard'
import CurrentPlayer from "./CurrentPlayer";
import { View } from "react-native";

export default function StatusBar(){
    return (
<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<ScoreBoard p1score={2} p2score={5}/>
<CurrentPlayer />    
</View>
    )
}