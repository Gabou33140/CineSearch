import { StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';
import React from 'react';
import Header from '../../../components/Header';
import CatalogueScreen from '../../../components/CatalogueScreen';

export default function TabTwoScreen() {
  return (
    <View>
      <Header />
      <CatalogueScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});