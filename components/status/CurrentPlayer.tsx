import { Text } from "@rneui/themed";
import React from "react";
import GlobalStyles from "../../utils/globalStyles";
import Handlers from "../../utils/handlers";
export default function CurrentPlayer(){
    const {winnerUser,currentPlayer}=Handlers();
    return (
        winnerUser === 'Berabere' ? (
          <Text style={GlobalStyles.fs30bold}>Berabere Bitti</Text>
        ) : winnerUser ? (
          <Text style={GlobalStyles.fs30bold}>
            Kazanan oyuncu {winnerUser}
          </Text>
        ) : (
          <Text style={GlobalStyles.fs30bold}>
            Sıradaki oyuncu {currentPlayer}
          </Text>
        )
    )
}