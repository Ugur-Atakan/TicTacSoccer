import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import WelcomeScreen from '../screens/WelcomeScreen';
import GamesScreen from '../screens/GamesScreen';
import GameRulesScreen from '../screens/GameRulesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RealmMainScreen from '../screens/Realm/RealmMainScreen';
import RealmUserScreen from '../screens/Realm/User';
import RealmProfileScreen from '../screens/Realm/Profile';
import MainLayout from '../layout';
import GameModeScreen1 from '../screens/GameModes/GameModeScreen1';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="GameMode">
      <Drawer.Screen name="WELCOME" component={WelcomeScreen} />
      <Drawer.Screen name="Game Mods" component={GamesScreen} />
      <Drawer.Screen name="Game Rules" component={GameRulesScreen} />
      <Drawer.Screen name="Realm Test" component={RealmMainScreen} />
      <Drawer.Screen name="GameMode" component={GameModeScreen1} />
      
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigator;
