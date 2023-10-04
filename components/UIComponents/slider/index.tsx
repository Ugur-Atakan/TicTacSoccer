import { View } from "react-native";
import { IconButton } from "react-native-paper";
import Range from "./Range";
export default function SliderComponent() {
    return (
        <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                <IconButton
                    icon="volume-minus"
                    iconColor={'#fff'}
                    disabled={true}
                    size={30}
                />
                <Range />
                <IconButton
                    icon="volume-plus"
                    iconColor={'#fff'}
                    disabled={true}
                    size={30}
                />
            </View>
        </View>
    )
}