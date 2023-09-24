import { Button } from "@rneui/themed";
import { Flex, HStack } from "react-native-flex-layout";
import GameHandlers from "../../../utils/handlers/game";
import { startGame } from "../../../utils/redux/reducers/gameReducers/gameStatus.duck";

export default function BottomButtons() {
    const {resetGame}=GameHandlers();
    return (
        <HStack center style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
            <Flex h={100}>
            <Button
              title="Oyunu Yeniden Başlat"
             
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(118, 142, 101, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 20,
              }}
              onPress={() => {
                startGame;
            }}
            />
            </Flex>
            <Flex h={100}>
            <Button
              title="Oyunu Sıfırla"
             
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(118, 142, 101, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
              }}
              onPress={() => {
                resetGame();
            }}
            />
            </Flex>
        </HStack>
    )
}