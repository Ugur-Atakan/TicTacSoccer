import React from 'react';
import {View, Image} from 'react-native';

interface TeamProps {
  team: {
    id: number;
    name: string;
    logo: string;
  };
}

const TeamLogo: React.FC<TeamProps> = ({team}) => {
  return (
    <View>
      <Image source={{uri: team?.logo}} style={{width: 65, height: 65}} />
    </View>
  );
};

export default TeamLogo;
