import {Button} from '@rneui/base';
import {Text} from '@rneui/themed';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuery} from '../../www/config';
import {userService} from '../../www/services/userService';
import GlobalStyles from '../../utils/globalStyles';
import UserCard from './UserCard';
import {Users} from '../../www/models/Users';
import {TextInput} from 'react-native';

export default function RealmUserScreen() {
  const [textInput, setTextInput] = useState('');
  const [tempUser, setTempUser] = useState({
    username: '',
    password: '',
    email: '',
    profilePicture: '',
  });

  const uServices = new userService();

  const users = useQuery(Users);

  const addUser = user => {
    uServices.addProfile(user);
    setTempUser({
      username: '',
      password: '',
      email: '',
      profilePicture: '',
    });
  };

  return (
    <SafeAreaView style={GlobalStyles.f1}>
      <ScrollView>
        <View style={{borderColor: 'gray', borderWidth: 5}}>
          <Text h4>Kullanıcı Ekle</Text>
          <Text>Kullanıcı Adı</Text>
          <TextInput
            placeholder="Adı"
            value={tempUser.username}
            onChangeText={text => {
              setTempUser({...tempUser, username: text});
            }}
            style={Styles.textInput}
          />
          <Text>E Posta Adresi</Text>
          <TextInput
            placeholder="E posta"
            value={tempUser.email}
            onChangeText={text => {
              setTempUser({...tempUser, email: text});
            }}
            style={Styles.textInput}
          />
          <Text>Parola</Text>
          <TextInput
            placeholder="Şifre"
            value={tempUser.password}
            onChangeText={text => {
              setTempUser({...tempUser, password: text});
            }}
            style={Styles.textInput}
          />
          <Text>Görsel URL</Text>
          <TextInput
            placeholder="Görsel URL"
            value={tempUser.profilePicture}
            onChangeText={text => {
              setTempUser({...tempUser, profilePicture: text});
            }}
            style={Styles.textInput}
          />
          <View style={{flex: 1}}>
            <Button title="EKLE" onPress={() => addUser(tempUser)} />
          </View>
        </View>
        <View>
          <Text h4>Profiller</Text>
          {users?.map(user => {
            return <UserCard user={user} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
