import {useDispatch} from 'react-redux';
import {setTeamCells} from '../../redux/reducers/gameReducers/teamCells';
import baseAPI from '../../http/base';
import { startGame } from '../../redux/reducers/gameReducers/gameStatus.duck';

export default function GameHandlers() {
  const dispatch = useDispatch();

  const fetchGame = async () => {
    baseAPI
      .get('game')
      .then(response => {
        dispatch(setTeamCells(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleStartGame = () => {
    dispatch(startGame());
  }
  return {
    fetchGame,
  };
}
