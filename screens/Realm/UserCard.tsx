import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Card, Button} from '@rneui/themed';
import {HStack} from 'react-native-flex-layout';
import {userService} from '../../www/services/userService';

export default function UserCard({user}: any) {
  const uServices = new userService();

  const deleteOneRecord = (uuid: any) => {
    uServices.deleteRecord(uuid);
  };

  return (
    <Card containerStyle={{width: '100', height: 300}}>
      <Card.Title>{user.username}</Card.Title>
      <Card.Divider />
      <View key={user._id}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: user.profilePicture}}
        />
        <Card.Divider />
      </View>
      <HStack center shouldWrapChildren spacing={5}>
        <Button title="Profil Detayları" />
        <Button title="Kaldır" onPress={() => deleteOneRecord(user._id)} />
      </HStack>
    </Card>
  );
}

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
  },
  image: {
    width: 'auto',
    height: 150,
    marginBottom: 10,
  },
});
