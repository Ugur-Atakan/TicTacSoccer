import * as React from 'react';
import {Modal, Pressable, Text, TextInput} from 'react-native';
import {View} from 'react-native';
import {CommonStates} from '../utils/commonStates';
import GlobalStyles from '../utils/globalStyles';
import {RootState} from '../utils/redux/stores/store';
import {useDispatch, useSelector} from 'react-redux';
import {
  showModal,
  hideModal,
} from '../utils/redux/reducers/gameReducers/modalStatus';

import {
  setSelectedSoccerCell,
  setSelectedTeamCell,
  setSoccerCells,
  setTeamCells,
} from '../utils/redux/reducers/gameReducers/cells';
import {setWinnerPlayer} from '../utils/redux/reducers/gameReducers/winner';
import {setCurrentPlayer} from '../utils/redux/reducers/gameReducers/currentPlayer';
import {Flex, HStack} from 'react-native-flex-layout';

const ModalComponent: React.FC = () => {
  const {textInput, setTextInput} = CommonStates();
  const isVisible = useSelector((state: RootState) => state.modal.isVisible);
  const type = useSelector((state: RootState) => state.modal.type);
  const selectedTeamCell = useSelector(
    (state: RootState) => state.cells.selectedTeamCell,
  );
  const selectedSoccerCell = useSelector(
    (state: RootState) => state.cells.selectedSoccerCell,
  );
  const soccerCells = useSelector(
    (state: RootState) => state.cells.soccerCells,
  );
  const teamCells = useSelector((state: RootState) => state.cells.teamCells);
  const currentPlayer = useSelector(
    (state: RootState) => state.currentPlayer.currentPlayer,
  );
  const dispatch = useDispatch();

  const checkWinner = (squares: Array<string | null>): string | null => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };
  const toggleModal = () => {
    isVisible ? dispatch(hideModal()) : dispatch(showModal(''));
    setTextInput('');
    console.log('Modal durumu değişti');
  };

  const handleInputSubmit = (inputType: string) => {
    if (inputType === 'soccer') {
      if (selectedSoccerCell !== null) {
        const newSoccerCells = [...soccerCells];
        newSoccerCells[selectedSoccerCell] = textInput;
        dispatch(setSoccerCells(newSoccerCells));
        const result = checkWinner(newSoccerCells);
        if (result) {
          dispatch(setWinnerPlayer(currentPlayer));
        } else {
          if (newSoccerCells.every(square => square !== null)) {
            // Eğer bütün kutular dolu ve kimse kazanmamışsa, oyun berabere biter.
            dispatch(setWinnerPlayer('Berabere'));
          } else {
            dispatch(setCurrentPlayer(currentPlayer === 'P1' ? 'P2' : 'P1'));
          }
        }
        setTextInput('');
        dispatch(setSelectedSoccerCell(null));
        toggleModal();
      }
    }
    if (inputType === 'team') {
      if (selectedTeamCell !== null) {
        const newTeamCells = [...teamCells];
        newTeamCells[selectedTeamCell] = textInput;
        dispatch(setTeamCells(newTeamCells));
        dispatch(setCurrentPlayer(currentPlayer === 'P1' ? 'P2' : 'P1'));
        setTextInput('');
        dispatch(setSelectedTeamCell(null));
        toggleModal();
      }
    }
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => toggleModal()}>
        <View style={GlobalStyles.centeredView}>
          <View style={GlobalStyles.modalView}>
            <View style={GlobalStyles.modalExit}>
              <Pressable
                onPress={() => {
                  toggleModal();
                }}>
                <Text style={GlobalStyles.modalExitText}>X</Text>
              </Pressable>
            </View>
            {type === 'soccer' ? (
              <Text>Oyuncu Seç:</Text>
            ) : (
              <Text>Takım Seç:</Text>
            )}
            <TextInput
              value={textInput}
              onChangeText={text => setTextInput(text)}
              onSubmitEditing={() => {
                handleInputSubmit(type);
              }}
              autoFocus={true}
              placeholder="Metin girin..."
            />
            <HStack shouldWrapChildren spacing={3}>
              <Flex>
                <Pressable
                  style={[GlobalStyles.button, GlobalStyles.buttonClose]}
                  onPress={() => {
                    handleInputSubmit(type);
                  }}>
                  <Text style={GlobalStyles.textStyle}>Onayla</Text>
                </Pressable>
              </Flex>
              <Flex>
                <Pressable
                  style={[GlobalStyles.button, GlobalStyles.buttonClose]}
                  onPress={() => toggleModal()}>
                  <Text style={GlobalStyles.textStyle}>Kapat</Text>
                </Pressable>
              </Flex>
            </HStack>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
