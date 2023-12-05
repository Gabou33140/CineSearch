import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Text } from '../components/Themed';
import { useFetchTrendingAnimatedQuery, useFetchTrendingFilmsQuery, useFetchTrendingSeriesQuery } from '../features/api';
import CustomList from './CustomList';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { data: trendingAnimated } = useFetchTrendingAnimatedQuery();
  const { data: trendingFilms } = useFetchTrendingFilmsQuery();
  const { data: trendingSeries } = useFetchTrendingSeriesQuery();
  return (
    <ScrollView>
      {/* Contenu de la page d'accueil, tendances, barre de recherche, etc. */}
      <CustomList data={trendingAnimated || []} title="Tendances Animés" />
      <CustomList data={trendingFilms || []} title="Tendances Films" />
      <CustomList data={trendingSeries || []} title="Tendances Séries" />
    </ScrollView>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({
//   BetweenFlatLists: {marginBottom: 50
// }
// });