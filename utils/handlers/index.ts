import {RootState} from '../redux/stores/store';
import {useDispatch, useSelector} from 'react-redux';
import {gameStart, gameEnd} from '../redux/reducers/gameReducers/gameStatus';
import {setCurrentPlayer} from '../redux/reducers/gameReducers/currentPlayer';
import {setWinnerPlayer} from '../redux/reducers/gameReducers/winner';
import {showModal} from '../redux/reducers/gameReducers/modalStatus';
import {
  setSelectedSoccerCell,
  setSelectedTeamCell,
  resetCells,
} from '../redux/reducers/gameReducers/cells';

export default function Handlers() {
  const dispatch = useDispatch();
  /* eslint-disable @typescript-eslint/no-unused-vars */

  const {selectedSoccerCell, selectedTeamCell, soccerCells, teamCells} =
    useSelector((state: RootState) => state.cells);

  const currentPlayer = useSelector(
    (state: RootState) => state.currentPlayer.currentPlayer,
  );

  const gameStatus = useSelector(
    (state: RootState) => state.gameStatus.gameStatus,
  );

  const {winner, userData: winnerUser} = useSelector(
    (state: RootState) => state.winner,
  );
  // userDatayı reducerdan alıp winnerUser değişkenine atıyor.

  const isVisible = useSelector((state: RootState) => state.modal.isVisible);

  const checkWinner = (squares: Array<string | null>): string | null => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const startGame = () => {
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

  const handleSoccerCell = async (cellId: number) => {
    if (cellId !== null && !winner && gameStatus === true) {
      try {
        dispatch(setSelectedSoccerCell(cellId));
        dispatch(showModal('soccer'));
      } catch (error) {
        console.error('Bir hata oluştu:', error);
      }
    }
  };

  const handleTeamCell = async (cellId: number) => {
    if (cellId !== null && !winner && gameStatus === false) {
      try {
        dispatch(setSelectedTeamCell(cellId));
        dispatch(showModal('team'));
      } catch (error) {
        console.error('Bir hata oluştu:', error);
      }
    }
  };

  return {
    startGame,
    endGame,
    resetGame,
    handleTeamCell,
    handleSoccerCell,
    winner,
    winnerUser,
    currentPlayer,
    soccerCells,
    teamCells,
    gameStatus,
  };
}
