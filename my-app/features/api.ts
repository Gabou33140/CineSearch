import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'TON_URL_DE_BASE_API' }),
  endpoints: (builder) => ({
    fetchTrendingContent: builder.query<any[], string>({
      query: (contentType) => `URL_API_TENDANCES_${contentType}`,
    }),
    fetchCatalogueContent: builder.query<any[], { contentType: string; streamingService: string }>({
      query: ({ contentType, streamingService }) => `URL_API_CATALOGUE_${contentType}_${streamingService}`,
    }),
    fetchUpcomingContent: builder.query<any[], string>({
      query: (contentType) => `URL_API_FUTURES_SORTIES_${contentType}`,
    }),
    fetchSearchResults: builder.query<any[], string>({
      query: (searchTerm) => `URL_API_RECHERCHE_${searchTerm}`,
    }),
    fetchContentDetails: builder.query<any, number>({
      query: (contentId) => `URL_API_DETAILS_${contentId}`,
    }),
  }),
});

export const { useFetchTrendingContentQuery, useFetchCatalogueContentQuery, useFetchUpcomingContentQuery, useFetchSearchResultsQuery, useFetchContentDetailsQuery } = api;
