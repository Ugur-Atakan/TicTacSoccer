import { Alert, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Flex, VStack } from 'react-native-flex-layout';
import { width } from '../style';

function GamesScreen({ navigation }: any): JSX.Element {

  const cokYakinda = () =>
    Alert.alert('Bu Mod Henüz Yayınlanmadı', 'Geliştirici Ekibimiz çalışmalarına devam ediyor.', [
      { text: 'Tamam' },
    ]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#303F9F' }}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <VStack
            center
            shouldWrapChildren
            spacing={10}
            style={{ paddingTop: 10 }}>
            <Flex
              w={compstyles.gamemode.width}
              h={compstyles.gamemode.height}
              center
              style={{ backgroundColor: '#536DFE', borderRadius: 30 }}>
              <TouchableOpacity onPress={() => navigation.navigate('SingleGame')}>
                <Text style={{ alignSelf: 'center', fontSize: width * 0.08, color: 'white' }}>
                  Temel Oyun Modu
                </Text>
                <Text style={{ alignSelf: 'center', fontSize: width * 0.04, color: 'white' }}>
                  Aynı Ekranda iki kişi
                </Text>
              </TouchableOpacity>
            </Flex>
            <Flex
              w={compstyles.gamemode.width}
              h={compstyles.gamemode.height}
              center
              style={{ backgroundColor: '#536DFE', borderRadius: 30 }}>
              <TouchableOpacity onPress={cokYakinda}>
                <Text style={{ alignSelf: 'center', fontSize: width * 0.08, color: 'white' }}>
                  Çevrimiçi Oyun Modu
                </Text>
                <Text style={{ alignSelf: 'center', fontSize: width * 0.04, color: 'white' }}>
                  Rastgele bir rakibe karşı
                </Text>
              </TouchableOpacity>
            </Flex>

            <Flex
              w={compstyles.gamemode.width}
              h={compstyles.gamemode.height}
              center
              style={{ backgroundColor: '#536DFE', borderRadius: 30 }}>
              <TouchableOpacity onPress={() => navigation.navigate('OnlineGameManagement')}>
                <Text style={{ alignSelf: 'center', fontSize: width * 0.08, color: 'white' }}>
                  Düello Oyun Modu
                </Text>
                <Text style={{ alignSelf: 'center', fontSize: width * 0.04, color: 'white' }}>
                  Rakibini sen seç
                </Text>
              </TouchableOpacity>
            </Flex>

            <Flex
              w={compstyles.gamemode.width}
              h={compstyles.gamemode.height}
              center
              style={{ backgroundColor: '#536DFE', borderRadius: 30 }}>
              <TouchableOpacity onPress={cokYakinda}>
                <Text style={{ alignSelf: 'center', fontSize: width * 0.08, color: 'white' }}>
                  Efsane Oyun Modu
                </Text>
                <Text style={{ alignSelf: 'center', fontSize: width * 0.04, color: 'white' }}>
                  Bu kadar eski bilgiye sahip misin bakalım
                </Text>
              </TouchableOpacity>
            </Flex>
          </VStack>
          <View
            style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text variant="labelSmall" style={{ color: '#fff' }}>
              Oyumuz desteklerinizle büyüyecek ve yeni modlar kazanacaktır.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const compstyles = StyleSheet.create({
  gamemode: {
    backgroundColor: '#536DFE',
    width: width * 0.9,
    height: width * 0.3,
  }
})
export default GamesScreen;

