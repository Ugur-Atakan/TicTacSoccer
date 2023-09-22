import {Text, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Flex, VStack} from 'react-native-flex-layout';

export default function RealmMainScreen({navigation}: any): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <VStack center shouldWrapChildren spacing={10} style={{paddingTop: 100}}>
        <Flex w={300} h={100} center style={{backgroundColor: 'lightgreen'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Users')}>
            <Text style={{alignSelf: 'center'}}>Users</Text>
          </TouchableOpacity>
        </Flex>
        <Flex w={300} h={100} center style={{backgroundColor: 'green'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Profiles')}>
            <Text style={{alignSelf: 'center'}}>Profiles</Text>
          </TouchableOpacity>
        </Flex>
      </VStack>
    </SafeAreaView>
  );
}
