import * as React from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
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
import {Flex, VStack} from 'react-native-flex-layout';
import Handlers from '../utils/handlers/index';
import baseAPI from '../utils/http/base';

const ModalComponent: React.FC = () => {
  const handlers = Handlers();
  const [input, setInput] = React.useState('');
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.modal.isVisible);
  const type = useSelector((state: RootState) => state.modal.type);

  const {selectedSoccerCell, selectedTeamCell, soccerCells, teamCells} =
    useSelector((state: RootState) => state.cells);
  const currentPlayer = useSelector(
    (state: RootState) => state.currentPlayer.currentPlayer,
  );

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
    setData([]);
    setInput('');
  };

  const handleInputSubmit = (inputType: string, Player: any) => {
    if (inputType === 'soccer') {
      if (selectedSoccerCell !== null) {
        const newSoccerCells = [...soccerCells];
        newSoccerCells[selectedSoccerCell] = Player;
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
        setData([]);
        setInput('');
        dispatch(setSelectedSoccerCell(null));
        toggleModal();
      }
    }
    if (inputType === 'team') {
      if (selectedTeamCell !== null) {
        const newTeamCells = [...teamCells];
        newTeamCells[selectedTeamCell] = Player;
        dispatch(setTeamCells(newTeamCells));
        dispatch(setCurrentPlayer(currentPlayer === 'P1' ? 'P2' : 'P1'));
        setData([]);
        setInput('');
        dispatch(setSelectedTeamCell(null));
        toggleModal();
      }
    }
  };
  const teams = handlers.teamCells as any;

  const fectData = () => {
    const _teams = teams.map((t: any) => t.id).join(',');
    const query = `player/search-players?teams=${_teams}&name=${input}`;
    baseAPI.get(query).then(response => {
      setData(response.data);
    });
  };

  React.useEffect(() => {
    if (input.length > 2 && teams) {
      fectData();
    }
  }, [input, teams]);

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

            {/* Modaldaki SearchableDropdown */}
            <View>
              <View
                style={{
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  marginBottom: 10,
                }}>
                <TextInput
                  placeholder="Ara"
                  onChangeText={text => setInput(text)}
                  value={input}
                />
              </View>
              <View
                style={{
                  width: 300,
                  height: 300,
                  minHeight: 100,
                  maxHeight: 300,
                }}>
                <ScrollView>
                  <VStack
                    spacing={3}
                    style={{borderWidth: 1, borderStyle: 'solid'}}>
                    {data?.map((item: any) => {
                      if (item.Player.name.includes(input)) {
                        return (
                          <Flex key={item.index}>
                            <TouchableOpacity
                              onPress={() => {
                                handleInputSubmit(type, item.Player);
                              }}
                              style={{
                                backgroundColor: '#7FFF00',
                                borderRadius: 10,
                              }}>
                              <Text
                                key={item.index}
                                style={{
                                  color: 'black',
                                  fontWeight: '600',
                                  margin: 3,
                                }}>
                                {item.Player.name}
                              </Text>
                            </TouchableOpacity>
                          </Flex>
                        );
                      }
                    })}
                  </VStack>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
