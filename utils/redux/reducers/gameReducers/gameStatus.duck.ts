import baseAPI from '../../../http/base';
import {reset} from './gameBoard';
import {resetCells, setTeamCells} from './teamCells';

interface GameState {
  gameStatus: boolean;
  isLoading: boolean;
}

const TYPES = {
  GAME_FETCHING: 'GAME_FETCHING',
  GAME_STARTED: 'GAME_STARTED',
  GAME_FINISHED: 'GAME_FINISHED',
};

const initialState: GameState = {
  gameStatus: false,
  isLoading: false,
};

const fetching = () => {
  return {type: TYPES.GAME_FETCHING};
};

const started = () => {
  return {type: TYPES.GAME_STARTED};
};
const finished = () => {
  return {type: TYPES.GAME_FINISHED};
};

const gameStatusReducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case TYPES.GAME_FETCHING:
      return {gameStatus: false, isLoading: true};
    case TYPES.GAME_STARTED:
      return {gameStatus: true, isLoading: false};
    case TYPES.GAME_FINISHED:
      return {gameStatus: false, isLoading: false};
    default:
      return state;
  }
};

export const startGame = () => {
  return (dispatch: any) => {
    dispatch(fetching());
    baseAPI
      .get('game')
      .then(res => dispatch(setTeamCells(res.data)))
      .then(dispatch(started()))
      .catch(() => console.error('Something Went Wrong'));
  };
};

export const finishGame = () => {
  return (dispatch: any) => {
    dispatch(finished());
    dispatch(reset());
    dispatch(resetCells());
  };
};
export {gameStatusReducer};
export default gameStatusReducer;
