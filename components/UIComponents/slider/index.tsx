import { View } from "react-native";
import { IconButton } from "react-native-paper";
import Range from "./Range";
export default function SliderComponent() {
    let musical = true;
    return (
        <View style={{ justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                <IconButton
                    icon="volume-minus"
                    iconColor={'#fff'}
                    disabled={true}
                    size={30}
                    onPress={() => console.log('Pressed')}
                />
                <Range />
                <IconButton
                    icon="volume-plus"
                    iconColor={'#fff'}
                    disabled={true}
                    size={30}
                    onPress={() => console.log('Pressed')}
                />
            </View>
            <View>
                {
                    musical == true ?
                        (<IconButton
                            icon="volume-mute"
                            iconColor={'#fff'}
                            size={30}
                            onPress={() => console.log('Pressed')}
                        />) :
                        (
                            <IconButton
                                icon="volume-high"
                                iconColor={'#fff'}
                                size={30}
                                onPress={() => console.log('Pressed')}
                            />
                        )

                }
            </View>
        </View>
    )
}