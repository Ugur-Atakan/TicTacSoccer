import {Button} from '@rneui/base';
import {View, Text, TextInput, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useQuery} from '../../www/config';
import {userService} from '../../www/services/userService';
import GlobalStyles from '../../utils/globalStyles';
import UserCard from './UserCard';
import {Users} from '../../www/models/Users';

export default function RealmUserScreen() {
  const [textInput, setTextInput] = useState('');
  const uServices = new userService();
  const users = useQuery(Users);
  const mockData = {
    username: 'assa',
    password: 'aaa',
    email: 'aaa@ag.com',
    profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
  };

  const addUser = (name: string) => {
    console.log(name);
    uServices.addProfile(mockData);
    setTextInput('');
  };
  return (
    <SafeAreaView style={GlobalStyles.f1}>
      <ScrollView>
        <View>
          <Text>Profiller</Text>
          {users?.map(user => {
            return <UserCard user={user} />;
          })}
        </View>
        <View style={{flex: 1}}>
          <Button title="EKLE" onPress={() => addUser(textInput)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
