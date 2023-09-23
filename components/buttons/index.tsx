import { Button } from "@rneui/themed";
import { Flex, HStack } from "react-native-flex-layout";
import GameHandlers from "../../utils/handlers/game";

export default function BottomButtons() {
    const {startGame,resetGame}=GameHandlers();
    return (
        <HStack center spacing={100}>
            <Flex h={100}>
                <Button
                    title="Oyunu Başlat"
                    onPress={() => {
                        startGame();
                    }}
                />
            </Flex>
            <Flex w={100} h={100}>
            <Button title="Oyunu Bitir" onPress={resetGame} />
            </Flex>
        </HStack>
    )
}