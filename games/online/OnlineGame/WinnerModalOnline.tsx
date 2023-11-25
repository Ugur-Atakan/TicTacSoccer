import React, { useEffect } from "react";
import { View } from "react-native";
import { Modal, Text, Button, Portal } from 'react-native-paper';
import { RootState } from "../../../utils/redux/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { finishGame, listenerFinishGame, listenerNextRound, nextRound } from "../../../utils/redux/actions/game";
import { modalStyles, textStyles } from "../../../style";

export default function WinnerModalOnline({ props }: any) {
    const [visible, setVisible] = React.useState(false);
    const { winnerUserData } = useSelector((state: RootState) => state.game);
    const Scores = useSelector((state: RootState) => state.game.scores);
    const socket = useSelector((state: RootState) => state.socket.socket);
    const dispatch = useDispatch();
    const hideModal = () => setVisible(false);
    const { isHost, roomCode } = props;
    console.log('WinnerModalOnline', props);
    useEffect(() => {
        if (winnerUserData?.id != null) {
            setVisible(true);
        }
    }, [winnerUserData]);

    useEffect(() => {
        socket.on('next-round', () => {
            dispatch(listenerNextRound() as any);
            hideModal();
        });
        socket.on('finish-game', () => {
            dispatch(listenerFinishGame() as any);
            hideModal();
        });
    }, [socket]);

    const containerStyle = { backgroundColor: '#BDBDBD', padding: 20 };

    return (
        <Portal>
            <Modal visible={visible} contentContainerStyle={containerStyle}>
                <Text style={{ fontSize: 30, alignSelf: 'center', fontWeight: 'bold' }}>BU RAUND BİTTİ !</Text>
                <View style={{ padding: 10, margin: 10 }}>
                    <Text variant="headlineLarge"> Kazanan Oyuncu {JSON.stringify(winnerUserData.id)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={[modalStyles.PlayersBackGround, { backgroundColor: '#4CAF50' }]}>
                        <Text style={textStyles.fs60whiteBold}>{Scores[0]}</Text>
                    </View>
                    <Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>VS</Text>
                    <View style={[modalStyles.PlayersBackGround, { backgroundColor: '#FF4081' }]}>
                        <Text style={textStyles.fs60whiteBold}>{Scores[1]}</Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: 10 }}>
                    <Button
                        buttonColor="#448AFF"
                        mode="contained"
                        disabled={isHost??!isHost}
                        onPress={() => {
                            hideModal();
                            dispatch(finishGame(roomCode) as any);
                        }}>
                        Oyunu Bitir
                    </Button>
                    <Button
                        mode="contained"
                        buttonColor="#448AFF"
                        disabled={isHost??!isHost}
                        onPress={
                            () => {
                                dispatch(nextRound(roomCode) as any);
                                hideModal();
                            }}>
                        Sonraki Raund
                    </Button>
                </View>
            </Modal>
        </Portal>
    );
};

