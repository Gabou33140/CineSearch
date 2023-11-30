import React from 'react';
import { View, Text } from 'react-native';
import { useFetchContentDetailsQuery } from '../features/api';
import { ContentDetailsResponse } from '../types/types';

interface DetailScreenProps {
  contentId: number;
  // Ajoute les éventuelles props nécessaires
}

const DetailScreen: React.FC<DetailScreenProps> = ({ contentId }) => {
  const { data: contentDetails } = useFetchContentDetailsQuery(contentId);

  return (
    <View>
      {/* Contenu de la page de détails du contenu, description, note, etc. */}
      <Text>Details: {JSON.stringify(contentDetails)}</Text>
    </View>
  );
};

export default DetailScreen;
