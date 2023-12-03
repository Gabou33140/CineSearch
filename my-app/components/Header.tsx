import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      // Désélectionne la catégorie si elle est déjà sélectionnée
      setSelectedCategory(null);
    } else {
      // Sélectionne la catégorie si elle n'est pas déjà sélectionnée
      setSelectedCategory(category);
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: 'black' }}>
      <Image source={require('../assets/images/logo_cinesearch.png')} style={{ width: 32, height: 32 }} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => handleCategorySelect('Films')}>
          <Text style={{ color: selectedCategory === 'Films' ? 'red' : 'white', marginRight: 16 }}>Films</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategorySelect('Séries')}>
          <Text style={{ color: selectedCategory === 'Séries' ? 'red' : 'white', marginRight: 16 }}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCategorySelect('Animés')}>
          <Text style={{ color: selectedCategory === 'Animés' ? 'red' : 'white' }}>Animés</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
