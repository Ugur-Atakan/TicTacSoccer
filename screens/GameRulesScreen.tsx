import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, Text} from 'react-native';
import {VStack} from 'react-native-flex-layout';
import React from 'react';
import {View} from 'react-native';

function GameRulesScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <VStack style={{paddingRight: 10, paddingLeft: 5}}>
          <View style={{paddingBottom: 50}} />
          <Text>
            1. Tic Tac Toe, 3x3 bir kare tahtada oynanır. Bu tahtada toplam 9
            hücre bulunur.
          </Text>
          <Text>2. Oyun iki oyuncu arasında oynanır.</Text>
          <Text>
            3. İki oyuncu vardır ve genellikle biri "X" ve diğeri "O" olarak
            temsil edilir.
          </Text>
          <Text>
            4. Oyunculardan biri "X" ile başlar, diğer oyuncu "O" ile yanıt
            verir.
          </Text>
          <Text>
            5. Oyuncular, sırayla bir hücreye kendi sembollerini ("X" veya "O")
            koymak için hamle yaparlar.
          </Text>
          <Text>
            6. Bir oyuncu hamlesini yaptıktan sonra sıra diğer oyuncuya geçer.
          </Text>
          <Text>
            7. Oyuncuların amacı, oyun tahtasında bir hizalama yaparak
            kazanmaktır.
          </Text>
          <Text>
            8. Bir oyuncu, aynı sembollerle üçünü yatay, dikey veya çapraz
            olarak birleştirdiğinde, o oyuncu oyunu kazanır.
          </Text>
          <Text>
            9. Kazanan oyuncu, kazandığı hizalamanın üzerine çizer veya
            sembolünü yerleştirir.
          </Text>
          <Text>
            10. Eğer tahta tamamen dolar ve herhangi bir oyuncu kazanmazsa, oyun
            berabere (draw) sona erer.
          </Text>
          <Text>11. Kazanma durumları şunlardır:</Text>
          <Text>
            {' '}
            - Yatayda kazanma: Üst, orta ve alt satırlarda aynı semboller.
          </Text>
          <Text>
            {' '}
            - Dikeyde kazanma: Sol, orta ve sağ sütunlarda aynı semboller.
          </Text>
          <Text>
            {' '}
            - Çaprazda kazanma: Sol üst köşeden sağ alt köşeye veya sağ üst
            köşeden sol alt köşeye doğru aynı semboller.
          </Text>
          <Text>
            12. Oyun kazanana kadar veya tahta dolana kadar devam eder.
          </Text>
          <Text>
            13. Kazananı belirledikten sonra veya berabere sonuçlandığında,
            oyuncular oyunu sona erdirir ve gerektiğinde yeni bir oyun
            başlatabilir.
          </Text>
          <Text
            style={{
              fontSize: 26,
              textAlign: 'left',
              paddingTop: 10,
            }}>
            Bol Şans
          </Text>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GameRulesScreen;
