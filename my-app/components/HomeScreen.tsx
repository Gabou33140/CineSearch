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
  console.log(trendingFilms)
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
            <Text style={styles.name}>{item.name}</Text>
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
            <Text style={styles.name}>{item.name}</Text>
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
        <Text style={styles.name}>{item.name}</Text>
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
    marginTop: 5,
  },
  TitleContainer: {
    paddingTop: 3, // Ajoutez un espacement en haut
    fontWeight: 'bold',
  },
  flatListContainer: {
    height: '100%',
    overflowX: 'hidden',
  },
  flatList: {
    paddingTop: 5, // Ajoutez un espacement en haut
    paddingRight: 5, // Ajoutez un espacement à droite
    marginBottom: 100,
    overflowX: 'hidden', // Masquer les éléments qui dépassent de la zone visible
  },
  flatListMarginBottom: {
    marginBottom: 5,  // Ajustez la marge inférieure pour réduire l'espacement entre les FlatList
  },
  itemContainer: {
    //position: 'relative',
    margin: 0,
    width: windowWidth * 0.5, // Réduisez la largeur du conteneur
    height: 150,
  },
  name: {
    color: 'white',
    width: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
    margin: 5,
    marginLeft: 0,
    marginRight: 10,
  },
});

export default HomeScreen;
