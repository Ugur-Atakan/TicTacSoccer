import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import GamesScreen from '../screens/GamesScreen';
import GameRulesScreen from '../screens/GameRulesScreen';
import GameModeScreen1 from '../screens/GameModes/GameModeScreen1';
import MainLayout from '../layout';

import RealmMainScreen from '../screens/Realm/RealmMainScreen';
import RealmUserScreen from '../screens/Realm/User';
import RealmProfileScreen from '../screens/Realm/Profile';

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
      <Drawer.Screen name="WELCOME" component={WelcomeScreen} />
      <Drawer.Screen name="Game Mods" component={GamesScreen} />
      <Drawer.Screen name="Game Rules" component={GameRulesScreen} />
      <Drawer.Screen name="Realm Test" component={RealmMainScreen} />
      <Drawer.Screen name="GameMode" component={GameModeScreen1} />
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
        }}>
        {accessToken ? (
          <>
            <Stack.Screen name="Root" component={Root} />
            <Stack.Screen
              name="GameMode1"
              component={GameModeScreen1}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="MainLayout"
              component={MainLayout}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Users"
              component={RealmUserScreen}
              options={{headerShown: true}}
            />
            <Stack.Screen
              name="Profiles"
              component={RealmProfileScreen}
              options={{headerShown: true}}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;
