import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/stores/store";
import { SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";
import UserAvatar from "react-native-user-avatar";
import { globalStlyes } from "../../style";
import {width} from '../../style';

export default function UserProfile (){
const Profile= useSelector((state:RootState)=>state.user.userData);
const Token= useSelector((state:RootState)=>state.user.accessToken);
return (
    <SafeAreaView style={[globalStlyes.container,]}>
        <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
            {
                Profile.profilePicture?
                <UserAvatar size={width*0.3} name={Profile.name + " " + Profile.lastName} src={Profile.profilePicture}/>
                :
                <UserAvatar size={width*0.3} name={Profile.name + " " + Profile.lastName} bgColors={['#fff', '#fff', '#007BFF']}/>
            }
        </View>
        <View>
            <Text style={{alignSelf:'center',fontSize:width*0.07}}>{Profile.name + " " + Profile.lastName}</Text>
            <Text style={{alignSelf:'center',fontSize:width*0.06}}>{Profile.email}</Text> 
            <Text style={{alignSelf:'center',fontSize:width*0.06}}>Score:1530 </Text>            
        </View>
    </SafeAreaView>
)
}