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
const SoccerCellOnline: React.FC<SoccerCellProps> = ({cellId, openModal}) => {
  const soccerCells = useSelector((state: RootState) => state.game.soccerCells);
  const gameStatus= useSelector((state: RootState) => state.game.gameStatus);
  const userData= useSelector((state: RootState) => state.user.userData);
  const {currentPlayer}= useSelector((state: RootState) => state.game);
  const connectedUsers= useSelector((state: RootState) => state.room.connectedUsers);

  return (
    <TouchableOpacity
      onPress={() => {
        (userData?.id==connectedUsers[currentPlayer?.id-1]?.id )&& gameStatus==true && !soccerCells[cellId].data ?
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

export default SoccerCellOnline;
