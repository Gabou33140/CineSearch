import { FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import  { Film, Series, Animated, searchResults, StreamingService, Content, MinimalContent } from "../types/types";

const api_key = "6383b6e3ace31d1ff86f07bddd32d91c"

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchTrendingSeries: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=${api_key}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&without_genres=16`,
      transformResponse: (response: {results: Series[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Series) => ({
          contentType: 'tv',
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path || '',
        }));
      },
    }),

    fetchTrendingFilms: builder.query<MinimalContent[], void>({
      query: () => `trending/movie/week?api_key=${api_key}&language=fr-FR`,
      transformResponse: (response: {results: Film[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Film) => ({
          contentType: 'movie',
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path || '',
        }));
      },
    }),

    fetchTrendingAnimated: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=${api_key}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=16`,
      transformResponse: (response: {results: Animated[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Animated) => ({
          contentType: 'tv',
          id: Animated.id,
          name: Animated.name,
          poster_path: Animated.poster_path || '',
        }));
      },
    }),

    fetchAmazonFilms: builder.query<MinimalContent[], void>({
      query: () => `discover/movie?api_key=${api_key}&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=119&watch_region=FR`,
      transformResponse: (response: {results: Film[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Film) => ({
          contentType: 'movie',
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path || '',
        }));
      },
    }),

    fetchNetflixFilms: builder.query<MinimalContent[], void>({
      query: () => `discover/movie?api_key=${api_key}&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=8&watch_region=FR`,
      transformResponse: (response: {results: Film[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Film) => ({
          contentType: 'movie',
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path || '',
        }));
      },
    }),

    fetchAmazonSeries: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=${api_key}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_watch_providers=119&without_genres=16`,
      transformResponse: (response: {results: Series[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Series) => ({
          contentType: 'tv',
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path || '',
        }));
      },
    }),

    fetchNetflixSeries: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=${api_key}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_watch_providers=8&without_genres=16`,
      transformResponse: (response: {results: Series[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Series) => ({
          contentType: 'tv',
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path || '',
        }));
      },
    }),

    fetchAmazonAnimated: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=${api_key}&language=fr-FR&sort_by=primary_release_date.desc&with_watch_providers=119&watch_region=FR&with_genres=16`,
      transformResponse: (response: {results: Animated[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Animated) => ({
          contentType: 'tv',
          id: Animated.id,
          name: Animated.name,
          poster_path: Animated.poster_path || '',
        }));
      },
    }),

    fetchNetflixAnimated: builder.query<MinimalContent[], void>({
      query: () => `discover/tv?api_key=${api_key}&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=16&with_watch_providers=8`,
      transformResponse: (response: {results: Animated[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Animated) => ({
          contentType: 'tv',
          id: Animated.id,
          name: Animated.name,
          poster_path: Animated.poster_path || '',
        }));
      },
    }),

    fetchUpcomingSeries: builder.query<MinimalContent[], void>({
      query: () => `tv/on_the_air?api_key=${api_key}&language=fr-FR&page=1`,
      transformResponse: (response: {results: Series[], meta: FetchBaseQueryMeta | undefined, arg: void}): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Series) => ({
          contentType: 'tv',
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path || '',
        }));
      },
    }),

    fetchUpcomingFilms: builder.query<MinimalContent[], void>({
      query: () => `movie/upcoming?api_key=${api_key}&language=fr-FR&page=1`,
      transformResponse: (response: { results: Film[] }, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.results.map((Film) => ({
          contentType: 'movie',
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path || '',
        }));
      },
    }),

    fetchUpcomingAnimated: builder.query<MinimalContent[], void>({
      query: () => `Umovie/upcoming?api_key=${api_key}&language=fr-FR&page=1`,
      transformResponse: (response: Animated[], meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        return response.map((Animated) => ({
          contentType: 'tv',
          id: Animated.id,
          name: Animated.name,
          poster_path: Animated.poster_path,
        }));
      },
    }),

    fetchSearchResults: builder.query<searchResults, { searchTerm: string }>({
      query: (searchTerm) => `search/?api_key=${api_key}&keyword?query=${searchTerm}`,
      transformResponse: (response: searchResults, meta: FetchBaseQueryMeta | undefined, arg: string): searchResults | Promise<searchResults> => {
        console.log(response)
        return {
          page: response.page,
          results: response.results.map((result) => ({
            name: result.name,
            id: result.id,
          })),
        };
      },
    }),
    

    fetchContentDetailsById: builder.query<Film | Series | Animated, { id: number; contentType: 'movie' | 'tv' }>({
      query: ({ id, contentType }) => `${contentType}/${id}?api_key=${api_key}&language=fr-FR`,
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
    contentType: 'tv'
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
    //author: filmResponse.created_by[0].name,
    duration: filmResponse.runtime,
    contentType: 'movie'
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
  useFetchSearchResultsQuery,
  useFetchContentDetailsByIdQuery
} = api;

export default () => {
     // ...
   };
