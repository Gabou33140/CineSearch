export interface Content {
      id: number
      name?: string
      platform?: string
      author?: string
      genre: Genre[]
      poster_path?: string
      synopsis?: string
}

interface Genre {
id: number;
name: string;
}

export interface searchResults {
  page : number;
  results: result[];
}

interface result {
  id: number;
  name: string;
}

export interface TrendingContent {
  id: string;
  backdrop_path: string;
}

export interface Animated extends Content {
  nbrEpisode: number
  nbrSeason: number
}

export interface Film extends Content {
  duration: number;
}

export interface Series extends Content {
  nbrEpisode: number
  nbrSeason: number
}

export interface TrendingSeriesResponse {
  results: Series[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface MinimalContent {
  id: number;
  name?: string;
  poster_path: string;
  title?: string;
}

export interface CatalogueSeriesResponse {
  results: Series[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface UpcomingSeriesResponse {
  results: Series[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface TrendingFilmResponse {
  results: Film[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface CatalogueFilmResponse {
  results: Film[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface UpcomingFilmResponse {
  results: Film[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface TrendingAnimatedResponse {
  results: Animated[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface CatalogueAnimatedResponse {
  results: Animated[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface UpcomingAnimatedResponse {
  results: Animated[];
  // Ajoute d'autres propriétés si nécessaire
}

export interface SearchResultsResponse {
  results: Content[];
  // Ajoute d'autres propriétés si nécessaire
}


export enum StreamingService {
  AmazonPrime,
  Netflix,
}

