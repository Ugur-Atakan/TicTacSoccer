import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux';
import { setVolume } from "../../../utils/redux/reducers/soundVolume";
import { RootState } from '../../../utils/redux/stores/store';

export default function Range() {
const SoundVolume= useSelector((state:RootState)=>state.soundVolume.soundVolume);
  const dispatch = useDispatch();
  return (
    <Slider
      style={{ width: 250, height: 60 }}
      minimumValue={0}
      maximumValue={1}
      value={SoundVolume/0.05}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
      onValueChange={(value) => dispatch(setVolume(value * 0.05))
      }
    />

  );
}
