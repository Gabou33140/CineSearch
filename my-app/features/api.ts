import { FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import  { Film, Series, Animated, StreamingService, Content, MinimalContent } from "../types/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchTrendingSeries: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&without_genres=16`,
      transformResponse: (response: {results: Series[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Series) => ({
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchTrendingFilms: builder.query<MinimalContent[], void>({
      query: () => `trending/movie/week?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR`,
      transformResponse: (response: {results: Film[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        // console.log(response.results)
        return response.results.map((Film) => ({
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchTrendingAnimated: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=16`,
      transformResponse: (response: {results: Animated[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Animated) => ({
          id: Animated.id,
          name: Animated.name,
          poster_path: Animated.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchAmazonFilms: builder.query<MinimalContent[], void>({
      query: () => `discover/movie?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=119&watch_region=FR`,
      transformResponse: (response: {results: Film[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Film) => ({
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchNetflixFilms: builder.query<MinimalContent[], void>({
      query: () => `discover/movie?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=8&watch_region=FR`,
      transformResponse: (response: {results: Film[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Film) => ({
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchAmazonSeries: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_watch_providers=119&without_genres=16`,
      transformResponse: (response: {results: Series[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Series) => ({
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchNetflixSeries: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_watch_providers=8&without_genres=16`,
      transformResponse: (response: {results: Series[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Series) => ({
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchAmazonAnimated: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&with_watch_providers=119&watch_region=FR&with_genres=16`,
      transformResponse: (response: {results: Animated[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Animated) => ({
          id: Animated.id,
          name: Animated.name,
          poster_path: Animated.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchNetflixAnimated: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=16&with_watch_providers=8`,
      transformResponse: (response: {results: Animated[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Animated) => ({
          id: Animated.id,
          name: Animated.name,
          poster_path: Animated.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchUpcomingSeries: builder.query<MinimalContent[], void>({
      query: () => `tv/on_the_air?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&page=1`,
      transformResponse: (response: {results: Series[], meta: FetchBaseQueryMeta | undefined, arg: void}): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Series) => ({
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchUpcomingFilms: builder.query<MinimalContent[], void>({
      query: () => `movie/upcoming?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&page=1`,
      transformResponse: (response: { results: Film[] }, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Film) => ({
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path || '',
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchUpcomingAnimated: builder.query<MinimalContent[], void>({
      query: () => `Umovie/upcoming?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&page=1`,
      transformResponse: (response: Animated[], meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.map((Animated) => ({
          id: Animated.id,
          name: Animated.name,
          poster_path: Animated.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchSearchResults: builder.query<Content[], string >({
      query: (searchTerm) => 'multi?api_key=6383b6e3ace31d1ff86f07bddd32d91c&query=${searchTerm}&include_adult=false&language=fr-FR&page=1',
      transformResponse: (response: Content[], meta: FetchBaseQueryMeta | undefined, arg: string ): Content[] | Promise<Content[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.map((Content) => ({
          id: Content.id,
          name: Content.name,
          poster_path: Content.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchContentDetailsById: builder.query<Film | Series | Animated, { id: number; contentType: string }>({
      query: ({ id, contentType }) => `${contentType}/${id}?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR`,
      transformResponse: (response: any, meta: FetchBaseQueryMeta | undefined, arg: { id: number; contentType: string }): Film | Series | Animated | Promise<Film | Series | Animated> => {
        if (arg.contentType === 'tv') {
          return transformTVResponse(response);
        } else {
          return transformMovieResponse(response);
        }
      },
    }),
    
  }),
})

// Fonction de transformation pour les séries
const transformTVResponse = (response: any): Series => {
  const seriesResponse = response as Series;
  return {
    id: seriesResponse.id,
    name: seriesResponse.original_name,
    poster_path: seriesResponse.poster_path,
    synopsis: seriesResponse.overview,
    genre: seriesResponse.genres,
    nbrSeason: seriesResponse.number_of_seasons,
    nbrEpisode: seriesResponse.number_of_episodes,
  };
};

// Fonction de transformation pour les films
const transformMovieResponse = (response: any): Film => {
  const filmResponse = response as Film;
  return {
    id: filmResponse.id,
    name: filmResponse.original_title,
    poster_path: filmResponse.poster_path,
    synopsis: filmResponse.overview,
    genre: filmResponse.genres,
    author: filmResponse.created_by[0].name,
    duration: filmResponse.runtime,
  };
};

export const {
  useLazyFetchTrendingSeriesQuery,
  useLazyFetchTrendingFilmsQuery,
  useLazyFetchTrendingAnimatedQuery,
  useLazyFetchNetflixSeriesQuery,
  useLazyFetchAmazonSeriesQuery,
  useLazyFetchAmazonFilmsQuery,
  useLazyFetchNetflixFilmsQuery,
  useLazyFetchAmazonAnimatedQuery,
  useLazyFetchNetflixAnimatedQuery,
  useLazyFetchUpcomingSeriesQuery,
  useLazyFetchUpcomingFilmsQuery,
  useLazyFetchUpcomingAnimatedQuery,
  useLazyFetchSearchResultsQuery,
  useLazyFetchContentDetailsByIdQuery,
  useFetchTrendingAnimatedQuery,
  useFetchTrendingFilmsQuery,
  useFetchTrendingSeriesQuery,
  useFetchAmazonAnimatedQuery,
  useFetchAmazonFilmsQuery,
  useFetchAmazonSeriesQuery,
  useFetchNetflixAnimatedQuery,
  useFetchNetflixFilmsQuery,
  useFetchNetflixSeriesQuery,
  useFetchUpcomingAnimatedQuery,
  useFetchUpcomingFilmsQuery,
  useFetchUpcomingSeriesQuery,
} = api;

export default () => {
     // ...
   };
