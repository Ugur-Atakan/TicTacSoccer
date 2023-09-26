import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles from '../../../utils/globalStyles';
import {Image} from 'react-native';
import {idTransformer} from '../../../utils/idTransformer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/redux/stores/store';
interface TeamCellProps {
  cellId: number;
}

const TeamCell: React.FC<TeamCellProps> = ({cellId}) => {
  const teamCells = useSelector((state: RootState) => state.teamCells.teamCells);
  return (
    <TouchableOpacity>
      <Flex w={95} h={95} style={GlobalStyles.teamcells}>
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
            <Text style={GlobalStyles.fs15}>{teamCells[cellId]?.name}</Text>
          </>
        ) : (
          <Text style={GlobalStyles.fs30}>{teamCells[cellId]?.name}</Text>
        )}
      </Flex>
    </TouchableOpacity>
  );
};

export default TeamCell;
