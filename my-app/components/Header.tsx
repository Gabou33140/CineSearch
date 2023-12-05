import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import SearchBar from '../components/SearchBar';

  const windowWidth = Dimensions.get('window').width;

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

    
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/logo_cinesearch.png')} style={styles.logoImage} />
      </View>
      <View style={{ flex: 1, marginTop: 40, marginLeft: 20 }}>
        <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} style={styles.searchBar} />
        <View style={{ flexDirection: 'row' }}>
          {categories.map((category) => (
            <TouchableOpacity key={category} onPress={() => handleCategorySelect(category)}>
              <Text style={{ color: selectedCategory === category ? 'red' : 'white', marginRight: 16, marginTop: 20, marginLeft: 15 }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {renderDropDownMenu()}
      </View>
    </View>
  );

  // return (
  //   <View style={styles.dropDownMenu}>
  //     <FlatList
  //       data={['Netflix', 'Prime Vidéo', 'Tous', 'A venir']}
  //       keyExtractor={(item) => item}
  //       renderItem={({ item }) => (
  //         <TouchableOpacity onPress={() => console.log(`Selected: ${item}`)}>
  //           <Text style={styles.dropDownMenuItem}>{item}</Text>
  //         </TouchableOpacity>
  //       )}
  //     />
  //   </View>
  // );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 160,
    width: '100%',
    backgroundColor: 'black',
  },
  imageContainer: {
    height: 130,
    width: windowWidth * 0.3,
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    // resizeMode: 'overlay', n'existe pas ! 
    resizeMode: 'cover',
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

  searchBar: {
    backgroundColor: 'white',
  },
});

export default Header;
