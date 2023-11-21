import React from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import { Flex } from 'react-native-flex-layout';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';
import { shortNameGenerator } from '../../../utils/idTransformer';
import { cellSize, cellStyles, textStyles } from '../../../style';

interface TeamCellProps {
  cellId: number;
}

const TeamCell: React.FC<TeamCellProps> = ({ cellId }) => {
  const teamCells = useSelector((state: RootState) => state.game.teamCells);
  const logoId = teamCells[cellId]?.id;
  return (
    <TouchableWithoutFeedback>
      <Flex w={cellSize} h={cellSize} style={cellStyles.teamcells}>
        {
        teamCells[cellId]?.id !== null ? (
          <>
            <Image
              source={{ uri:`https://uguratakan.com/352game/assets/teamlogos/${logoId}.gif`}}
              style={{ width: 55, height: 55 }}
            />
          
            <Text style={textStyles.fs15}>
              {shortNameGenerator(teamCells[cellId]?.id)}</Text>
          </>
        ) : (
          <Text style={textStyles.fs30}>{teamCells[cellId]?.name}</Text>
        )}
      </Flex>
    </TouchableWithoutFeedback>
  );
};

export default TeamCell;
