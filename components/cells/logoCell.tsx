import * as React from 'react';
import {Flex} from 'react-native-flex-layout';
import GlobalStyles from '../../utils/globalStyles';
import {Image, View} from 'react-native';

const LogoCell = () => {
  return (
    <View>
      <Flex w={80} h={80} style={GlobalStyles.cells}>
        <Image
          source={{
            uri: 'https://www.pngmart.com/files/22/Soccer-Ball-PNG.png',
          }}
          style={{width: 55, height: 55}}
        />
      </Flex>
    </View>
  );
};

export default LogoCell;
