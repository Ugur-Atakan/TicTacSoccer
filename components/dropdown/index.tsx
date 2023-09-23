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
import Handlers from '../../utils/handlers';

export default function SearchableDropdown() {
  const handlers = Handlers();
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const teams = handlers.teamCells as any;

  const fectData = () => {
    const _teams = teams.map((t: any) => t.id).join(',');
    const query = `http://185.95.165.218:5001/api/player/search-players?teams=${_teams}&name=${input}`;
    axios.get(query).then(response => {
      setData(response.data);
    });
  };

  useEffect(() => {
    if (input.length > 2 && teams) {
      fectData();
    }
  }, [input, teams]);

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
              if (item.Player.name.includes(input)) {
                return (
                  <Flex key={item.index}>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={{backgroundColor: '#7FFF00', borderRadius: 10}}>
                      <Text
                        key={item.index}
                        style={{color: 'black', fontWeight: '600', margin: 3}}>
                        {item.Player.name}
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
