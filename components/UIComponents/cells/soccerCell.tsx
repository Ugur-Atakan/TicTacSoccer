import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles, { cellSize } from '../../../utils/globalStyles';
import {SoccerSVG} from '../../../utils/SVGComponents';
import {useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/stores/store';
interface SoccerCellProps {
  cellId: number;
  openModal: any;
}
const SoccerCell: React.FC<SoccerCellProps> = ({cellId, openModal}) => {
  const soccerCells = useSelector((state: RootState) => state.gameBoard.cells);
  const gameStatus= useSelector((state: RootState) => state.gameStatus.gameStatus);

  return (
    <TouchableOpacity
      onPress={() => {
        gameStatus==true?
        openModal(cellId):
      ( console.log(gameStatus))
      }}>
      <Flex
        w={cellSize}
        h={cellSize}
        style={GlobalStyles.soccercells}>
        {soccerCells[cellId] && soccerCells[cellId] !== null ? (
          <>
            <SoccerSVG />
            <Text style={GlobalStyles.fs15white}>
              {soccerCells[cellId]?.data?.name ?? '+'}
            </Text>
          </>
        ) : (
          <View style={{paddingTop: 15}}>
            <SoccerSVG />
            <Text
              style={{fontSize: 50, fontWeight: 'bold', alignSelf: 'center'}}>
              +
            </Text>
          </View>
        )}
      </Flex>
    </TouchableOpacity>
  );
};

export default SoccerCell;
