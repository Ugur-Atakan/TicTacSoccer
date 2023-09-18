import {useState} from 'react';

export const CommonStates = () => {
  const [type, setType] = useState<string>('soccer');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [textInput, setTextInput] = useState<string>('');

  return {
    type,
    setType,
    modalVisible,
    setModalVisible,
    textInput,
    setTextInput,
  };
};
