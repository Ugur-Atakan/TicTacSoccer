import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import MainLayout from '../../layout';

const GameModeScreen1 = () => {
  const [timer, setTimer] = useState(4);
  const scale = useSharedValue(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      scale.value = withTiming(2, {duration: 1000});
    }
  }, [timer]);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <View style={styles.container}>
      {timer > 0 ? (
        <Animated.Text style={[styles.text, animatedStyle]}>
          {timer > 1 ? timer - 1 : 'Başla!'}
        </Animated.Text>
      ) : (
        <MainLayout />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default GameModeScreen1;