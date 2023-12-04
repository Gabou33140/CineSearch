import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const Header = () => {
  const categories = ['Films', 'Séries', 'Animés'];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const renderDropDownMenu = () => {
    if (!selectedCategory) {
      return null;
    }

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
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/logo_cinesearch.png')} style={styles.logoImage} />
      </View>
      <View style={{ marginLeft: 16, flex: 1 }}>
        <View style={styles.headerContent}>
          <SearchBar onSearch={(searchTerm) => console.log(searchTerm)}/>
        </View>
        <View style={{ flexDirection: 'row' }}>
          {categories.map((category) => (
            <TouchableOpacity key={category} onPress={() => handleCategorySelect(category)}>
              <Text style={{ color: selectedCategory === category ? 'red' : 'white', marginRight: 16 }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderDropDownMenu()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 180,
    padding: 16,
    backgroundColor: 'black',
  },
  imageContainer: {
    width: 180,
    marginRight: 16,
  },
  logoImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover',
  },
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: 'white',
  },
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
