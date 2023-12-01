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
      query: () => `https://api.themoviedb.org/3/discover/movie?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=10&watch_region=FR`,
    }),

    fetchNetflixFilms: builder.query<Film[], { Film: string; StreamingService: StreamingService.Netflix }>({
      query: () => `https://api.themoviedb.org/3/discover/movie?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=8&watch_region=FR`,
    }),

    fetchAmazonSeries: builder.query<Series[], { Series: string; StreamingService: StreamingService.AmazonPrime }>({
      query: () => `https://api.themoviedb.org/3/discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=119&watch_region=FR&without_genres=16`,
    }),

    fetchNetflixSeries: builder.query<Series[], { Series: string; StreamingService: StreamingService.Netflix }>({
      query: () => `https://api.themoviedb.org/3/discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=8&watch_region=FR&without_genres=16`,
    }),

    fetchAmazonAnimated: builder.query<Animated[], { Animated: string; StreamingService: StreamingService.AmazonPrime }>({
      query: () => `https://api.themoviedb.org/3/discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&with_watch_providers=119&watch_region=FR&with_genres=16`,
    }),

    fetchNetflixAnimated: builder.query<Animated[], { Animated: string; StreamingService: StreamingService.Netflix }>({
      query: () => `https://api.themoviedb.org/3/discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&with_watch_providers=8&watch_region=FR&with_genres=16`,
    }),

    fetchUpcomingSeries: builder.query<Series[], string>({
      query: () => `https://api.themoviedb.org/3/tv/on_the_air?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&page=1`,
    }),

    fetchUpcomingFilms: builder.query<Film[], string>({
      query: () => `Uhttps://api.themoviedb.org/3/movie/upcoming?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&page=1`,
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
  useFetchSearchResultsQuery,
  useFetchContentDetailsQuery,
} = api;