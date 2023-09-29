import { TouchableOpacity,View} from "react-native";
import useSoundPlayer from "../../../utils/soundPlayer";
import { Text } from "react-native-paper";
export default function SoundButton(){
    const {playSound} = useSoundPlayer();
    return(
        <View>
        <TouchableOpacity onPress={playSound}>
            <Text variant='bodyLarge'>Play sound</Text>
        </TouchableOpacity>
        </View>
    )
}