import { Text } from "@rneui/themed";
import { View } from "react-native";
import { HStack } from "react-native-flex-layout";

let p1score=0;
let p2score=0;
export default function ScoreBoard ({p1score,p2score}:any){
    return (
        <View>
            <HStack>
<Text style={{color:'white',fontSize:20}}>P1</Text>
<View>
    <Text>{p1score}-{p2score}</Text>
</View>
<Text style={{color:'white',fontSize:20}}>P2</Text>
</HStack>
        </View>
    )
}