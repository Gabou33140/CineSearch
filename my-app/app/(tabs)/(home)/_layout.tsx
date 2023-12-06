import React from 'react';
import { Stack } from 'expo-router';

export default function TabHomeScreen() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }}  />
      <Stack.Screen name="details" options={{ headerShown: false }}  />
    </Stack>
  );
}

