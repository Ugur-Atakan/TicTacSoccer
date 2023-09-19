import {Text, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, TextInput} from 'react-native';
import RealmServices from '../www/services';
import { Profile } from '../www/models/Profile';
import { useQuery } from '../www/config';
function WelcomeScreen(): JSX.Element {
  const realmService = new RealmServices();
  const [allProfiles, setAllProfiles] = useState<Realm.Results<Profile>>();
  const profiles = useQuery(Profile);

  const [textInput,setTextInput]=useState('');
  
  const addProfile = (name:string)=>{
    console.log(name);
    realmService.addProfile(name);
    setTextInput('');
  }
  const removeProfile = (p)=>{
    console.log('remove');
    realmService.deleteProfile(p);
  }

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex:3}}>
        <Text style={{fontSize: 32}}>
          Tic Tac Toe Futboller Game'e hoş geldiniz
        </Text>
        <Text>
          Oyun Modlarını ve kuraları görmek için soldaki menüyü
          kullanabilirsiniz
        </Text>
        <Text>
          Profiller
        </Text>
        {profiles.map((value)=>{
          return <Text>NAME:{value.name}</Text>
        })}
      </View>
      <View style={{flex:1}}>
      <TextInput
              value={textInput}
              onChangeText={text => setTextInput(text)}
              autoFocus={true}
              placeholder="Metin girin..."
            />
        <Button title='EKLE' onPress={()=> addProfile(textInput)}/>
        <Button title='SİL' onPress={()=> removeProfile(profiles[0])}/>
        <Button title='çek' onPress={()=> console.log(profiles)}/>
        </View>
    </SafeAreaView>
  );
}
export default WelcomeScreen;
