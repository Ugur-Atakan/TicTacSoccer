import React, { useState, useEffect } from 'react'
import {
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native';
import { VStack } from 'react-native-flex-layout';
import baseAPI from '../../../utils/http/base';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';
import { play, nextPlayer } from '../../../utils/redux/reducers/gameReducers/gameBoard';
import {selectSoccerInputStyles} from '../../../style';

interface SelectSoccerInputProps {
    closeModal: any;
}

export default function SelecetSoccerInput({ closeModal }: SelectSoccerInputProps) {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const teamCells = useSelector((state: RootState) => state.teamCells.teamCells);
    const { selectedCellId } = useSelector((state: RootState) => state.gameBoard);

    useEffect(() => {
        const fectData = () => {
            const _teams = teamCells.map((t: any) => t.id).join(',');
            const query = `player/search-players?teams=${_teams}&name=${input}`;
            baseAPI.get(query).then(response => {
                setData(response.data);
            });
        };
        if (input.length > 2 && teamCells) {
            fectData();
        }
    }, [input, teamCells]);



 
    const _finCoords = (cellID: number) => {
        switch (cellID) {
            case 0:
                return { x: 0, y: 3 };
            case 1:
                return { x: 1, y: 3 };
            case 2:
                return { x: 2, y: 3 };
            case 3:
                return { x: 0, y: 4 };
            case 4:
                return { x: 1, y: 4 };
            case 5:
                return { x: 2, y: 4 };
            case 6:
                return { x: 0, y: 5 };
            case 7:
                return { x: 1, y: 5 };
            case 8:
                return { x: 2, y: 5 };
            default:
                return { x: 0, y: 0 };
        }
    }

    const _isCorrect = async (soccerID: number) => {
        const query = `player/check-player?teams=${teamCells[_finCoords(selectedCellId).x]?.id},${teamCells[_finCoords(selectedCellId).y]?.id}&player=${soccerID}`;
        const res = baseAPI.get(query).then(response => {
            if (response.data == true) {
                return true;
            } else {
                return false;
            }
        });
        return res;
    };
    ;

    const handleInputSubmit = async (Soccer: any) => {
        const check = await _isCorrect(Soccer.id);
        if (check == true) {
            dispatch(
                play({
                    index: selectedCellId, // Burada 'cellID' değişkeni, oynanacak hücrenin indeksini temsil etmelidir.
                    soccer: {
                        isCorrect: true,
                        data: Soccer, // 'Player' değişkeni, oyuncu verilerini içermelidir.
                    },
                })
            );
            console.log('Oyuncu iki takımda birden oynamış doğru döndü yani en azından Fatih öyle diyor')
            // Burasından emin değilim.

        } else {
            console.log('Oyuncu iki takımda birden oynamış değil ve sıra diğer oyuncuya geçti')
            dispatch(nextPlayer());
        }
        closeModal();
        setData([]);
        setInput('');
    };

    return (
        <View>
            <View
                style={selectSoccerInputStyles.textInput}>
                <TextInput
                    placeholder="Ara"
                    onChangeText={text => setInput(text)}
                    value={input}
                />
            </View>
            <View
                style={selectSoccerInputStyles.soccerList}>
                <ScrollView>
                    <VStack
                        spacing={3}
                        style={{ borderWidth: 1, borderStyle: 'solid' }}>
                        {data?.map((item: any) => {
                            if (item.Player.name.includes(input)) {
                                return (
                                    <View key={item.index}>
                                    <TouchableOpacity
                                        onPress={()=> handleInputSubmit(item.Player)}
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
                                </View>
                                )
                            }
                        })}
                    </VStack>
                </ScrollView>
            </View>
        </View>
    )
}