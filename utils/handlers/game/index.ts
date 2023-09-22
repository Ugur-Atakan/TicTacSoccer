import {useDispatch} from 'react-redux';
import { setTeamCells } from "../../redux/reducers/gameReducers/cells";
import baseAPI from "../../http/base";

export default function GameHandlers (){
const dispatch = useDispatch();
const fetchGame = () => {
    baseAPI.get('game')
    .then(response => {
    dispatch(setTeamCells(response.data))
    })
    .catch(error => {
    console.log(error)
    });
  };

return {fetchGame};
}




