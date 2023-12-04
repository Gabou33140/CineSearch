import React, { useState, useCallback } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import SearchBar  from '../components/SearchBar'
import handleSearch  from '../components/SearchBar'
import { SearchBarProps } from 'react-native-screens';



const Header = () => {
  const categories = ['Films', 'Séries', 'Animés'];
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category: string) => {
    if (selectedCategory === category) {
      // Désélectionne la catégorie si elle est déjà sélectionnée
      setSelectedCategory(null);
    } else {
      // Sélectionne la catégorie si elle n'est pas déjà sélectionnée
      setSelectedCategory(category as unknown as null);
    }
  };

  const renderDropDownMenu = () => {
    if (!selectedCategory) {
      return null;
    }

    // Vous pouvez personnaliser le contenu du menu déroulant ici
    // Pour l'instant, nous utilisons une simple FlatList de démonstration
    return (
      <View style={styles.dropDownMenu}>
        <FlatList
          data={['Netflix', 'Prime Vidéo', 'Tous', 'A venir']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log(`Selected: ${item}`)}>
              <Text style={styles.dropDownMenuItem}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };

  return (
    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', padding: 16, backgroundColor: 'black' }}>
      <div>
        <h1>Mon Application React avec Barre de Recherche</h1>
        <SearchBar onSearch={(searchTerm: string) => console.log(searchTerm)} />
      </div>
      <Image source={require('../assets/images/logo_cinesearch.png')} style={{ width: 32, height: 32, marginBottom: 16 }} />
      <View style={{ flexDirection: 'row' }}>
        {categories.map((category) => (
          <TouchableOpacity key={category} onPress={() => handleCategorySelect(category)}>
            <Text style={{ color: selectedCategory === category ? 'red' : 'white', marginRight: 16 }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderDropDownMenu()}
      </View>
  );
};

const styles = StyleSheet.create({
  dropDownMenu: {
    position: 'absolute',
    top: 80,
    left: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    padding: 8,
  },
  dropDownMenuItem: {
    fontSize: 16,
    paddingVertical: 8,
  },
});

export default Header;
