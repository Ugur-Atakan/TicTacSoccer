import {Button} from 'react-native-paper';
import {HStack} from 'react-native-flex-layout';
import React from 'react';
import {
  finishGame,
  startGame,
} from '../../../utils/redux/reducers/gameReducers/gameStatus.duck';
import {useDispatch} from 'react-redux';
export default function BottomButtons() {
  const dispatch = useDispatch();

  return (
    <HStack
      style={{
        justifyContent: 'space-around',
      }}
      shouldWrapChildren>
      <Button
        mode="contained"
        buttonColor="#448AFF"
        onPress={() => {
          dispatch(startGame() as any);
        }}>
        Oyunu Yenile
      </Button>

      <Button
        buttonColor="#448AFF"
        mode="contained"
        onPress={() => {
          dispatch(finishGame() as any);
        }}>
        Oyunu Sıfırla
      </Button>
    </HStack>
  );
}
