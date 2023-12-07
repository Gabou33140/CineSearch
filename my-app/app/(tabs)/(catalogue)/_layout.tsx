import React from 'react';
import { Stack } from 'expo-router';
import TabDetails from './details';

export default function TabHomeScreen() {
  return (
    <Stack>
      <Stack.Screen name="catalogue" options={{ headerShown: false }}  />
    </Stack>
  );
}

