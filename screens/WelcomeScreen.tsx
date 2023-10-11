import React from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Flex, VStack} from 'react-native-flex-layout';
import {Button, Text} from 'react-native-paper';

function WelcomeScreen({navigation}: any): JSX.Element {
  const image = {
    uri: 'https://e1.pxfuel.com/desktop-wallpaper/812/237/desktop-wallpaper-55-soccer-field-soccer-pitch.jpg',
  };
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
            <Flex
              w={300}
              h={100}
              center
              style={{backgroundColor: '#303F9F', borderRadius: 50}}>
              <Button
                mode="contained"
                icon="soccer"
                style={{
                  backgroundColor:'#536DFE',
                  width: 300,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                labelStyle={{fontSize: 30, lineHeight: 30}}
                onPress={() => navigation.navigate('MainLayout')}>
                Oyunu Başlat
              </Button>
            </Flex>
          </VStack>
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
