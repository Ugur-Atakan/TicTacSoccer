import React from 'react';
import {ImageBackground, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Flex, VStack} from 'react-native-flex-layout';
import {Button, Text} from 'react-native-paper';

function WelcomeScreen({navigation}: any): JSX.Element {
  const image = {
    uri: 'https://e1.pxfuel.com/desktop-wallpaper/812/237/desktop-wallpaper-55-soccer-field-soccer-pitch.jpg',
  };
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ImageBackground
        source={image}
        style={{height: null, overflow: 'hidden', flex: 1}}>
        <View
          style={{flex: 3.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text variant="displayMedium" style={{color: 'white'}}>
            Tic Tac Toe Soccer'a hoş geldiniz
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
              style={{backgroundColor: 'lightgreen', borderRadius: 50}}>
              <Button
                mode="contained"
                icon="soccer"
                style={{
                  width: 300,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                labelStyle={{fontSize: 30, lineHeight: 30}}
                onPress={() => navigation.navigate('Temel Oyun')}>
                Oyunu Başlat
              </Button>
            </Flex>
          </VStack>
        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
          <Text variant="titleLarge" style={{color: 'white'}}>
            Oyun kuralarını görmek için soldaki menüyü kullanabilirsiniz
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
export default WelcomeScreen;
