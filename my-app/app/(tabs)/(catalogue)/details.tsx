import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View } from '../../../components/Themed';
import Header from '../../../components/Header';
import DetailsScreen from '../../../components/DetailsScreen';

export default function TabDetails() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />  
        <DetailsScreen id={0}  />
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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