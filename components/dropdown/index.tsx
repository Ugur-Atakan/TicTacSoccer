import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Flex, VStack} from 'react-native-flex-layout';

export default function SearchableDropdown() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const fectData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      setData(response.data);
    });
  };

  useEffect(() => {
    if (input.length > 3) {
      console.log('arama başlatıldı');
      fectData();
    }
  }, [input]);

  return (
    <View>
      <View
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'lightgrey',
          marginBottom: 10,
        }}>
        <TextInput
          placeholder="Ara"
          onChangeText={text => setInput(text)}
          value={input}
        />
      </View>
      <View style={{width: 300, height: 300, minHeight: 100, maxHeight: 300}}>
        <ScrollView>
          <VStack spacing={3} style={{borderWidth: 1, borderStyle: 'solid'}}>
            {data?.map((item: any) => {
              if (item.title.includes(input)) {
                return (
                  <Flex>
                    <TouchableOpacity
                      style={{backgroundColor: '#7FFF00', borderRadius: 10}}>
                      <Text
                        key={item.index}
                        style={{color: 'black', fontWeight: '600', margin: 3}}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </Flex>
                );
              }
            })}
          </VStack>
        </ScrollView>
      </View>
    </View>
  );
}
