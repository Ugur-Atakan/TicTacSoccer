import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { VStack } from 'react-native-flex-layout';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

function GameRulesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#303F9F' }}>
      <ScrollView>
        <VStack style={{ paddingRight: 10, paddingLeft: 5 }}>
          <View style={{ paddingBottom: 50 }} />
          <Text style={{ color: '#FFFFFF' }}>
            1. 3 5 2 , 4x4 bir kare tahtada oynanır. Bu tahtada toplam 16
            hücre bulunur. Bu hücrelerden 6 tanesi futbol takımlarına 9 tanesi ise oyuncuların doldurması için futbolculara aittir. kalan 1 tanesi de bizim logomuz :)
            {' \n '}
            {' \n '}
            2. Oyun iki oyuncu arasında oynanır.
            {' \n '}
            3. İki oyuncu vardır ve 1. oyuncu Yeşil 2. oyuncu ise Kırmızı renkle temsil edilir.
            {' \n '}
            4. Oyunculardan biri "X" ile başlar, diğer oyuncu "O" ile yanıt
            verir.
            {' \n '}
            5. Oyuncuların amacı sırayla bir hücreye kendi o satırın ve sutunun başındaki takımların her ikisinde de oynamış bir oyuncuyu koymak için hamle yapmaktır.
            {' \n '}
            6. Bir oyuncu, aynı sembollerle üçünü yatay, dikey veya çapraz
            olarak birleştirdiğinde, o oyuncu oyunu kazanır.
            {' \n '}
            7. Kazanan oyuncu, kazandığı hizalamanın üzerine çizer veya
            sembolünü yerleştirir.
            {' \n '}
            8. Eğer tahta tamamen dolar ve herhangi bir oyuncu kazanmazsa, oyun
            berabere (draw) sona erer.
            {' \n '}
            9. Kazanma durumları şunlardır
            {' \n '}
            {' '}
            - Yatayda kazanma: Üst, orta ve alt satırlarda aynı semboller.
            {' \n '}
            {' '}
            - Dikeyde kazanma: Sol, orta ve sağ sütunlarda aynı semboller.
            {' \n '}
            {' '}
            - Çaprazda kazanma: Sol üst köşeden sağ alt köşeye veya sağ üst
            köşeden sol alt köşeye doğru aynı semboller.
            {' \n '}
            10. Oyun kazanana kadar veya tahta dolana kadar devam eder.
            {' \n '}
            11. Kazananı belirledikten sonra veya berabere sonuçlandığında,
            oyuncular oyunu sona erdirir ve gerektiğinde yeni bir oyun
            başlatabilir.
          </Text>

          <Text
            style={{
              fontSize: 26,
              textAlign: 'left',
              paddingTop: 10,
              color: 'white',
              alignSelf: 'center'
            }}>
            Bol Şans
          </Text>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

export default GameRulesScreen;
