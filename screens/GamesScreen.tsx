import {Alert, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Flex, VStack} from 'react-native-flex-layout';

function GamesScreen({navigation}: any): JSX.Element {

  const cokYakinda = () =>
Alert.alert('Bu Mod Henüz Yayınlanmadı', 'Geliştirici Ekibimiz çalışmalarına devam ediyor.', [
  {text: 'Tamam'},
]);
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#303F9F'}}>
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
            style={{backgroundColor: '#536DFE', borderRadius: 30}}>
            <TouchableOpacity onPress={() => navigation.navigate('Temel Oyun')}>
              <Text style={{alignSelf: 'center', fontSize: 30, color: 'white'}}>
                Temel Oyun Modu
              </Text>
              <Text style={{alignSelf: 'center', fontSize: 15, color: 'white'}}>
              Aynı Ekranda iki kişi
              </Text>
            </TouchableOpacity>
          </Flex>
          <Flex
            w={300}
            h={100}
            center
            style={{backgroundColor: '#536DFE', borderRadius: 30}}>
            <TouchableOpacity onPress={cokYakinda}>
              <Text style={{alignSelf: 'center', fontSize: 30, color: 'white'}}>
              Çevrimiçi Oyun Modu
              </Text>
              <Text style={{alignSelf: 'center', fontSize: 15, color: 'white'}}>
            Rastgele bir rakibe karşı
              </Text>
            </TouchableOpacity>
          </Flex>

          <Flex
            w={300}
            h={100}
            center
            style={{backgroundColor: '#536DFE', borderRadius: 30}}>
            <TouchableOpacity onPress={cokYakinda}>
              <Text style={{alignSelf: 'center', fontSize: 30, color: 'white'}}>
                Düello Oyun Modu
              </Text>
              <Text style={{alignSelf: 'center', fontSize: 15, color: 'white'}}>
           Rakibini sen seç
              </Text>
            </TouchableOpacity>
          </Flex>

          <Flex
            w={300}
            h={100}
            center
            style={{backgroundColor: '#536DFE', borderRadius: 30}}>
            <TouchableOpacity onPress={cokYakinda}>
              <Text style={{alignSelf: 'center', fontSize: 30, color: 'white'}}>
               Efsane Oyun Modu
              </Text>
              <Text style={{alignSelf: 'center', fontSize: 15, color: 'white'}}>
           Bu kadar eski bilgiye sahip misin bakalım
              </Text>
            </TouchableOpacity>
          </Flex>
        </VStack>
      </View>

      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <Text variant="labelSmall" style={{color:'#fff'}}>
          Oyumuz desteklerinizle büyüyecek ve yeni modlar kazanacaktır.
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default GamesScreen;
