import { Text } from "@rneui/themed";
import { View } from "react-native";
import { HStack } from "react-native-flex-layout";

export default function ScoreBoard({ p1score, p2score }: any) {
    return (
        <View style={{ backgroundColor: 'darkslategrey', height: 30 }}>
            <HStack spacing={5}>
                <Text style={{ color: 'red', fontSize: 20, backgroundColor: 'white' }}> </Text>
                <Text style={{ color: 'white', fontSize: 20 }}> P 1</Text>
                <View style={{backgroundColor:'#50C878',paddingHorizontal:6}}>
                <Text style={{ fontWeight:'900', fontSize: 22}}> {p1score}-{p2score} </Text>
                </View>
                <Text style={{ color: 'white', fontSize: 20 }}> P 2</Text>
                <Text style={{fontSize: 30, backgroundColor: 'blue' }}> </Text>
            </HStack>
        </View>
    )
}