import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen as React.FC} />
        {/* <Stack.Screen name="Films" component={FilmScreen} />
        <Stack.Screen name="Séries" component={SeriesScreen} />
        <Stack.Screen name="Animés" component={AnimeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

