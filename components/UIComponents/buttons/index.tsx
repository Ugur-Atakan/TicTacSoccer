import {Button} from 'react-native-paper';
import {HStack} from 'react-native-flex-layout';
import React from 'react';
import { finishGame, startGame } from '../../../utils/redux/actions/game';
import useSoundPlayer from '../../../utils/soundPlayer';
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';
export default function BottomButtons() {
  const gameStatus = useSelector((state:RootState) => state.game.gameStatus);
  const dispatch = useDispatch();
  const {playSound} = useSoundPlayer();
  return (
    <HStack
      style={{
        justifyContent: 'space-around',
      }}
      shouldWrapChildren>
        {gameStatus==true?
 <Button
 disabled
 mode="contained"
 buttonColor="#448AFF"
 onPress={() => {
   dispatch(startGame() as any);
   playSound();
 }}>
Oyunu Başlat
</Button>:
 <Button
 mode="contained"
 buttonColor="#448AFF"
 onPress={() => {
  dispatch(startGame() as any);
  playSound();
}}>
Oyunu Başlat
</Button>
        }
     
{gameStatus==true?
  <Button
        buttonColor="#448AFF"
        mode="contained"
        onPress={() => {
          dispatch(finishGame() as any);
        }}>
        Oyunu Bitir
      </Button>:
      <Button
      disabled
        buttonColor="#448AFF"
        mode="contained"
        onPress={() => {
          dispatch(finishGame() as any);
        }}>
        Oyunu Bitir
      </Button>
}
    </HStack>
  );
} 
