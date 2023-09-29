import React from "react";
import { StyleSheet, View } from "react-native";
import { width } from "../../../utils/globalStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/redux/stores/store";

export default function Circle() {
const currentPlayer=useSelector((state:RootState)=>state.gameBoard.currentPlayer.id);
console.log(currentPlayer);

return (
 <View style={currentPlayer==1?style.greencircle:style.redcircle}></View>
    
 
);
};

const style = StyleSheet.create({
    greencircle:{
        backgroundColor:'#4CAF50',
        borderRadius: 50,
        width: width * 0.1,
        height: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      redcircle:{
        backgroundColor:'#FF4081',
        borderRadius: 50,
        width: width * 0.1,
        height: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
      },
});
