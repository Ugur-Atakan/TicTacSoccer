import {Text, TouchableOpacity} from 'react-native';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Flex, VStack} from 'react-native-flex-layout';
function GamesScreen({navigation}: any): JSX.Element {

  return (
    <SafeAreaView style={{flex: 1}}>
      <VStack center shouldWrapChildren spacing={10} style={{paddingTop: 100}}>
        <Flex w={300} h={100} center style={{backgroundColor: 'lightgreen'}}>
          <TouchableOpacity onPress={() => navigation.navigate('MainGame')}>
          <Text style={{alignSelf: 'center',fontSize:30}}>Test Game</Text>
          </TouchableOpacity>
        </Flex>
        <Flex w={300} h={100} center style={{backgroundColor: 'green'}}>
          <TouchableOpacity onPress={() => navigation.navigate('GameMode1')}>
            <Text style={{alignSelf: 'center',fontSize:30}}>Game Mode 1</Text>
          </TouchableOpacity>
        </Flex>
      </VStack>
    </SafeAreaView>
  );
}
export default GamesScreen;
