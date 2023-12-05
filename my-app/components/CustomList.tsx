// CustomList.tsx
import React from 'react';
import { FlatList, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { Text } from '../components/Themed';

const windowWidth = Dimensions.get('window').width;

export type RootStackParamList = {
  DetailsScreen: { id: number } | undefined;
};

interface CustomListProps {
  data: any[];
  title: string;
  stylePropFlatList?: ViewStyle;
  stylePropTitleList?: ViewStyle;
}
const CustomList: React.FC<CustomListProps> = ({ data, title, stylePropFlatList, stylePropTitleList}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const navigateToDetail = (id: number) => {
    navigation.navigate('DetailsScreen', { id });
  };

  return (
    <>
      <Text style={[styles.TitleContainer, stylePropTitleList]}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => navigateToDetail(item.id)}>
            <View style={styles.flatListContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
                style={styles.image}
              />
            </View>
        </TouchableWithoutFeedback>
        )}
        contentContainerStyle={styles.flatListContainer}
        style={[styles.flatList, styles.flatListMarginBottom, stylePropFlatList]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    // color: 'black',
    width: '100%',
  },
  TitleContainer: {
    paddingTop: 10,
    fontWeight: 'bold',
  },
  flatListContainer: {
    height: 130,
    overflowX: 'hidden',
  },
  flatList: {
    paddingTop: 5, // Ajoutez un espacement en haut
    marginBottom: 100,
    overflowX: 'hidden', // Masquer les éléments qui dépassent de la zone visible
  },
  flatListMarginBottom: {
    marginBottom: 20,  // Ajustez la marge inférieure pour réduire l'espacement entre les FlatList
  },
  itemContainer: {
    margin: 5,
    width: windowWidth * 0.5,
  },
  image: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
});

export default CustomList;