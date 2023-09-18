import * as React from 'react';
import {Flex} from 'react-native-flex-layout';
import {FootBallSVG} from '../../utils/SVGComponents';
import GlobalStyles from '../../utils/globalStyles';
import {View} from 'react-native';

const LogoCell = () => {
  return (
    <View>
      <Flex w={80} h={80} style={GlobalStyles.cells}>
        <FootBallSVG />
      </Flex>
    </View>
  );
};

export default LogoCell;
