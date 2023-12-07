// (tabs)/details.tsx
import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Header from '../../../components/Header';
import DetailsScreen from '../../../components/DetailsScreen';

interface TabDetailsProps {
  route: { params?: { id?: number } };
}

const TabDetails: React.FC<TabDetailsProps> = ({ route }) => {
  const id = route.params?.id ?? 0;

  return (
    <View>
      <ScrollView>
        <Header />
        <DetailsScreen id={id} />
      </ScrollView>
    </View>
  );
};

export default TabDetails;
