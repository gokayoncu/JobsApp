/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from './pages/HomePage';
import FavouritePage from './pages/FavouritePage';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: 'red',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen name="Jobs" component={HomePage} />
        <Drawer.Screen name="Favourite Jobs" component={FavouritePage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
