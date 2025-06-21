import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './context/store';
import HomePage from './pages/HomePage';
import FavouritePage from './pages/FavouritePage';
import DetailPage from './pages/DetailPage';
import BackButton from './components/BackButton';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerScreens() {
  return (
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
  );
}

function App() {
  const shortName = name => {
    return name.length > 10 ? name.substring(0, 20) + '...' : name;
  };
  const backButton = () => <BackButton />;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={DrawerScreens}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailPage"
            component={DetailPage}
            options={({ route }) => ({
              headerTitle: shortName(route.params?.item?.name) || 'Job Details',
              headerBackTitle: 'Jobs',
              headerLeft: backButton,
              headerTintColor: 'red',
              headerTitleAlign: 'center',
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
