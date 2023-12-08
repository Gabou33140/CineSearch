import React from 'react';
import { ScrollView, View } from 'react-native';
import { useFetchSearchResultsQuery, useFetchContentDetailsByIdQuery } from '../features/api';
import { Text } from '../components/Themed';

type SearchProps = {
    SearchTerm : string
};


const SearchResults: React.FC<SearchProps> = ({ SearchTerm }) => {
    console.log("FLAG")
    
    // const { data: associatedResults, isLoading: isResultsLoading } = useFetchSearchResultsQuery({ searchTerm: SearchTerm });
    
    // const movieId = associatedResults?.results[0].id || 0;
    // const { data: dataMovie, isLoading: isMovieLoading } = useFetchContentDetailsByIdQuery({ id: movieId, contentType: 'movie' });
    
    // const serieId = associatedResults?.results[0].id || 0;
    // const { data: dataSeries, isLoading: isTVLoading } = useFetchContentDetailsByIdQuery({ id: serieId, contentType: 'tv' });
    
    return (
      // <View>
      //   {isResultsLoading ? (
      //     <Text>Chargement des résultats</Text>
      //   ) : (
      //     <ScrollView>
      //       {associatedResults ? (
      //         <>
      //           <Text style={{ fontSize: 5, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
      //             {associatedResults.results[0].name}
      //           </Text>
      //           <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
      //             <Text style={{ fontSize: 16, marginBottom: 10 }}>
      //               {isMovieLoading || isTVLoading ? 
      //                'Chargement du synopsis...' :
      //                 dataMovie?.synopsis?.split(".")[0] || dataSeries?.synopsis?.split(".")[0] || 'Aucun synopsis disponible'}
      //             </Text>
      //           </View>
      //         </>
      //       ) : (
      //         <Text>Aucuns détails disponibles</Text>
      //       )}
      //     </ScrollView>
      //   )}
      // </View>
      true
      )
  };
  
  export default SearchResults;
  