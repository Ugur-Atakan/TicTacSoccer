import React from 'react';
import { SafeAreaView,View,TouchableOpacity } from 'react-native';
import {globalStlyes} from '../../../style';
import {Text} from 'react-native-paper';

export default function OnlineGameManagement({navigation, route}: any) {
  return (
    <SafeAreaView style={globalStlyes.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#536DFE',
          borderWidth: 1,
          justifyContent:'space-around',
        }}>
          <View style={{flex:1,borderWidth:2,backgroundColor:'#1976D2',alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('CreateRoom')}>
          <Text style={{fontSize: 50, color: 'white', alignSelf: 'center'}}>
            {' '}
            OYUN OLUŞTUR
          </Text>
        </TouchableOpacity>
          </View>

          <View style={{flex:1,borderWidth:2,backgroundColor:'#536DFE',alignItems:'center',justifyContent:'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('JoinRoom')}>
          <Text style={{fontSize: 50, color: 'white', alignSelf: 'center'}}>
            {' '}
            OYUNA KATIL
          </Text>
        </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}
