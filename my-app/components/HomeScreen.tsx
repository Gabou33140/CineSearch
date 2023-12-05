import React from 'react';
import { FlatList, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Text } from '../components/Themed';
import { useFetchTrendingAnimatedQuery, useFetchTrendingFilmsQuery, useFetchTrendingSeriesQuery } from '../features/api';

const windowWidth = Dimensions.get('window').width;

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { data: trendingAnimated } = useFetchTrendingAnimatedQuery();
  const { data: trendingFilms } = useFetchTrendingFilmsQuery();
  const { data: trendingSeries } = useFetchTrendingSeriesQuery();

  return (
    <View>
      {/* Contenu de la page d'accueil, tendances, barre de recherche, etc. */}
      <Text style={[styles.TitleContainer, styles.FirstTitleContainer]}>Tendances Animés</Text>
      <FlatList
        horizontal
        data={trendingAnimated}
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
        style={[styles.flatList, styles.flatListMarginBottom]}
      />
      <Text style={styles.TitleContainer}>Tendances Films</Text>
      <FlatList
      horizontal
      data={trendingFilms}
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
      style={[styles.flatList, styles.flatListMarginBottom]}
    />
    <Text style={styles.TitleContainer}>Tendances Séries</Text>
    <FlatList
    horizontal
    data={trendingSeries}
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
  FirstTitleContainer: {
    marginTop: 20,
  },
  TitleContainer: {
    paddingTop: 10, // Ajoutez un espacement en haut
    fontWeight: 'bold',
  },
  flatListContainer: {
    height: 130
  },
  flatList: {
    paddingTop: 10, // Ajoutez un espacement en haut
    height: 10, // Ajustez la hauteur selon vos besoins
    marginBottom: 100,
  },
  flatListMarginBottom: {
    marginBottom: 0,  // Ajustez la marge inférieure pour réduire l'espacement entre les FlatList
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
