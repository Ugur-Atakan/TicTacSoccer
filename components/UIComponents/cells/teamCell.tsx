import React from 'react';
import {TouchableWithoutFeedback,Text} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles, { cellSize } from '../../../utils/globalStyles';
import {Image} from 'react-native';
import {idTransformer} from '../../../utils/idTransformer';
import {useSelector} from 'react-redux';
import {RootState} from '../../../utils/redux/stores/store';
import {shortNameGenerator} from '../../../utils/idTransformer';
interface TeamCellProps {
  cellId: number;
}

const TeamCell: React.FC<TeamCellProps> = ({cellId}) => {
  const teamCells = useSelector(
    (state: RootState) => state.teamCells.teamCells,
  );
  return (
    <TouchableWithoutFeedback>
      <Flex w={cellSize} h={cellSize} style={GlobalStyles.teamcells}>
        {teamCells[cellId] !== null ? (
          <>
            <Image
              source={{
                uri: `https://im.mackolik.com/img/logo/buyuk/${idTransformer(
                  teamCells[cellId]?.id,
                )}.gif`,
              }}
              style={{width: 55, height: 55}}
            />
            <Text style={GlobalStyles.fs15}>
              {shortNameGenerator(teamCells[cellId]?.id)}</Text>
          </>
        ) : (
          <Text style={GlobalStyles.fs30}>{teamCells[cellId]?.name}</Text>
        )}
      </Flex>
    </TouchableWithoutFeedback>
  );
};

export default TeamCell;
