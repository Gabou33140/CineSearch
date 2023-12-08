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
<ScrollView style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button title="Animés Netflix" onPress={() => handleCategorySelect('Animés Netflix')} />
        <Button title="Film Netflix" onPress={() => handleCategorySelect('Film Netflix')} />
        <Button title="Séries Netflix" onPress={() => handleCategorySelect('Séries Netflix')} />
        <Button title="Animés Amazon" onPress={() => handleCategorySelect('Animés Amazon')} />
        <Button title="Films Amazon" onPress={() => handleCategorySelect('Films Amazon')} />
        <Button title="Séries Amazon" onPress={() => handleCategorySelect('Séries Amazon')} />
        <Button title="Films à venir" onPress={() => handleCategorySelect('Films à venir')} />
        <Button title="Séries à venir" onPress={() => handleCategorySelect('Séries à venir')} />
        <Button title="Animés à venir" onPress={() => handleCategorySelect('Animés à venir')} />
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
  FirstTitleContainer: {
    marginTop: 5,
  },
  TitleContainer: {
    paddingTop: 3,
    fontWeight: 'bold',
  },
  flatListContainer: {
    height: '100%',
    overflowX: 'hidden',
  },
  flatList: {
    paddingTop: 20,
    paddingRight: 5,
    marginBottom: 100,
    overflowX: 'hidden',
  },
  flatListMarginBottom: {
    marginBottom: 5,
  },
  itemContainer: {
    margin: 0,
    width: windowWidth * 0.5,
    height: 150,
  },
  name: {
    color: 'white',
    width: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
    margin: 5,
    marginLeft: 0,
    marginRight: 10,
  },

  buttonsContainer: {
    flexDirection: 'row',
    height: 'auto',
    width: '100%',
    marginBottom: 16,
    backgroundcolor : 'green',
    maxWidth: windowWidth,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },

  button: {
    height: 40,
    borderRadius: 25,
    backgroundColor: 'white',
    color : 'white',
  },
  

  firstTitleList: {
    marginTop: 20,
  },

});

export default CatalogueScreen;




