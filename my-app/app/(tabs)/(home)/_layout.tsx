// (tabs)/_layout.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabDetails from './details';
import TabHome from './home';
import CatalogueScreen from '../../../components/CatalogueScreen';

const Stack = createStackNavigator();

const TabHomeScreen = (id: number, contentType: string) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        options={{ headerShown: false }}
        component={TabHome}
      />
      <Stack.Screen
        name="details"
        options={{ headerShown: false }}
        component={({ route }: { route: { params?: { id: number, contentType: string } } }) => (
          <TabDetails route={route} />
        )}
      />
    </Stack.Navigator>
  );
};

export default TabHomeScreen;
