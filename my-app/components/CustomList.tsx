// CustomList.tsx
import React from 'react';
import { FlatList, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../components/Themed';

const windowWidth = Dimensions.get('window').width;

interface CustomListProps {
  data: any[]; // Remplacez any par le type correct de vos données
  title: string;
}

const CustomList: React.FC<CustomListProps> = ({ data, title }) => {
  const navigation = useNavigation();

//   const navigateToDetail = (itemId: number) => {
//     navigation.navigate('Detail', { itemId });
//   };

  return (
    <>
      <Text style={[styles.TitleContainer, styles.FirstTitleContainer]}>{title}</Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        //   <TouchableWithoutFeedback onPress={() => navigateToDetail(item.id)}>
            <View style={styles.itemContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
                style={styles.image}
              />
            </View>
        //   </TouchableWithoutFeedback>
        )}
        contentContainerStyle={styles.flatListContainer}
        style={styles.flatList}
      />
    </>
  );
};

const styles = StyleSheet.create({
  FirstTitleContainer: {
    marginTop: 20,
  },
  TitleContainer: {
    paddingTop: 10,
    fontWeight: 'bold',
  },
  flatListContainer: {
    height: 130,
  },
  flatList: {
    paddingTop: 10,
    marginBottom: 0,
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
