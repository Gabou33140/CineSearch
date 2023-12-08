import React, { useState, useCallback } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
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
    // useFetchSearchResultsQuery({ searchTerm });
  }, [onSearch, searchTerm]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Films, séries, animés..."
        value={searchTerm}
        onChangeText={handleInputChange}
        onSubmitEditing={handleSearch}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 10,
    paddingLeft: 8,
    backgroundColor: 'white',
  },
});

export default SearchBar;
