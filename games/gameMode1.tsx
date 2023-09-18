import React from 'react';
import {VStack, HStack, Flex} from 'react-native-flex-layout';
import {SafeAreaView, View, Text, Button} from 'react-native';
import {Teams} from '../utils/fakeData';
import {RootState} from '../utils/redux/stores/store';
import {useSelector} from 'react-redux';
import Handlers from '../utils/handlers';
import SoccerCell from '../components/cells/soccerCell';
import TeamCell from '../components/cells/teamCell';
import LogoCell from '../components/cells/logoCell';
import GlobalStyles from '../utils/globalStyles';
import ModalComponent from '../components/Modal';

function GameMode1(): React.JSX.Element {
  const winnerUser = useSelector((state: RootState) => state.winner.userData);
  const currentPlayer = useSelector(
    (state: RootState) => state.currentPlayer.currentPlayer,
  );
  const handlers = Handlers();

  return (
    <SafeAreaView style={GlobalStyles.f1}>
      <View style={GlobalStyles.f1}>
        <View style={GlobalStyles.f9}>
          <VStack fill center spacing={2}>
            {winnerUser === 'Berabere' ? (
              <Text style={GlobalStyles.fs30bold}>Berabere Bitti</Text>
            ) : winnerUser ? (
              <Text style={GlobalStyles.fs30bold}>
                Kazanan oyuncu {winnerUser}
              </Text>
            ) : (
              <Text style={GlobalStyles.fs30bold}>
                Sıradaki oyuncu {currentPlayer}
              </Text>
            )}

            <HStack spacing={2} shouldWrapChildren>
              <LogoCell />
              <TeamCell cellId={0} team={Teams[0]} />
              <TeamCell team={Teams[1]} cellId={1} />
              <TeamCell team={Teams[2]} cellId={2} />
            </HStack>
            <HStack spacing={2} shouldWrapChildren>
              <TeamCell team={Teams[3]} cellId={3} />
              <SoccerCell cellId={0} />
              <SoccerCell cellId={1} />
              <SoccerCell cellId={2} />
            </HStack>
            <HStack spacing={2} shouldWrapChildren>
              <TeamCell team={Teams[4]} cellId={4} />
              <SoccerCell cellId={3} />
              <SoccerCell cellId={4} />
              <SoccerCell cellId={5} />
            </HStack>
            <HStack spacing={2} shouldWrapChildren>
              <TeamCell team={Teams[5]} cellId={5} />
              <SoccerCell cellId={6} />
              <SoccerCell cellId={7} />
              <SoccerCell cellId={8} />
            </HStack>
          </VStack>
          <View>
            <ModalComponent />
          </View>
          {/* Modal was here but now still developing*/}
        </View>
        <HStack center shouldWrapChildren spacing={3}>
          <Flex w={200} h={100}>
            <Button
              title="Oyunu Başlat"
              onPress={() => {
                handlers.startGame();
              }}
            />
          </Flex>
          <Flex w={100} h={100}>
            <Button title="Sıfırla" onPress={handlers.resetGame} />
          </Flex>
        </HStack>
        <View style={GlobalStyles.f1}>
          <VStack fill center spacing={2}>
            {handlers.gameStatus === true ? (
              <Text style={GlobalStyles.fs30bold}>Oyun başladı</Text>
            ) : (
              <Text style={GlobalStyles.fs30bold}>Oyun başlamadı</Text>
            )}
          </VStack>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default GameMode1;
