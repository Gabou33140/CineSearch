import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import  { Film, Series, Animated, StreamingService } from "../types/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'TON_URL_DE_BASE_API' }),
  endpoints: (builder) => ({
    fetchTrendingSeries: builder.query<Series[], string>({
      query: () => `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&without_genres=16`,
    }),

    fetchTrendingFilms: builder.query<Film[], string>({
      query: () => `https://api.themoviedb.org/3/trending/movie/week?language=fr-FR`,
    }),

    fetchTrendingAnimated: builder.query<Animated[], string>({
      query: () => `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=16`,
    }),

    fetchAmazonFilms: builder.query<Film[], { Film: string; StreamingService: StreamingService.AmazonPrime }>({
      query: ({ Film, StreamingService }) => `URL Amazon`,
    }),

    fetchNetflixFilms: builder.query<Film[], { Film: string; StreamingService: StreamingService.Netflix }>({
      query: ({ Film, StreamingService }) => `URL Netflix`,
    }),

    fetchAmazonSeries: builder.query<Series[], { Series: string; StreamingService: StreamingService.AmazonPrime }>({
      query: ({ Series, StreamingService }) => `URL_API_CATALOGUE_`,
    }),

    fetchNetflixSeries: builder.query<Series[], { Series: string; StreamingService: StreamingService.Netflix }>({
      query: ({ Series, StreamingService }) => `URL_API_CATALOGUE_`,
    }),

    fetchAmazonAnimated: builder.query<Animated[], { Animated: string; StreamingService: StreamingService.AmazonPrime }>({
      query: ({ Animated, StreamingService }) => `URL_API_CATALOGUE_`,
    }),

    fetchNetflixAnimated: builder.query<Animated[], { Animated: string; StreamingService: StreamingService.Netflix }>({
      query: ({ Animated, StreamingService }) => `URL_API_CATALOGUE_`,
    }),

    fetchUpcomingSeries: builder.query<Series[], string>({
      query: (Series) => `URL_API_FUTURES_SORTIES`,
    }),

    fetchUpcomingFilms: builder.query<Film[], string>({
      query: (Film) => `URL_API_FUTURES_SORTIES_`,
    }),

    fetchUpcomingAnimated: builder.query<Animated[], string>({
      query: (Animated) => `URL_API_FUTURES_SORTIES`,
    }),

    fetchSearchResults: builder.query<Film[] | Series[] | Animated[], string>({
      query: (searchTerm) => `URL_API_RECHERCHE_${searchTerm}`,
    }),
    fetchContentDetails: builder.query<any, number>({
      query: (contentId) => `URL_API_DETAILS_${contentId}`,
    }),
  }),
});

export const {
  useFetchTrendingSeriesQuery,
  useFetchTrendingFilmsQuery,
  useFetchTrendingAnimatedQuery,
  useFetchNetflixSeriesQuery,
  useFetchAmazonSeriesQuery,
  useFetchAmazonFilmsQuery,
  useFetchNetflixFilmsQuery,
  useFetchAmazonAnimatedQuery,
  useFetchNetflixAnimatedQuery,
  useFetchUpcomingSeriesQuery,
  useFetchUpcomingFilmsQuery,
  useFetchUpcomingAnimatedQuery,
  useFetchSearchResultsQuery,
  useFetchContentDetailsQuery,
} = api;