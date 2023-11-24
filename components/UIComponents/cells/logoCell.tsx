import * as React from 'react';
import {Flex} from 'react-native-flex-layout';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import {cellSize,cellStyles,imageStyles, width } from '../../../style';

const LogoCell = () => {
  return (
    <View>
      <Flex w={cellSize} h={cellSize} style={cellStyles.teamcells}>
        <Image
          source={require('../../../assets/logo.png')}
          style={imageStyles.logoimg}
        />
       
        <Text style={{color: 'white',fontSize:width*0.04}}>3 5 2 </Text>
      </Flex>
    </View>
  );
};

export default LogoCell;
