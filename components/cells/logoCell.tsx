import * as React from 'react';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles from '../../utils/globalStyles';
import {Image, View} from 'react-native';
import { Text } from '@rneui/themed';

const LogoCell = () => {
  return (
    <View>
      <Flex w={100} h={100} style={GlobalStyles.cells}>
        <Image
          source={{
            uri: 'https://www.pngmart.com/files/22/Soccer-Ball-PNG.png',
          }}
          style={{width: 55, height: 55}}
        />
        <Text>Tiki Taka</Text>
      </Flex>
    </View>
  );
};

export default LogoCell;
