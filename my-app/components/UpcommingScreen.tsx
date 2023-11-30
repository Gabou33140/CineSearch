import React from 'react';
import { View, Text } from 'react-native';
import { useFetchUpcomingContentQuery } from '../features/api';
import { UpcomingContentResponse } from '../types/types';

interface UpcomingScreenProps {
  // Ajoute les éventuelles props nécessaires
}

const UpcomingScreen: React.FC<UpcomingScreenProps> = () => {
  const { data: upcomingContent } = useFetchUpcomingContentQuery('films');

  return (
    <View>
      {/* Contenu de la page des futures sorties, liste des nouveaux films par mois, barre de recherche, etc. */}
      <Text>Upcoming Films: {JSON.stringify(upcomingContent)}</Text>
    </View>
  );
};

export default UpcomingScreen;
