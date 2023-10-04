import Slider from '@react-native-community/slider';
import { useDispatch } from 'react-redux';
import { setVolume } from "../../../utils/redux/reducers/gameReducers/soundVolume";

export default function Range() {
  const dispatch=useDispatch();
  return (
    <Slider
      style={{width: 250, height: 60}}
      minimumValue={0}
      maximumValue={1}
      value={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      onValueChange={(value)=> {
        console.log('value changed');
        dispatch(setVolume(value*0.05))
      }}
    />
  
  );
}
