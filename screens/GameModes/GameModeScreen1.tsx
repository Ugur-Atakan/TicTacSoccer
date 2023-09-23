import { Text } from '@rneui/themed';
import React, { useState, useEffect } from 'react';

import MainLayout from '../../layout';

function GameModeScreen1(): JSX.Element {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown === 0) {
        clearInterval(countdownInterval);
      } else {
        setCountdown(prevCountdown => prevCountdown - 1);
      }
    }, 1000); 
    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
      countdown > 0 ? <Text>{countdown}</Text> : <MainLayout />
  );
};
export default GameModeScreen1;