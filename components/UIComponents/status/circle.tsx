import React from "react";
import { StyleSheet, View } from "react-native";
import { ViewStyles, width } from "../../../style";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/redux/stores/store";

export default function Circle() {
const currentPlayer=useSelector((state:RootState)=>state.gameBoard.currentPlayer.id);
return (
 <View style={currentPlayer==1?ViewStyles.greencircle:ViewStyles.redcircle}></View>
    
 
);
};
