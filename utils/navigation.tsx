import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import GamesScreen from '../screens/GamesScreen';
import GameRulesScreen from '../screens/GameRulesScreen';
import MainLayout from '../layout';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/stores/store';
import { initialTokenLoad, loginSuccess, logoutSuccess } from './redux/reducers/userReducer';
import LoginScreen from '../screens/Auth/Login';

import { View, Image, StyleSheet } from 'react-native';
import OnlineGameManagement from '../screens/OnlineGame';
import CreateRoomScreen from '../screens/OnlineGame/CreateRoom';
import Register from '../screens/Auth/Register';
import ResetPassword from '../screens/Auth/ResetPassword';
import LogoutScreen from '../screens/Auth/Logout';
import UserProfile from '../screens/Auth/Profile';

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
      <Drawer.Screen name="HOŞGELDİNİZ" options={{ headerTitle: '3 5 2 Game', headerTitleStyle: { color: '#000' } }} component={WelcomeScreen} />
      <Drawer.Screen name="Oyun Modları" component={GamesScreen} />
      <Drawer.Screen name="Oyun Kuralları" component={GameRulesScreen} />
      <Drawer.Screen name="Profil" component={UserProfile} />
      <Drawer.Screen name="Çıkış Yap" component={LogoutScreen} />
    
    </Drawer.Navigator>
  );
}

function Navigator(): JSX.Element {
  const { accessToken } = useSelector((state: RootState) => state.user);
  const { isLoading } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(initialTokenLoad({ accessToken: '' }));
      }, 500);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <View style={{ overflow: 'hidden' }}>
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
          title: '3 5 2 Game',
        }}>
        {accessToken ? (
          <>
            <Stack.Screen name="Ana Ekran" component={Root} />
            <Stack.Screen
              name="Temel Oyun"
              component={MainLayout}
              options={{ headerShown: true, title: '3 5 2' }}
            />
            <Stack.Screen
              name="MainLayout"
              component={MainLayout}
              options={{ headerShown: true, title: '3 5 2' }}
            />
            <Stack.Screen
              name='OnlineGame'
              component={OnlineGameManagement}
              options={{ headerShown: true, title: 'Online Oda oluştur ya da Katıl' }}
            />
            <Stack.Screen
              name='CreateRoom'
              component={CreateRoomScreen}
              options={{ headerShown: true, title: 'Online Oda oluştur.' }}
            />
            <Stack.Screen
              name='Register'
              component={Register}
              options={{ headerShown: true, title: 'Kayıt Ol' }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Giriş Yap"
              component={LoginScreen}
            />
            <Stack.Screen
              name='ForgotPassword'
              component={ResetPassword}
              options={{ headerShown: true, title: 'Şifreni mi unuttun ?' }}
            />
            <Stack.Screen
              name='Register'
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
