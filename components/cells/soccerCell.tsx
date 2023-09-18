import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles from '../../utils/globalStyles';
import Handlers from '../../utils/handlers';
import {SoccerSVG} from '../../utils/SVGComponents';

interface SoccerCellProps {
  cellId: number;
}

const SoccerCell: React.FC<SoccerCellProps> = ({cellId}) => {
  const handlers = Handlers();
  const soccerCells = Handlers().soccerCells;
  return (
    <TouchableOpacity onPress={() => handlers.handleSoccerCell(cellId)}>
      <Flex w={80} h={80} style={GlobalStyles.cells}>
        {soccerCells[cellId] && soccerCells[cellId] !== null ? (
          <Text style={GlobalStyles.fs56}>{soccerCells[cellId]}</Text>
        ) : (
          <SoccerSVG />
        )}
      </Flex>
    </TouchableOpacity>
  );
};

export default SoccerCell;
