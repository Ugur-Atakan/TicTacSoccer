import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import GamesScreen from '../screens/GamesScreen';
import GameRulesScreen from '../screens/GameRulesScreen';
import SingleGame from '../games/single';
import OnlineGame from '../games/online';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/stores/store';
import LoginScreen from '../screens/Auth/Login';

import OnlineGameManagement from '../games/online/OnlineGame/GameManagement';
import JoinRoom from '../games/online/OnlineGame/JoinRoom';
import CreateRoom from '../games/online/OnlineGame/CreateRoom';
import Lobby from '../games/online/OnlineGame/Lobby';

import Register from '../screens/Auth/Register';
import ResetPassword from '../screens/Auth/ResetPassword';
import LogoutScreen from '../screens/Auth/Logout';
import { registerSocketToRedux } from './redux/reducers/socketReducer';
import { socket } from './socketService';
import { IconButton } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root({ navigation }: any) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Ana Ekran"
        options={{
          headerTitle: '3 5 2 Game',
          headerTitleStyle: { color: '#000' },
          headerRight: () => (
            <IconButton
              icon="exit-to-app"
              size={30}
              onPress={() => navigation.navigate('Logout')}
            />
          ),
        }}
        component={WelcomeScreen}
      />
      <Drawer.Screen name="Oyun Modları" component={GamesScreen} />
      <Drawer.Screen name="Kurallar" component={GameRulesScreen} />
    </Drawer.Navigator>
  );
}

function Navigator(): JSX.Element {
  const { accessToken } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(
        registerSocketToRedux({
          socket: socket,
        }) as any,
      );
    }
  }, [accessToken]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          title: '3 5 2 Game',
          headerStyle: {
            backgroundColor: '#fff',
          }
        }}>
        {accessToken ? (
          <>
            <Stack.Screen name="MainScreen" component={Root} />
            <Stack.Screen
              name="SingleGame"
              component={SingleGame}
              options={{ headerShown: true, title: '3 5 2' }}
            />
            <Stack.Screen
              name="OnlineGame"
              component={OnlineGame}
              options={{ headerShown: true, title: '3 5 2' }}
            />
            <Stack.Screen
              name="OnlineGameManagement"
              component={OnlineGameManagement}
              options={{
                headerShown: true,
                title: 'Online Oda oluştur ya da Katıl',
              }}
            />

            <Stack.Screen
              name="JoinRoom"
              component={JoinRoom}
              options={{
                headerShown: true,
                title: 'Online oyuna Katıl',
              }}
            />
            <Stack.Screen
              name="Lobby"
              component={Lobby}
              options={{
                headerShown: true,
                title: 'Online oyuna Katıl',
              }}
            />
            <Stack.Screen
              name="CreateRoom"
              component={CreateRoom}
              options={{ headerShown: true, title: 'Online Oda oluştur.' }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: true, title: 'Kayıt Ol' }}
            />
            <Stack.Screen
              name="Logout"
              component={LogoutScreen}
              options={{ headerShown: true, title: 'Çıkış Yap' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ResetPassword}
              options={{ headerShown: true, title: 'Şifreni mi unuttun ?' }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: true, title: 'Kayıt Ol' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;
