import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import GameMode1 from '../../games/gameMode1';

const CountDownScreen = () => {
  const [timer, setTimer] = useState(4); // Sayım başlangıç değeri
  const scale = useSharedValue(4); // Animasyon için ölçek değeri

  useEffect(() => {
    // Sayım başladığında setInterval fonksiyonu ile her saniyede bir timer'ı azalt
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    // Sayım bittiğinde clearInterval fonksiyonu ile interval'i temizle
    return () => {
      clearInterval(interval);
    };
  }, []);


  useEffect(() => {
    // Sayım sıfıra ulaştığında ölçek değerini withTiming fonksiyonu ile değiştir
    if (timer === 0) {
      scale.value = withTiming(2, { duration: 1000 });
    }
  }, [timer]);

  // useAnimatedStyle fonksiyonu ile animasyonlu stil tanımla
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={styles.container}>
      {
        timer>0 ? 
        <Animated.Text style={[styles.text, animatedStyle]}>
        {timer > 1 ? timer-1 : 'Başla!'}
       </Animated.Text>:
       <GameMode1/>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default CountDownScreen;
