import {Button} from '@rneui/base';
import {View, Text, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {Profile} from '../../www/models/Profile';
import {useQuery} from '../../www/config';
import {profileService} from '../../www/services/profileService';
import GlobalStyles from '../../utils/globalStyles';
export default function RealmProfileScreen() {
  const [textInput, setTextInput] = useState('');

  const pService = new profileService();
  const profiles = useQuery(Profile);

  const addProfile = (name: string) => {
   
    pService.addProfile(name);
    setTextInput('');
  };
  const removeProfile = (p: any) => {
    pService.deleteProfile(p);
  };
  return (
    <SafeAreaView style={GlobalStyles.f1}>
      <View style={{flex: 3}}>
        <Text>Profiller</Text>
        {profiles.map(value => {
          return (
            <Text>
              İD:{value._id.toString()}
              {'\n'}Name:{value.name}
            </Text>
          );
        })}
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'red',
          justifyContent: 'center',
        }}>
        <TextInput
          value={textInput}
          onChangeText={text => setTextInput(text)}
          autoFocus={true}
          placeholder="Metin girin..."
        />
        <Button title="EKLE" onPress={() => addProfile(textInput)} />
        <Button title="SİL" onPress={() => removeProfile(profiles[0])} />
        <Button title="çek" onPress={() => console.log(profiles)} />
      </View>
    </SafeAreaView>
  );
}
