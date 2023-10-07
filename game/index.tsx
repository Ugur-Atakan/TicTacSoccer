import React from 'react';
import {VStack, HStack} from 'react-native-flex-layout';
import SoccerCell from '../components/UIComponents/cells/soccerCell';
import TeamCell from '../components/UIComponents/cells/teamCell';
import LogoCell from '../components/UIComponents/cells/logoCell';
import ModalComponent from '../components/UIComponents/Modal';
import useModal from '../utils/hooks/useModal';
export default function Game(): React.JSX.Element {
  const {openModal, isShowing, closeModal} = useModal();
  const spacing = 0;
  return (
    <VStack
      spacing={spacing}
      style={{
        borderColor: '#303F9F',
        borderWidth: 5,
        paddingTop: 0,
        paddingLeft: 0,
      }}>
      <HStack spacing={spacing} shouldWrapChildren>
        <LogoCell />
        <TeamCell cellId={0} />
        <TeamCell cellId={1} />
        <TeamCell cellId={2} />
      </HStack>
      <HStack spacing={spacing} shouldWrapChildren>
        <TeamCell cellId={3} />
        <SoccerCell cellId={0} openModal={openModal} />
        <SoccerCell cellId={1} openModal={openModal} />
        <SoccerCell cellId={2} openModal={openModal} />
      </HStack>
      <HStack spacing={spacing} shouldWrapChildren>
        <TeamCell cellId={4} />
        <SoccerCell cellId={3} openModal={openModal} />
        <SoccerCell cellId={4} openModal={openModal} />
        <SoccerCell cellId={5} openModal={openModal} />
      </HStack>
      <HStack spacing={spacing} shouldWrapChildren>
        <TeamCell cellId={5} />
        <SoccerCell cellId={6} openModal={openModal} />
        <SoccerCell cellId={7} openModal={openModal} />
        <SoccerCell cellId={8} openModal={openModal} />
      </HStack>
      <ModalComponent isShowing={isShowing} closeModal={closeModal} />
    </VStack>
  );
}
