import React from 'react';
import HomeScreen from '../../../components/HomeScreen';
import { View } from '../../../components/Themed';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../../../components/Header';

export default function TabHome() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />  
        <HomeScreen  />
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