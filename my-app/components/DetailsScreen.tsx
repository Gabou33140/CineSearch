import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { fetchContentDetailsByIdOrFallback } from '../features/api';
import { Content } from '../types/types';

const DetailsScreen: React.FC<Content> = ({ id }: Content) => {
  // const contentDetails = fetchContentDetailsByIdOrFallback(id);
  // ... afficher les détails du contenu dans ton composant
  const navigation = useNavigation();
  return (
    <View>
      {/* Contenu de la page de détails du contenu, description, note, etc. */}
      {/* <Text>Details: {JSON.stringify(contentDetails)}</Text> */}
      <Text> page de détail lié à l'id {id}</Text>
    </View>
  );
};

export default DetailsScreen;
