import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from '../screens/WelcomeScreen';
import GamesScreen from '../screens/GamesScreen';
import GameRulesScreen from '../screens/GameRulesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GameModeScreen1 from '../screens/GameModes/GameModeScrren1';
import GameModeScreen2 from '../screens/GameModes/GameModeScrren2';
import GameModeScreen3 from '../screens/GameModes/GameModeScrren3';
import RealmMainScreen from '../screens/Realm/RealmMainScreen';
import RealmUserScreen from '../screens/Realm/User';
import RealmProfileScreen from '../screens/Realm/Profile';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Welcome">
      <Drawer.Screen name="WELCOME" component={WelcomeScreen} />
      <Drawer.Screen name="Game Mods" component={GamesScreen} />
      <Drawer.Screen name="Game Rules" component={GameRulesScreen} />
      <Drawer.Screen name="Realm Test" component={RealmMainScreen} />
    </Drawer.Navigator>
  );
}
function Navigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen
          name="GameMode1"
          component={GameModeScreen1}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="GameMode2"
          component={GameModeScreen2}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="GameMode3"
          component={GameModeScreen3}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;
