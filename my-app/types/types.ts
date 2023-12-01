export interface Content {
        idContent : number
        name: string
        platform: string
        author: string
        genre: string
        pic: string
        synopsis: string
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
  
