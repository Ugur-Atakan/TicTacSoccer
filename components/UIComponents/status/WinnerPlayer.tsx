import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import {RootState} from '../../../utils/redux/stores/store';
import {useSelector} from 'react-redux';
export default function WinnerUser() {
    const {winnerUserData, currentPlayer} = useSelector(
        (state: RootState) => state.gameBoard,
      );

    return (
        <View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
            <Text variant="headlineLarge"> Kazanan Oyuncu{winnerUserData?.id} 1</Text>
        </View>
    )
}