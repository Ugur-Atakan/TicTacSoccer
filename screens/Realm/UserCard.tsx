import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {Card, Button} from '@rneui/themed';

export default function UserCard({user}: any) {
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
        <Button title="Profil Detayları" />
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
