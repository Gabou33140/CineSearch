// (tabs)/details.tsx
import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Header from '../../../components/Header';
import DetailsScreen from '../../../components/DetailsScreen';

interface TabDetailsProps {
  route: { params?: { id?: number, contentType?:string } };
}

const TabDetails: React.FC<TabDetailsProps> = ({ route }) => {

  const id = route.params?.id ?? 0;
  const contentType = route.params?.contentType ?? "";
  console.log(id + " " + contentType)
  return (
    <View>
      <ScrollView>
        <Header />
        <DetailsScreen id={id} contentType={contentType} />
      </ScrollView>
    </View>
  );
};

export default TabDetails;
