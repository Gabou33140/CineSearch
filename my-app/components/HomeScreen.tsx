import React from 'react';
import {  StyleSheet, ScrollView } from 'react-native';
import { useFetchTrendingAnimatedQuery, useFetchTrendingFilmsQuery, useFetchTrendingSeriesQuery } from '../features/api';
import CustomList from './CustomList';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { data: trendingAnimated } = useFetchTrendingAnimatedQuery();
  const { data: trendingFilms } = useFetchTrendingFilmsQuery();
  const { data: trendingSeries } = useFetchTrendingSeriesQuery();

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
    marginTop: 20,
  },
  lastList: {
    marginBottom: 0,
  },
});
