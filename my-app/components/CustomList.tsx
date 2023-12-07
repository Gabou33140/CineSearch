// CustomList.tsx
import React, { useEffect } from 'react';
import { FlatList, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, View, ViewStyle, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { Text } from '../components/Themed';
import { Animated, Film, MinimalContent, Series } from '../types/types';
import { useLazyFetchAmazonAnimatedQuery, useLazyFetchAmazonFilmsQuery, useLazyFetchAmazonSeriesQuery, useLazyFetchNetflixAnimatedQuery, useLazyFetchNetflixFilmsQuery, useLazyFetchNetflixSeriesQuery, useLazyFetchUpcomingAnimatedQuery, useLazyFetchUpcomingFilmsQuery, useLazyFetchUpcomingSeriesQuery } from '../features/api';

const windowWidth = Dimensions.get('window').width;

export type RootStackParamList = {
  DetailsScreen: { id: number } | undefined;
};

interface CustomListProps {
  data?: Film[] | Animated[] | Series[] | MinimalContent[] | undefined;
  title: string;
  stylePropFlatList?: ViewStyle;
  stylePropTitleList?: ViewStyle;
  categorie?: string;
}
const CustomList: React.FC<CustomListProps> = ({ data, title, stylePropFlatList, stylePropTitleList, categorie}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [triggerNetflixFilms, { data: NetflixFilms } ] = useLazyFetchNetflixFilmsQuery()
  const [triggerAmazonFilms, { data: AmazonFilms } ] = useLazyFetchAmazonFilmsQuery()
  const [triggerUpcomingFilms, { data: UpcomingFilms } ] = useLazyFetchUpcomingFilmsQuery()
  const [triggerNetflixSeries, { data: NetflixSeries } ] = useLazyFetchNetflixSeriesQuery()
  const [triggerAmazonSeries, { data: AmazonSeries } ] = useLazyFetchAmazonSeriesQuery()
  const [triggerUpcomingSeries, { data: UpcomingSeries } ] = useLazyFetchUpcomingSeriesQuery()
  const [triggerNetflixAnimated, { data: NetflixAnimated } ] = useLazyFetchNetflixAnimatedQuery()
  const [triggerAmazonAnimated, { data: AmazonAnimated } ] = useLazyFetchAmazonAnimatedQuery()
  const [triggerUpcomingAnimated, { data: UpcomingAnimated } ] = useLazyFetchUpcomingAnimatedQuery()

  const [isPageLoading, setIsPageLoading] = React.useState(false);
  const navigateToDetail = (id: number) => {
    navigation.navigate('details', { id });
  };

  useEffect(() => {
    if (!categorie) return
    if (categorie === 'Films Amazon') {
    setIsPageLoading(true)

      triggerAmazonFilms().then(() => setIsPageLoading(false))
    }
    if (categorie === 'Film Netflix') {
    setIsPageLoading(true)

      triggerNetflixFilms().then(() => setIsPageLoading(false))
    }

    if (categorie === 'Films à venir') {
      setIsPageLoading(true)
  
        triggerUpcomingFilms().then(() => setIsPageLoading(false))
    }

    if (categorie === 'Séries Amazon') {
      setIsPageLoading(true)
  
        triggerAmazonSeries().then(() => setIsPageLoading(false))
    }

    if (categorie === 'Séries Netflix') {
      setIsPageLoading(true)
  
        triggerNetflixSeries().then(() => setIsPageLoading(false))
    }

    if (categorie === 'Séries à venir') {
      setIsPageLoading(true)
  
        triggerUpcomingSeries().then(() => setIsPageLoading(false))
    }

    if (categorie === 'Animés Netflix') {
      setIsPageLoading(true)
  
        triggerNetflixAnimated().then(() => setIsPageLoading(false))
    }

    if (categorie === 'Animés Amazon') {
      setIsPageLoading(true)
  
        triggerAmazonAnimated().then(() => setIsPageLoading(false))
    }

    if (categorie === 'Animés à venir') {
      setIsPageLoading(true)
  
        triggerUpcomingAnimated().then(() => setIsPageLoading(false))
    }

  }, [categorie])

  const chooseCorrectData = (categorie: string | undefined) => {
    if (!categorie) return data
    if (categorie === 'Film Netflix') {
      return NetflixFilms
    }
    if (categorie === 'Films Amazon') {
      return AmazonFilms
    }
    if (categorie === 'Films à venir') {
      return UpcomingFilms
    }

    if (categorie === 'Séries Netflix') {
      return NetflixSeries
    }

    if (categorie === 'Séries Amazon') {
      return AmazonSeries
    }

    if (categorie === 'Séries à venir') {
      return UpcomingSeries
    }

    if (categorie === 'Animés Netflix') {
      return NetflixAnimated
    }

    if (categorie === 'Animés Amazon') {
      return AmazonAnimated
    }

    if (categorie === 'Animés à venir') {
      return UpcomingAnimated
    }


    return []
  }

  return isPageLoading ? <ActivityIndicator /> : (
    <>
      <Text style={[styles.TitleContainer, stylePropTitleList]}>{title}</Text>
      <FlatList
        horizontal
        data={chooseCorrectData(categorie) as any}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          console.log(item, 'item')
          return(
          <TouchableWithoutFeedback onPress={() => navigateToDetail(item.id)}>
            <View style={styles.flatListContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
                style={styles.image}
              />
            </View>
        </TouchableWithoutFeedback>)
        }}
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