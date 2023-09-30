import React from "react";
import { IconButton, MD3Colors } from 'react-native-paper';


export default function  MuteButton (){
    return (
     <IconButton
    icon="volume-mute"
    iconColor='#fff'
    size={30}
    onPress={() => console.log('Pressed')}
  />
    );
}