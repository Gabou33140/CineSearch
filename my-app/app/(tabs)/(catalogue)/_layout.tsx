import React from 'react';
import { Stack } from 'expo-router';

export default function TabHomeScreen() {
  return (
    <Stack>
      <Stack.Screen name="catalogue" options={{ headerShown: false }}  />
      <Stack.Screen name="details" options={{ headerShown: false }}  />
    </Stack>
  );
}

