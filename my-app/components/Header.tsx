import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SearchBar  from '../components/SearchBar'
import handleSearch  from '../components/SearchBar'



interface HeaderProps {
  // Ajoute les éventuelles props nécessaires
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <View>
   <div>
      <h1>Mon Application React avec Barre de Recherche</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
    </View>
  );
};

export default Header;