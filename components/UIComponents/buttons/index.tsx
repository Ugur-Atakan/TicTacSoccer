import {Button} from 'react-native-paper';
import {Flex, HStack} from 'react-native-flex-layout';
import {
  finishGame,
  startGame,
} from '../../../utils/redux/reducers/gameReducers/gameStatus.duck';
import {useDispatch} from 'react-redux';
export default function BottomButtons() {
  const dispatch = useDispatch();

  return (
    <HStack
      center
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        paddingTop: 10,
      }}>
      <Flex h={100}>
        <Button
          mode="contained"
          buttonColor="#448AFF"
          onPress={() => {
            dispatch(startGame() as any);
          }}>
          Oyunu Yenile{' '}
        </Button>
      </Flex>
      <Flex h={100}>
        <Button
          buttonColor="#448AFF"
          mode="contained"
          onPress={() => {
            dispatch(finishGame() as any);
          }}>
          Oyunu Sıfırla
        </Button>
      </Flex>
    </HStack>
  );
}
