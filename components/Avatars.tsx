import React from 'react';
import { Avatar } from '@rneui/themed';

const Avatars = () => {
return (
        <Avatar
          size={48}
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
        >
        </Avatar>
);
};

export default Avatars;