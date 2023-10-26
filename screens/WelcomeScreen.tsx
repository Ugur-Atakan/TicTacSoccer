import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {VStack} from 'react-native-flex-layout';
import {Button, Text} from 'react-native-paper';

function WelcomeScreen({navigation}: any): JSX.Element {

  return (
    <SafeAreaProvider style={{flex: 1,backgroundColor:'#303F9F'}}>
        <View
          style={{flex: 3.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text variant="displayMedium" style={{color: '#fff'}}>
          3 5 2'ye hoş geldiniz
          </Text>
        </View>

        <View style={{flex: 6}}>
          <VStack
            center
            shouldWrapChildren
            spacing={10}
            style={{paddingTop: 100}}>
            <Text style={{fontSize:30,color:'white'}}> Ya 3 ya 5'ini bilir Kazanırsın</Text>
            <Text style={{fontSize:30,color:'white'}}> Yada 2 bilir kaybedersin</Text>
          </VStack>
        </View>
        <View>
          <Button
            style={{backgroundColor: '#fff', margin: 10}}
            onPress={() => {
             
            }}>
            <Text style={{color: '#303F9F'}}>Join Roomm</Text>
          </Button>
          <Button
            style={{backgroundColor: '#fff', margin: 10}}
            onPress={() => {

            }}>
            <Text style={{color: '#303F9F'}}>Send test message</Text>
          </Button>

        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text variant="titleLarge" style={{color: '#fff'}}>
            Oyun kuralarını görmek için soldaki menüyü kullanabilirsiniz
          </Text>
        </View>
    </SafeAreaProvider>
  );
}
export default WelcomeScreen;
