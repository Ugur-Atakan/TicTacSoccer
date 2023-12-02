import { View } from "react-native";
import { IconButton } from "react-native-paper";
import Range from "./Range";
import { useDispatch } from "react-redux";
import { incrementVolume,decrementVolume } from "../../../utils/redux/reducers/soundVolume";
export default function SliderComponent() {
    const dispatch = useDispatch();

    const volumeUp = () => {
        dispatch(incrementVolume())
    }
    const volumeDown = () => {
        dispatch(decrementVolume())
    }

    return (
        <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems:'center'}}>
                <IconButton
                    icon="volume-minus"
                    iconColor={'grey'}
                    size={30}
                    onPress={volumeDown}
                />
                <Range />
                <IconButton
                    icon="volume-plus"
                    iconColor={'grey'}
                    size={30}
                    onPress={volumeUp}
                />
            </View>
        </View>
    )
}