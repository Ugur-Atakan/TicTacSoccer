import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/stores/store";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import UserAvatar from "react-native-user-avatar";
import { globalStlyes } from "../../style";


export default function UserProfile (){
const Profile= useSelector((state:RootState)=>state.user.userData);
const Token= useSelector((state:RootState)=>state.user.accessToken);
return (
    <SafeAreaView style={[globalStlyes.container, {justifyContent:'center'}]}>
        <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
        <UserAvatar size={100} name={Profile.name + " " + Profile.lastName} bgColors={['#fff', '#fff', '#007BFF']}/>
        </View>
        <View>
            <Text variant="headlineMedium" style={{alignSelf:'center'}}>{Profile.name + " " + Profile.lastName}</Text>
            <Text variant="headlineMedium" style={{alignSelf:'center'}}>{Profile.email}</Text> 
            <Text variant="headlineMedium" style={{alignSelf:'center'}}>Score:1530 </Text>            
        </View>
    </SafeAreaView>
)
}