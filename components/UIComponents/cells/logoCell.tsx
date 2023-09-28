import * as React from 'react';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles from '../../../utils/globalStyles';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import {cellSize} from '../../../utils/globalStyles';
const LogoCell = () => {
  return (
    <View>
      <Flex w={cellSize} h={cellSize} style={GlobalStyles.teamcells}>
        <Image
          source={{
            uri: 'https://assets.stickpng.com/images/5842fe0ea6515b1e0ad75b3c.png',
          }}
          style={{width: 55, height: 55, tintColor: 'white'}}
        />
        <Text style={{color: 'white'}}>Tiki Taka</Text>
      </Flex>
    </View>
  );
};

export default LogoCell;
