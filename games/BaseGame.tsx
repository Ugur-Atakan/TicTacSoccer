import React, {useEffect}from 'react';
import {VStack, HStack} from 'react-native-flex-layout';
import {SafeAreaView, View} from 'react-native';
import SoccerCell from '../components/cells/soccerCell';
import TeamCell from '../components/cells/teamCell';
import LogoCell from '../components/cells/logoCell';
import ModalComponent from '../components/Modal';
import GameHandlers from '../utils/handlers/game';

export default function BaseGame(): React.JSX.Element {
  const gamehandler=GameHandlers();
  const spacing=0;

useEffect(()=>{
    gamehandler.startGame();
  },[])

  return (
          <VStack fill center spacing={spacing}>
            <HStack spacing={spacing} shouldWrapChildren>
              <LogoCell />
              <TeamCell cellId={0} />
              <TeamCell cellId={1} />
              <TeamCell cellId={2} />
            </HStack>
            <HStack spacing={spacing} shouldWrapChildren>
              <TeamCell cellId={3} />
              <SoccerCell cellId={0} />
              <SoccerCell cellId={1} />
              <SoccerCell cellId={2} />
            </HStack>
            <HStack spacing={spacing} shouldWrapChildren>
              <TeamCell cellId={4} />
              <SoccerCell cellId={3} />
              <SoccerCell cellId={4} />
              <SoccerCell cellId={5} />
            </HStack>
            <HStack spacing={spacing} shouldWrapChildren>
              <TeamCell cellId={5} />
              <SoccerCell cellId={6} />
              <SoccerCell cellId={7} />
              <SoccerCell cellId={8} />
            </HStack>
            <ModalComponent />
          </VStack>
  );
}

