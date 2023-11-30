import React from 'react';
import { View, Text } from 'react-native';
import { useFetchTrendingContentQuery } from '../features/api';
import { TrendingContentResponse } from '../types/types';

interface HomeScreenProps {
  // Ajoute les éventuelles props nécessaires
}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { data: trendingContent } = useFetchTrendingContentQuery('films');

  return (
    <View>
      {/* Contenu de la page d'accueil, tendances, barre de recherche, etc. */}
      <Text>Tendances Films: {JSON.stringify(trendingContent)}</Text>
    </View>
  );
};

export default HomeScreen;