import {RootState} from '../redux/stores/store';
import {useDispatch, useSelector} from 'react-redux';
import {showModal} from '../redux/reducers/gameReducers/modalStatus';
import {
  setSelectedSoccerCell,
  setSelectedTeamCell,
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

  interface Square {
    iscorred: boolean;
    data: {
      playerid: number;
    };
  }

  const checkWinner = (squares: Square[]): number | null => {
    const winningLines: number[][] = [
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
       if (squares[a].iscorred && squares[b].iscorred && squares[c].iscorred) {
        return squares[a].data.playerid;
      }
    }

    return null;
  };


  const handleSoccerCell =async (cellId: number, coords: { x: number; y: number }) => {
    if (cellId !== null && !winner && gameStatus === true) {
     
      try {
        dispatch(setSelectedSoccerCell(cellId));
        dispatch(showModal({ type:'soccer', coordinates:{x:coords.x,y:coords.y}}));
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
