import * as React from 'react';
import {Flex} from 'react-native-flex-layout';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import {width,height,cellSize,cellStyles,imageStyles } from '../../../style';

const LogoCell = () => {
  return (
    <View>
      <Flex w={cellSize} h={cellSize} style={cellStyles.teamcells}>
        <Image
          source={{
            uri: 'https://assets.stickpng.com/images/5842fe0ea6515b1e0ad75b3c.png',
          }}
          style={imageStyles.logoimg}
        />
        <Text style={{color: 'white'}}>Tiki Taka</Text>
      </Flex>
    </View>
  );
};

export default LogoCell;
