import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchResults from './SearchResults';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (text: string) => {
    setSearchTerm(text);
  };

  const handleSearch = () => {
    console.log(searchTerm);
    <SearchResults SearchTerm={searchTerm}/>
  };

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
  },
});

export default SearchBar;
