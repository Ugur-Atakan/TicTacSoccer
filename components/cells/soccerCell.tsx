import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles from '../../utils/globalStyles';
import Handlers from '../../utils/handlers';
import {SoccerSVG} from '../../utils/SVGComponents';

interface SoccerCellProps {
  cellId: number;
  coordinats: {
    x: number;
    y: number;
  };
}

const SoccerCell: React.FC<SoccerCellProps> = ({cellId, coordinats}) => {
  const handlers = Handlers();
  const soccerCells = Handlers().soccerCells;
  return (
    <TouchableOpacity
      onPress={() => handlers.handleSoccerCell(cellId, coordinats)}>
      <Flex
        w={95}
        h={95}
        style={
          cellId % 2 == 0
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
          <>
            <SoccerSVG />
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>+</Text>
          </>
        )}
      </Flex>
    </TouchableOpacity>
  );
};

export default SoccerCell;
