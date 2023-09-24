import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles from '../../../utils/globalStyles';
import {SoccerSVG} from '../../../utils/SVGComponents';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';

interface SoccerCellProps {
  cellId: number;
  openModal: any;
}
const SoccerCell: React.FC<SoccerCellProps> = ({cellId,openModal}) => {
const soccerCells=useSelector((state:RootState)=>state.gameBoard.cells);
  return (
    <TouchableOpacity
      onPress={() => {
      openModal(cellId);
      }}>
      <Flex
        w={95}
        h={95}
        style={
          cellId % 2 === 0
            ? GlobalStyles.lightsoccercells
            : GlobalStyles.darksoccercells
        }>
        {soccerCells[cellId] && soccerCells[cellId] !== null ? (
          <>
            <SoccerSVG />
            <Text style={GlobalStyles.fs15white}>
              {soccerCells[cellId]?.data.name}
            </Text>
          </>
        ) : (
          <View style={{paddingTop: 15}}>
            <SoccerSVG />
            <Text style={{fontSize: 30, fontWeight: 'bold',alignSelf:'center'}}>+</Text>
          </View>
        )}
      </Flex>
    </TouchableOpacity>
  );
};

export default SoccerCell;
