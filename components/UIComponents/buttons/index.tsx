import { Button } from "@rneui/themed";
import { Flex, HStack } from "react-native-flex-layout";
import { finishGame, startGame } from "../../../utils/redux/reducers/gameReducers/gameStatus.duck";
import { useDispatch, useSelector } from "react-redux";
export default function BottomButtons() {
  const dispatch= useDispatch();
  
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
               dispatch(startGame() as any);
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
                dispatch(finishGame() as any);
            }}
            />
            </Flex>
        </HStack>
    )
}