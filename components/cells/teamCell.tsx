import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles from '../../utils/globalStyles';
import Handlers from '../../utils/handlers';

interface TeamCellProps {
  cellId: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
}

const TeamCell: React.FC<TeamCellProps> = ({cellId, team}) => {
  const handlers = Handlers();
  const teamCells = Handlers().teamCells;

  return (
    <TouchableOpacity onPress={() => handlers.handleTeamCell(cellId)}>
      <Flex w={100} h={100} style={GlobalStyles.cells}>
        {teamCells[cellId] !== null ? (
          <Text style={GlobalStyles.fs15}>{teamCells[cellId]?.name}</Text>
        ) : (
          <Text style={GlobalStyles.fs15}>{teamCells[cellId]?.name}</Text>
          // <TeamLogo team={team} />
        )}
      </Flex>
    </TouchableOpacity>
  );
};

export default TeamCell;
