import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Flex, VStack} from 'react-native-flex-layout';
function GamesScreen({navigation}: any): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 3}}>
        <VStack
          center
          shouldWrapChildren
          spacing={10}
          style={{paddingTop: 100}}>
          <Flex
            w={300}
            h={100}
            center
            style={{backgroundColor: 'green', borderRadius: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate('Temel Oyun')}>
              <Text style={{alignSelf: 'center', fontSize: 30, color: 'white'}}>
                Temel Oyun Modu
              </Text>
            </TouchableOpacity>
          </Flex>
        </VStack>
      </View>

      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Text variant="labelSmall">
          Oyumuz desteklerinizle büyüyecek ve yeni modlar kazanacaktır.
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default GamesScreen;
