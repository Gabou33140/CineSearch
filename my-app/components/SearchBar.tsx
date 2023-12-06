import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useFetchSearchResultsQuery } from '../features/api';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (text: string) => {
    setSearchTerm(text);
  };

  const handleSearch = useCallback(() => {
    onSearch(searchTerm);
    // Assurez-vous que useFetchSearchResultsQuery est utilisé correctement dans votre composant
    // useFetchSearchResultsQuery({ searchTerm });
  }, [onSearch, searchTerm]);

  return (
    <View>
      <TextInput
        placeholder="Rechercher..."
        value={searchTerm}
        onChangeText={handleInputChange}
        style={styles.input}
      />
      <Button title="Rechercher" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default SearchBar;
