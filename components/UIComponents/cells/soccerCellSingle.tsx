import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import {SoccerSVG} from '../../../utils/SVGComponents';
import {useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/stores/store';
import { cellSize, cellStyles, textStyles } from '../../../style';
interface SoccerCellProps {
  cellId: number;
  openModal: any;
}
  const SoccerCellSingle: React.FC<SoccerCellProps> = ({cellId, openModal}) => {
  const soccerCells = useSelector((state: RootState) => state.game.soccerCells);
  const gameStatus= useSelector((state: RootState) => state.game.gameStatus);
 
  return (
    <TouchableOpacity
      onPress={() => {
        gameStatus==true && !soccerCells[cellId].data ?
        openModal(cellId):
      ({})
      }}>
      <Flex
        w={cellSize}
        h={cellSize}
        style={cellStyles.soccercells}>
        {soccerCells[cellId] && soccerCells[cellId] !== null ? (
          <>
            {
              soccerCells[cellId]?.knowingPlayer ==1 ?
              <SoccerSVG color="#4CAF50"/>:
              soccerCells[cellId]?.knowingPlayer ==2 ?
              <SoccerSVG color="#FF4081"/>:
              <SoccerSVG color="#448AFF"/>
            }
          <Text style={textStyles.fs15white}>
              {soccerCells[cellId]?.data?.name ?? '+'}
            </Text>
            </>
      
        ) : (
          <View style={{paddingTop: 15}}>
            <SoccerSVG color="#448AFF"/>
            <Text
              style={ [textStyles.fs50bold,{alignSelf: 'center'}]}>
              +
            </Text>
          </View>
        )}
      </Flex>
    </TouchableOpacity>
  );
};

export default SoccerCellSingle;
