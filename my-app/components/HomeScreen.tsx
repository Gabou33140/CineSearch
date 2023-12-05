import React from 'react';
import { FlatList, View } from 'react-native';
import { Text } from '../components/Themed';
import { useFetchTrendingAnimatedQuery } from '../features/api';


interface HomeScreenProps {
  // Ajoute les éventuelles props nécessaires
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { data: trendingContent } = useFetchTrendingAnimatedQuery();

  return (
    <View>
      {/* Contenu de la page d'accueil, tendances, barre de recherche, etc. */}
    {/* <Text>Tendances Films: {JSON.stringify(trendingContent)}</Text> */}
    <FlatList
      data={trendingContent}
      renderItem={({ item }) => <Text>{item.name} ({item.} episodes)</Text>}
    ></FlatList>
    <Text>Tendances Films</Text>
    </View>
  );
};

export default HomeScreen;