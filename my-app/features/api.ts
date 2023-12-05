import { FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import  { Film, Series, Animated, StreamingService, Content, MinimalContent } from "../types/types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    fetchTrendingSeries: builder.query<Series[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc&without_genres=16`,
      transformResponse: (response: {results: Series[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.results.map((Series) => ({
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchTrendingFilms: builder.query<MinimalContent[], void>({
      query: () => `trending/movie/week?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR`,
      transformResponse: (response: {results: Film[]}, meta: FetchBaseQueryMeta | undefined, arg: void): MinimalContent[] | Promise<MinimalContent[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        console.log(response.results)
        return response.results.map((Film) => ({
          id: Film.id,
          name: Film.title,
          poster_path: Film.poster_path,
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
          poster_path: Animated.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchAmazonFilms: builder.query<Film[], void>({
      query: () => `discover/movie?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=10&watch_region=FR`,
      transformResponse: (response: Film[], meta: FetchBaseQueryMeta | undefined, arg: void): Film[] | Promise<Film[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.map((Film) => ({
          id: Film.id,
          name: Film.name,
          poster_path: Film.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchNetflixFilms: builder.query<Film[], void>({
      query: () => `discover/movie?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=8&watch_region=FR`,
      transformResponse: (response: Film[], meta: FetchBaseQueryMeta | undefined, arg: void): Film[] | Promise<Film[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.map((Film) => ({
          id: Film.id,
          name: Film.name,
          poster_path: Film.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchAmazonSeries: builder.query<Series[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=119&watch_region=FR&without_genres=16`,
      transformResponse: (response: Series[], meta: FetchBaseQueryMeta | undefined, arg: void): Series[] | Promise<Series[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.map((Series) => ({
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchNetflixSeries: builder.query<Series[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&page=1&with_watch_providers=8&watch_region=FR&without_genres=16`,
      transformResponse: (response: Series[], meta: FetchBaseQueryMeta | undefined, arg: void): Series[] | Promise<Series[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.map((Series) => ({
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchAmazonAnimated: builder.query<Animated[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&with_watch_providers=119&watch_region=FR&with_genres=16`,
      transformResponse: (response: Animated[], meta: FetchBaseQueryMeta | undefined, arg: void): Animated[] | Promise<Animated[]> => {
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

    fetchNetflixAnimated: builder.query<Animated[], void>({
      query: () => `discover/tv?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&sort_by=primary_release_date.desc&with_watch_providers=8&watch_region=FR&with_genres=16`,
      transformResponse: (response: Animated[], meta: FetchBaseQueryMeta | undefined, arg: void): Animated[] | Promise<Animated[]> => {
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

    fetchUpcomingSeries: builder.query<Series[], void>({
      query: () => `tv/on_the_air?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&page=1`,
      transformResponse: (response: Series[], meta: FetchBaseQueryMeta | undefined, arg: void): Series[] | Promise<Series[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.map((Series) => ({
          id: Series.id,
          name: Series.name,
          poster_path: Series.poster_path,
          // ... autres propriétés que tu veux inclure
        }));
      },
    }),

    fetchUpcomingFilms: builder.query<Film[], void>({
      query: () => `Umovie/upcoming?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR&page=1`,
      transformResponse: (response: Film[], meta: FetchBaseQueryMeta | undefined, arg: void): Film[] | Promise<Film[]> => {
        // Ici, tu peux manipuler la réponse selon tes besoins
        // Par exemple, sélectionner uniquement certaines propriétés
        return response.map((Film) => ({
          id: Film.id,
          name: Film.name,
          poster_path: Film.poster_path,
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

    fetchContentDetailsById: builder.query<Film[] | Series[], { id: number; contentType: string }>({
      query: ({ id, contentType }) => `${contentType}/${id}?api_key=6383b6e3ace31d1ff86f07bddd32d91c&language=fr-FR`,
      transformResponse: (response: Film[] | Series[], meta: FetchBaseQueryMeta | undefined, arg: { id: number; contentType: string }): Film[] | Series[] | Promise<Film[] | Series[]> => {
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
  }),
})

export const fetchContentDetailsByIdOrFallback = async (id: number) => {
  // Essayer de récupérer les détails en tant que film
  const movieDetails = await useFetchContentDetailsByIdQuery({ id, contentType: 'movie' }).data;

  // Si les détails du film existent, les renvoyer
  if (movieDetails) {
    return movieDetails;
  }

  // Si les détails du film n'existent pas, essayer de les récupérer en tant que série
  const seriesDetails = await useFetchContentDetailsByIdQuery({ id, contentType: 'tv' }).data;

  // Renvoyer les détails de la série, même s'ils sont nuls
  return seriesDetails;
};

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
  useFetchContentDetailsByIdQuery,
} = api;

export default () => {
     // ...
   };