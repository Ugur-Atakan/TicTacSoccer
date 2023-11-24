import React, { useState, useEffect } from 'react'
import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { VStack } from 'react-native-flex-layout';
import baseAPI from '../../../utils/http/base';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';
import { nextPlayerTurn, playOnline } from '../../../utils/redux/actions/game';
import { selectSoccerInputStyles } from '../../../style';

interface SelectSoccerInputProps {
    closeModal: any;
}

export default function SelectSoccerInput({ closeModal }: SelectSoccerInputProps) {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const roomCode = useSelector((state: RootState) => state.room.roomCode);
    const gameData = useSelector((state: RootState) => state.game);
    const userData = useSelector((state: RootState) => state.user.userData);
    const { socket } = useSelector((state: RootState) => state.socket);

    useEffect(() => {
        const fectData = () => {
            const _teams = gameData.teamCells.map((t: any) => t.id).join(',');
            const query = `player/search-players?teams=${_teams}&name=${input}`;
            baseAPI.get(query).then(response => {
                setData(response.data);
            });
        };
        if (input.length > 2 && gameData.teamCells) {
            fectData();
        }
    }, [input, gameData.teamCells]);

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
        const query = `player/check-player?teams=${gameData.teamCells[_finCoords(gameData.selectedCellId).x]?.id},${gameData.teamCells[_finCoords(gameData.selectedCellId).y]?.id}&player=${soccerID}`;
        const res = baseAPI.get(query).then(response => {
            if (response.data == true) {
                return true;
            } else {
                return false;
            }
        });
        return res;
    };

    const handleInputSubmit = async (Soccer: any) => {
        const check = await _isCorrect(Soccer.id);
        if (check == true) {
            let soccerData = {
                index: gameData.selectedCellId,
                soccer: {
                    isCorrect: true,
                    data: Soccer,
                },
            };
           await dispatch(playOnline(soccerData) as any);
           socket?.emit('game-data-changed', { roomCode: roomCode, userId:userData.id, gameData: gameData });
           console.log('emit denemsi yapıldı',gameData)
        } else {
            await dispatch(nextPlayerTurn() as any);
            socket?.emit('game-data-changed', { roomCode: roomCode, userId:userData.id, gameData: gameData });
        }
        closeModal();
        setData([]);
        setInput('');
    };

    return (
        <View style={{ backgroundColor: '#C5CAE9' }}>
            <View
                style={selectSoccerInputStyles.textInput}>
                <Searchbar
                    placeholder="Ara"
                    onChangeText={text => setInput(text)}
                    value={input}
                    style={{ backgroundColor: '#BDBDBD' }}
                    inputStyle={{ color: '#212121' }}
                />
            </View>
            <View
                style={selectSoccerInputStyles.soccerList}>
                <ScrollView>
                    <VStack
                        spacing={3}
                        style={{ borderWidth: 1, borderStyle: 'solid' }}>
                        {data?.map((item: any, index) => {
                            if (item.Player.name.includes(input)) {
                                return (
                                    <View key={index}>
                                        <TouchableOpacity
                                            onPress={() => handleInputSubmit(item.Player)}
                                            style={{
                                                backgroundColor: '#9fa8da',
                                                borderRadius: 10,
                                                height: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                            <Text
                                                style={{
                                                    color: '#212121',
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