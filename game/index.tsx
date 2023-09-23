import React, {useEffect} from 'react';
import {VStack, HStack} from 'react-native-flex-layout';
import SoccerCell from '../components/cells/soccerCell';
import TeamCell from '../components/cells/teamCell';
import LogoCell from '../components/cells/logoCell';
import ModalComponent from '../components/Modal';
import GameHandlers from '../utils/handlers/game';

export default function Game(): React.JSX.Element {
  const gamehandler = GameHandlers();
  const spacing = 0;

  useEffect(() => {
    gamehandler.startGame();
  }, []);

  return (
    <VStack
      spacing={spacing}
      style={{borderColor: 'green', paddingTop: 7, paddingLeft: 9}}>
      <HStack spacing={spacing} shouldWrapChildren>
        <LogoCell />
        <TeamCell cellId={0} />
        <TeamCell cellId={1} />
        <TeamCell cellId={2} />
      </HStack>
      <HStack spacing={spacing} shouldWrapChildren>
        <TeamCell cellId={3} />
        <SoccerCell cellId={0} coordinats={{x: 0, y: 3}} />
        <SoccerCell cellId={1} coordinats={{x: 1, y: 3}} />
        <SoccerCell cellId={2} coordinats={{x: 2, y: 3}} />
      </HStack>
      <HStack spacing={spacing} shouldWrapChildren>
        <TeamCell cellId={4} />
        <SoccerCell cellId={3} coordinats={{x: 0, y: 4}} />
        <SoccerCell cellId={4} coordinats={{x: 1, y: 4}} />
        <SoccerCell cellId={5} coordinats={{x: 2, y: 4}} />
      </HStack>
      <HStack spacing={spacing} shouldWrapChildren>
        <TeamCell cellId={5} />
        <SoccerCell cellId={6} coordinats={{x: 0, y: 5}} />
        <SoccerCell cellId={7} coordinats={{x: 1, y: 5}} />
        <SoccerCell cellId={8} coordinats={{x: 2, y: 5}} />
      </HStack>
      <ModalComponent />
    </VStack>
  );
}
