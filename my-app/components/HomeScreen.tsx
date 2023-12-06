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
  console.log(trendingFilms)
  return (
    <ScrollView>
      <CustomList
        data={trendingAnimated || []}
        title="Tendances Animés"
        stylePropTitleList={styles.firstTitleList}
      />
      <CustomList
        data={trendingFilms || []}
        title="Tendances Films"
      />
      <CustomList 
        data={trendingSeries || []}
        title="Tendances Séries" 
        stylePropFlatList={styles.lastList}
      />

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  firstTitleList: {
    marginTop: 20,  // Ajustez la marge inférieure pour réduire l'espacement entre les FlatList
  },
  lastList: {
    marginBottom: 0,  // Ajustez la marge inférieure pour réduire l'espacement entre les FlatList
  },
});
