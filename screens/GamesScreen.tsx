import {Text, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Flex, VStack} from 'react-native-flex-layout';
function GamesScreen({navigation}: any): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <VStack center shouldWrapChildren spacing={10} style={{paddingTop: 100}}>
        <Flex w={300} h={100} center style={{backgroundColor: 'lightgreen'}}>
          <TouchableOpacity onPress={() => navigation.navigate('GameMode1')}>
            <Text style={{alignSelf: 'center'}}>Game Mode 1</Text>
            <Text>Play Offline</Text>
          </TouchableOpacity>
        </Flex>
        <Flex w={300} h={100} center style={{backgroundColor: 'green'}}>
          <TouchableOpacity onPress={() => navigation.navigate('GameMode2')}>
            <Text style={{alignSelf: 'center'}}>Game Mode 2</Text>
            <Text>Play Online</Text>
          </TouchableOpacity>
        </Flex>
        <Flex w={300} h={100} center style={{backgroundColor: 'darkgreen'}}>
          <TouchableOpacity onPress={() => navigation.navigate('GameMode3')}>
            <Text style={{alignSelf: 'center'}}>Game Mode 3</Text>
            <Text>Play Online with random Teams</Text>
          </TouchableOpacity>
        </Flex>
      </VStack>
    </SafeAreaView>
  );
}
export default GamesScreen;
