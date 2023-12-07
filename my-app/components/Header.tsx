import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.headerContainer}>
      
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/logo_cinesearch.jpg')} style={styles.logoImage} />
      </View>
      <View style={styles.rightContainer}>
      <View style={{ flex: 1, marginTop: 20, marginLeft: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          {categories.map((category) => (
            <TouchableOpacity key={category} onPress={() => handleCategorySelect(category)}>
              <Text style={{ color: selectedCategory === category ? 'red' : 'white', marginRight: 10, marginTop: -10, marginLeft: 15}}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.searchContainer}>
          <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
        </View>
        {renderDropDownMenu()}
      </View>
      </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  headerContainer: {
    height: '20%',
    width: '100%',
    backgroundColor: 'black',
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
  },
  imageContainer: {
    height: '100%',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  headerText: {
    fontSize: 16,
    color: 'white',
  },
  dropDownMenu: {
    backgroundColor: 'yellow',
  },
  dropDownMenuItem: {
    fontSize: 16,
  },

  rightContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Header;
