import * as React from 'react';
import {
  Modal,
  View,
  Text,
  Pressable
} from 'react-native';
import GlobalStyles from '../../../utils/globalStyles';
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
        <View style={GlobalStyles.centeredView}>
          <View style={GlobalStyles.modalView}>
          <View style={GlobalStyles.modalExit}>
              <Pressable
                onPress={closeModal}>
                <Text style={GlobalStyles.modalExitText}>X</Text>
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
