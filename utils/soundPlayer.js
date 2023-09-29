import Sound from 'react-native-sound';
import {useState, useEffect} from 'react';

const useSoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundInstance, setSoundInstance] = useState(null);

  useEffect(() => {
    const sound = new Sound('whistle.m4a', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Sound loading failed:', error);
      }
    });
    setSoundInstance(sound);
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, []);

  const playSound = () => {
    if (isPlaying) {
      soundInstance.stop();
      setIsPlaying(false);
    } else {
      soundInstance.play(success => {
        if (success) {
          setIsPlaying(false);
        }
      });
      setIsPlaying(true);
    }
  };

  return {playSound, isPlaying};
};

export default useSoundPlayer;