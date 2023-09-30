import * as React from 'react';
import {
  Modal,
  View,
  Text,
  Pressable
} from 'react-native';
import {modalStyles} from '../../../style';

import SelecetSoccerInput from '../selectSoccer';
export default function ModalComponent({isShowing,closeModal}:any){
  return (
    <View>
      <Modal
        visible={isShowing}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
        >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
          <View style={modalStyles.modalExit}>
              <Pressable
                onPress={closeModal}>
                <Text style={modalStyles.modalExitText}>X</Text>
              </Pressable>
            </View>
              <Text>Oyuncu Seç:</Text>
              <SelecetSoccerInput closeModal={closeModal} />
          </View>
        </View>
      </Modal>
      </View>
  );
};
