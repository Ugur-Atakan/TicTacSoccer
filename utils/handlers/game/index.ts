import {useDispatch} from 'react-redux';
import {setTeamCells} from '../../redux/reducers/gameReducers/cells';
import {gameStart, gameEnd} from '../../redux/reducers/gameReducers/gameStatus';
import {setCurrentPlayer} from '../../redux/reducers/gameReducers/currentPlayer';
import {setWinnerPlayer} from '../../redux/reducers/gameReducers/winner';
import {resetCells} from '../../redux/reducers/gameReducers/cells';
import baseAPI from '../../http/base';

export default function GameHandlers() {
  const dispatch = useDispatch();

  const fetchGame = () => {
    baseAPI
      .get('game')
      .then(response => {
        dispatch(setTeamCells(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const startGame = () => {
    fetchGame();
    dispatch(gameStart());
  };

  const endGame = () => {
    dispatch(gameEnd());
  };

  const resetGame = () => {
    dispatch(resetCells());
    dispatch(setCurrentPlayer('P1'));
    dispatch(setWinnerPlayer(null));
    dispatch(gameEnd());
  };

  return {
    startGame,
    endGame,
    resetGame,
    fetchGame,
  };
}
