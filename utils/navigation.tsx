import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import GamesScreen from '../screens/GamesScreen';
import GameRulesScreen from '../screens/GameRulesScreen';
import MainLayout from '../layout';


import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './redux/stores/store';
import {initialTokenLoad, loginSuccess} from './redux/reducers/userReducer';
import LoginScreen from '../screens/Auth/Login';

import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    marginTop: 50,
    height: 658,
    resizeMode: 'cover',
  },
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HOŞGELDİNİZ" options={{headerTitle:'Tiki Taka Soccer', headerTitleStyle:{color:'#000'}}} component={WelcomeScreen} />
      <Drawer.Screen name="Oyun Modları" component={GamesScreen} />
      <Drawer.Screen name="Oyun Kuralları" component={GameRulesScreen} />
    </Drawer.Navigator>
  );
}
function Navigator(): JSX.Element {
  const {accessToken} = useSelector((state: RootState) => state.user);
  const {isLoading} = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(initialTokenLoad({accessToken: ''}));
      }, 500);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={{overflow: 'hidden'}}>
        <Image
          source={{
            uri: 'https://www.cimnasgym.com/wp-content/uploads/2016/05/product-soccer-ball.jpg',
          }}
          style={styles.logo}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          title:'Tiki Taka Soccer',
        }}>
        {accessToken ? (
          <>
            <Stack.Screen name="Ana Ekran" component={Root} />
            <Stack.Screen
              name="Temel Oyun"
              component={MainLayout}
              options={{headerShown: true,title:'Tiki Taka Soccer'}}
            />
            <Stack.Screen
              name="MainLayout"
              component={MainLayout}
              options={{headerShown: true,title:'Tiki Taka Soccer'}}
             
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Giriş Yap" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;
