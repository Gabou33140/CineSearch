import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useFetchContentDetailsByIdQuery } from '../features/api';
import { Text} from '../components/Themed';
import { Film, Series, Animated } from '../types/types';

interface ContentDetailsProps {
  id: number;
}

interface DisplayDetailsProps {
  contentType: 'tv' | 'movie';
  content: Film | Series | Animated;
}

const ContentDetails: React.FC<ContentDetailsProps> = ({ id }) => {
  const { data: dataMovie, isLoading: isMovieLoading } = useFetchContentDetailsByIdQuery({ id: id, contentType: 'movie' });
  const { data: dataSeries, isLoading: isTVLoading }= useFetchContentDetailsByIdQuery({ id: id, contentType: 'tv' });
  // Render les détails du contenu dans votre composant
  return (
    <View>
      {isMovieLoading || isTVLoading ? (
        <Text>Chargement...</Text>
      ) : (
        console.log(dataMovie || dataSeries),
        <View>
          <Text> bonjour </Text>
          {/* <Text>{dataMovie ? <DisplayDetails contentType: 'movie' /> : ''}</Text>
          <Text>{dataSeries ? <DisplayDetails contentType: 'tv' /> : ''}</Text> */}
          <Text>{(dataSeries as Series)?.nbrSeason || ''}</Text>
          <Text>{ !dataSeries && !dataMovie ? 'Aucuns détails disponibles' : ''}</Text>

        </View>
      )}
    </View>
  );
};


// const DisplayDetails: React.FC<DisplayDetailsProps> = ({ contentType, content }) => {
//   return (
//     <ScrollView>
//       <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
//         {contentType === 'tv' ? 'Animés' : 'Films'}
//       </Text>
//       <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
//         {content.name}
//       </Text>
//       <Image
//         source={{ uri: content.poster_path || '' }}
//         style={{ width: '100%', height: 300, resizeMode: 'cover', marginBottom: 10 }}
//       />
//       <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
//         <Text style={{ fontSize: 16, marginBottom: 10 }}>{content.synopsis}</Text>
//         {contentType === 'tv' && (
//           <>
//             <Text style={{ fontSize: 16, marginBottom: 10 }}>
//               Nombre de saisons: {(content as Series).number_of_seasons}
//             </Text>
//             <Text style={{ fontSize: 16, marginBottom: 10 }}>
//               Nombre d'épisodes: {(content as Series).number_of_episodes}
//             </Text>
//           </>
//         )}
//         {contentType === 'movie' && (
//           <Text style={{ fontSize: 16, marginBottom: 10 }}>
//             Durée: {(content as Film).duration} minutes
//           </Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

export default ContentDetails;
