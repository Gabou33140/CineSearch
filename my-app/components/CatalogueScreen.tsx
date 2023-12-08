import React, { useState } from 'react';
import {  View, StyleSheet, Dimensions, Button, ActivityIndicator } from 'react-native';
import CustomList from './CustomList';
import { ScrollView } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;

interface CatalogueScreenProps {}

const CatalogueScreen: React.FC<CatalogueScreenProps> = () => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  
  

  const categories = ['Animés Netflix', 'Film Netflix', 'Séries Netflix', 'Animés Amazon' , 'Films Amazon', 'Séries Amazon', 'Tout les animés', 'Tout les films', 'Toutes les séries', 'Films à venir', 'Séries à venir', 'Animés à venir'];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };



  return (
<ScrollView>
      <View style={styles.allButtonsContainer}>

      <View style={styles.buttonsSeriesContainer}>
        <Button title="Séries Netflix" onPress={() => handleCategorySelect('Séries Netflix')} />
        <Button title="Séries Amazon" onPress={() => handleCategorySelect('Séries Amazon')} />
        <Button title="Séries à venir" onPress={() => handleCategorySelect('Séries à venir')} />    
        <Button title="Film Netflix" onPress={() => handleCategorySelect('Film Netflix')} />
        <Button style = {styles.button} title="Films Amazon" onPress={() => handleCategorySelect('Films Amazon')} />
        <Button title="Films à venir" onPress={() => handleCategorySelect('Films à venir')} />
        <Button title="Animés Netflix" onPress={() => handleCategorySelect('Animés Netflix')} />
        <Button title="Animés Amazon" onPress={() => handleCategorySelect('Animés Amazon')} />     
      </View>
      </View>

      <ScrollView>
        <CustomList
          categorie={selectedCategory ?? undefined}
          title={selectedCategory ?? ''}
          stylePropTitleList={styles.firstTitleList}
        />
      </ScrollView>

    </ScrollView>
  );
};

  

const styles = StyleSheet.create({
  
  allButtonsContainer: {
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
    backgroundcolor : 'green',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  buttonsSeriesContainer: {
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
    backgroundcolor : 'green',
    justifyItems: 'center',
    flexWrap: 'wrap',
  },

  buttonsFilmsContainer: {
    flexDirection: 'row',
    height: 'auto',
    width: '30%',
    backgroundcolor : 'green',
    justifyItems: 'left',
    flexWrap: 'wrap',
  },

  buttonsAnimatedContainer: {
    flexDirection: 'row',
    height: 'auto',
    width: '30%',
    backgroundcolor : 'green',
    justifyItems: 'left',
    flexWrap: 'wrap',
  },

  button: {
    height: 40,
    borderRadius: 25,
    backgroundColor: 'white',
    color : 'black',
  },
  

  firstTitleList: {
    marginTop: 20,
  },

});

export default CatalogueScreen;




