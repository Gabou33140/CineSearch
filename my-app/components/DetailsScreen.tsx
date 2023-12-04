import React from 'react';
import { View, Text } from 'react-native';
import { fetchContentDetailsByIdOrFallback } from '../features/api';
import { Content } from '../types/types';


const ContentDetailScreen: React.FC<Content> = ({ id }: Content) => {
  const contentDetails = fetchContentDetailsByIdOrFallback(id);
  // ... afficher les détails du contenu dans ton composant
  return (
    <View>
      {/* Contenu de la page de détails du contenu, description, note, etc. */}
      <Text>Details: {JSON.stringify(contentDetails)}</Text>
    </View>
  );
};

export default ContentDetailScreen;
