import React from 'react';
import { FlatList, View, Image, Dimensions, StyleSheet } from 'react-native';
import { Text } from '../components/Themed';
import { useFetchTrendingAnimatedQuery } from '../features/api';
import { MinimalContent } from '../types/types'; // Add this import


interface HomeScreenProps {
  // Ajoute les éventuelles props nécessaires
}

const windowWidth = Dimensions.get('window').width;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { data: trendingContent } = useFetchTrendingAnimatedQuery();

  return (
    <View>
      {/* Contenu de la page d'accueil, tendances, barre de recherche, etc. */}
      {/* <Text>Tendances Films: {JSON.stringify(trendingContent)}</Text> */}
      <FlatList
      horizontal
        data={trendingContent}
        renderItem={({ item }: { item: MinimalContent }) => ( // Specify the type of 'item'
          <>
            <Text>{item.name}</Text>
            <Image
             source={{uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`}}
             style={styles.image}/>
          </>
        )}
      />
      <Text>Tendances Films</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop: 10,
    height: 200,
  },

  itemContainer: {

    margin: 0,
    width: windowWidth * 0.2,

  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
});

export default HomeScreen;