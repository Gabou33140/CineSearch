import React from 'react';
import HomeScreen from '../../../components/HomeScreen';
import { View } from '../../../components/Themed';
import { ScrollView } from 'react-native';
import Header from '../../../components/Header';

export default function TabHome() {
  return (
    <View>
      <ScrollView>
        <Header />  
        <HomeScreen  />
      </ScrollView>
    </View>
    
  );
}