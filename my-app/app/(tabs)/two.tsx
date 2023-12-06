import React from 'react';
import { FlatList, View, Image, StyleSheet, Dimensions } from 'react-native';
import { Text } from '../../components/Themed';
import { useFetchNetflixAnimatedQuery, useFetchNetflixFilmsQuery, useFetchNetflixSeriesQuery, useFetchTrendingAnimatedQuery, useFetchTrendingFilmsQuery, useFetchTrendingSeriesQuery } from '../../features/api';

const windowWidth = Dimensions.get('window').width;

interface TabTwoProps {}

const TabTwo: React.FC<TabTwoProps> = () => {
  const { data: NetflixAnimated } = useFetchNetflixAnimatedQuery();
  const { data: NetflixFilms } = useFetchNetflixFilmsQuery();
  const { data: NetflixSeries } = useFetchNetflixSeriesQuery();

  const limitedNetflixAnimated = NetflixAnimated?.slice(0, 5);
  const limitedNetflixFilms = NetflixFilms?.slice(0, 5);
  const limitedNetflixSeries = NetflixSeries?.slice(0, 5);

  return (
    <View>
      {/* Contenu de la page d'accueil, tendances, barre de recherche, etc. */}
      <Text style={[styles.TitleContainer, styles.FirstTitleContainer]}>Animés Netflix</Text>
      <FlatList
        horizontal
        data={NetflixAnimated}
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
      <Text style={styles.TitleContainer}>Films Netflix</Text>
      <FlatList
        horizontal
        data={NetflixFilms}
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
    <Text style={styles.TitleContainer}>Séries Netflix</Text>
    <FlatList
    horizontal
    data={NetflixSeries}
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

export default TabTwo;
