import Slider from '@react-native-community/slider';

export default function Range() {
  return (
    <Slider
      style={{width: 250, height: 60}}
      minimumValue={0}
      maximumValue={1}
      minimumTrackTintColor="#FFFFFF"
      maximumTrackTintColor="#000000"
    />
  );
}
