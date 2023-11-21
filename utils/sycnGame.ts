import {useSelector} from 'react-redux';
import { RootState } from './redux/stores/store';
import { useEffect } from 'react';
export default function SycnGame() {
   const {gameBoard, gameStatus} = useSelector((state: RootState) => state.game);

   useEffect(() => {
        console.log('GameBoard Değişti',gameBoard);
        console.log('GameStatus Değişti',gameStatus);
     }, [gameBoard, gameStatus]);
}