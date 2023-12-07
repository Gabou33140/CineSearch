import React from 'react';
import HomeScreen from '../../../components/HomeScreen';
import { View } from '../../../components/Themed';
import { ScrollView , StyleSheet} from 'react-native';
import Header from '../../../components/Header';

export default function TabHome() {
  return (
    <View  style={styles.AllscreenContainer}>
        <Header /> 
      <ScrollView>        
        <HomeScreen  />
      </ScrollView>
    </View>
    
  );
}
  const styles = StyleSheet.create({
    AllscreenContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  });
