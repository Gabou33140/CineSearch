import React from 'react';
import { View, Text } from 'react-native';
import { useFetchCatalogueContentQuery } from '../features/api';
import { CatalogueContentResponse } from '../types/types';

interface CatalogueScreenProps {
  // Ajoute les éventuelles props nécessaires
}

const CatalogueScreen: React.FC<CatalogueScreenProps> = () => {
  const { data: catalogueContent } = useFetchCatalogueContentQuery({ contentType: 'films', streamingService: 'Netflix' });

  return (
    <View>
      {/* Contenu de la page de catalogue, liste des films par mois, barre de recherche, etc. */}
      <Text>Catalogue Films Netflix: {JSON.stringify(catalogueContent)}</Text>
    </View>
  );
};

export default CatalogueScreen;
