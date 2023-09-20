import {Button} from '@rneui/base';
import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Profile} from '../../www/models/Profile';
import {useQuery} from '../../www/config';
import {userService} from '../../www/services/userService';

export default function RealmUserScreen() {
  const [textInput, setTextInput] = useState('');
  const uServices = new userService();
  const profiles = useQuery(Profile);

  const addProfile = (name: string) => {
    console.log(name);
    uServices.addProfile(name);
    setTextInput('');
  };
  const removeProfile = (p: any) => {
    console.log('remove');
    uServices.deleteProfile(p);
  };
  return (
    <View>
      <Text>Profiller</Text>
      {profiles.map(value => {
        return (
          <Text>
            İD:{value._id.toString()}
            {'\n'}Name:{value.name}
          </Text>
        );
      })}
      <View style={{flex: 1}}>
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
    </View>
  );
}
