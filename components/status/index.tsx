import React from "react";
import {Flex, HStack} from "react-native-flex-layout";
import ScoreBoard from "./scoreboard";
import CurrentPlayer from "./currentPlayer";

export default function StatusBar(){
    return (
<HStack spacing={0.5} shouldWrapChildren style={{justifyContent:'space-around'}}>
    <Flex>
    <ScoreBoard />
    </Flex>
   <Flex>
   <CurrentPlayer />
   </Flex>
</HStack>
    )
}