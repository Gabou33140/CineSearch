import React from 'react';
import { FlatList, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Text } from '../components/Themed';
import { useFetchTrendingAnimatedQuery } from '../features/api';

const windowWidth = Dimensions.get('window').width;

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { data: trendingContent } = useFetchTrendingAnimatedQuery();

  return (
    <View>
      {/* Contenu de la page d'accueil, tendances, barre de recherche, etc. */}
      <Text style={styles.TitleContainer}>Tendances Animés</Text>
      <FlatList
        horizontal
        data={trendingContent}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
              style={styles.image}
            />
          </View>
        )}
        contentContainerStyle={styles.flatListContainer}
        style={styles.flatList}
      />
      <FlatList
      horizontal
      data={trendingContent}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
            style={styles.image}
          />
        </View>
      )}
      contentContainerStyle={styles.flatListContainer}
      style={styles.flatList}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  TitleContainer: {
    paddingTop: 10, // Ajoutez un espacement en haut
    fontWeight: 'bold',
  },
  flatListContainer: {
    paddingTop: 10, // Ajoutez un espacement en haut
    height: 130
  },
  flatList: {
    height: 10, // Ajustez la hauteur selon vos besoins
  },
  itemContainer: {
    margin: 5,
    width: windowWidth * 0.5, // Réduisez la largeur du conteneur
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
});

export default HomeScreen;
