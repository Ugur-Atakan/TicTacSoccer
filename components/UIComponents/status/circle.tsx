import React from "react";
import { StyleSheet, View } from "react-native";
import {width } from "../../../style";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/redux/stores/store";

export default function Circle() {
const currentPlayer=useSelector((state:RootState)=>state.game.currentPlayer.id);
return ( <View style={currentPlayer==1?ViewStyles.greencircle:ViewStyles.redcircle}></View> );
};


const ViewStyles=StyleSheet.create({
    greencircle:{
        backgroundColor:'#4CAF50',
        borderRadius: 50,
        width: width * 0.09,
        height: width * 0.09,
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      redcircle:{
        backgroundColor:'#FF4081',
        borderRadius: 50,
        width: width * 0.09,
        height: width * 0.09,
        alignItems: 'center',
        justifyContent: 'center',
      }, 
  
  })