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

  const {type, isVisible,coordinats}= useSelector((state:RootState)=> state.modal)
  const coords=useSelector((state:RootState)=>state.modal.coordinats);

  const {selectedSoccerCell, selectedTeamCell, soccerCells, teamCells} =
    useSelector((state: RootState) => state.cells);
  const currentPlayer = useSelector(
    (state: RootState) => state.currentPlayer.currentPlayer,
  );

  interface Square {
    iscorred: boolean;
    data: {
      playerid: number;
    };
  }

  const checkWinner = (squares: Square[]): number | null => {
    const winningLines: number[][] = [
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
       if (squares[a].iscorred && squares[b].iscorred && squares[c].iscorred) {
        return squares[a].data.playerid;
      }
    }

    return null;
  };

  const toggleModal = () => {
    isVisible ? dispatch(hideModal()) : dispatch(showModal(''));
    setData([]);
    setInput('');
  };

  const isCorrect= async (playerId: number)=>{
  const query=`player/check-player?teams=${teamCells[coordinats.x]?.id},${teamCells[coordinats.y]?.id}&player=${playerId}`
  console.log('http://185.95.165.218:5001/api/'+query)
   const res= baseAPI.get(query)
    .then(
      response =>{
        if(response.data == true){
          return true;
        }
        else{
          return false;
        }
      }
    )
return res;
  }

  const handleInputSubmit = async (inputType: string, Player: any) => {
      const check= await isCorrect(Player.id)
      if (selectedSoccerCell !== null) {
        if(check==true)
        {
          const newSoccerCells = [...soccerCells];
          newSoccerCells[selectedSoccerCell] = {
            isCorret:true,
            data:Player,
          }
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
        } else{
          console.log('Oyuncu iki takımda birden oynamış değil ve sıra diğer oyuncuya geçti');
          dispatch(setCurrentPlayer(currentPlayer === 'P1' ? 'P2' : 'P1'));
          setData([]);
            setInput('');
            dispatch(setSelectedSoccerCell(null));
            toggleModal();
        }

      } 
  };
  const teams = handlers.teamCells as any;

  React.useEffect(() => {
    const fectData = () => {
      const _teams = teams.map((t: any) => t.id).join(',');
      const query = `player/search-players?teams=${_teams}&name=${input}`;
      baseAPI.get(query).then(response => {
        setData(response.data);
      });
    };
    if (input.length > 2 && teams) {
      fectData();
    }
  }, [input, teams, setData]);

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
                    {data?.map((item: any,key: any) => {
                      if (item.Player.name.includes(input)) {
                        return (
                          <Flex key={key}>
                            <TouchableOpacity
                              onPress={() => {
                                handleInputSubmit(type, item.Player);
                              }}
                              style={{
                                backgroundColor: '#7FFF00',
                                borderRadius: 10,
                              }}>
                              <Text
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
