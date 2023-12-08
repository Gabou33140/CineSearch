import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { useFetchContentDetailsByIdQuery } from '../features/api';
import { Text } from '../components/Themed';
import { Film, Series } from '../types/types';

interface ContentDetailsProps {
  id: number;
  contentType: string;
}

interface DisplayDetailsProps {
  contentType: string;
  content: Film | Series | undefined;
}

const ContentDetails: React.FC<ContentDetailsProps> = ({ id, contentType }) => {
  const { data: data, isLoading: isLoading } = useFetchContentDetailsByIdQuery({ id: id, contentType: contentType });
  return (
    <View>
      {isLoading ? (
        <Text>Chargement...</Text>
      ) : (
        <View>

            <DisplayDetails contentType={contentType} content={data} />
             <Text>: Aucuns détails disponibles</Text>

        </View>
      )}
    </View>
  );
};


const DisplayDetails: React.FC<DisplayDetailsProps> = ({ contentType, content }) => {
  const fxlabelContentType = (contentType: string) => {
    if (contentType === 'tv') {
      const genreIsAnimation = content?.genre.some((genre) => genre.id === 16);
      if (genreIsAnimation) {
        return "Animé";
      } else {
        return "Série";
      }
    } else {
      return "Film"
    }
  }
  var labelContentType = fxlabelContentType(contentType)

  return (
    <ScrollView>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 }}>
        {labelContentType}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        {content?.name}
      </Text>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original/${content?.poster_path}` }}
        style={{ width: '100%', height: 300, resizeMode: 'cover', marginBottom: 10 }}
      />
      <View style={{ marginHorizontal: 20, marginBottom: 10 }}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>{content?.synopsis}</Text>
        {labelContentType === 'Serie' && (
          <>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Nombre de saisons: {(content as Series).nbrSeason}
            </Text>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Nombre d'épisodes: {(content as Series).nbrEpisode}
            </Text>
          </>
        )}
        {/* {labelContentType === 'Film' && (
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Durée: {(content as Film).duration} minutes
          </Text>
        )} */}
      </View>
    </ScrollView>
  );
};

export default ContentDetails;
