import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { useFetchContentDetailsByIdQuery } from '../features/api';
import { Text} from '../components/Themed';
import { Film, Series } from '../types/types';

interface ContentDetailsProps {
  id: number;
}

interface DisplayDetailsProps {
  contentType: 'Serie' | 'Film' | 'Animé';
  content: Film | Series | undefined ;
}

const ContentDetails: React.FC<ContentDetailsProps> = ({ id }) => {
  const { data: dataMovie, isLoading: isMovieLoading } = useFetchContentDetailsByIdQuery({ id: id, contentType: 'movie' });
  const { data: dataSeries, isLoading: isTVLoading }= useFetchContentDetailsByIdQuery({ id: id, contentType: 'tv' });
  // Render les détails du contenu dans votre composant

  console.log(id);
  return (
    <View>
      {isMovieLoading || isTVLoading ? (
        <Text>Chargement...</Text>
      ) : (
        <View>

          {dataMovie || dataSeries ? 
          <DisplayDetails contentType={dataMovie ? 'Film' : 'Serie'} content={dataMovie || dataSeries} /> 
          : <Text>Aucuns détails disponibles</Text>}

        </View>
      )}
    </View>
  );
};


const DisplayDetails: React.FC<DisplayDetailsProps> = ({ contentType, content }) => {

  if (contentType === 'Serie') {
    const genreIsAnimation = content?.genre.some((genre) => genre.id === 16);
    if (genreIsAnimation) {
      contentType = "Animé";
    }
  else
    contentType = "Film"
  }


  return (
    <ScrollView>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
        {contentType}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        {content?.name}
      </Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original/${content?.poster_path}`}}
        style={{ width: '100%', height: 300, resizeMode: 'cover', marginBottom: 10 }}
      />
      <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>{content?.synopsis}</Text>
        {contentType === 'Serie' && (
          <>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Nombre de saisons: {(content as Series).nbrSeason}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Nombre d'épisodes: {(content as Series).nbrEpisode}
            </Text>
          </>
        )}
        {contentType === 'Film' && (
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Durée: {(content as Film).duration} minutes
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ContentDetails;
