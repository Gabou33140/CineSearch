export interface Content {
    // Ajoute les propriétés spécifiques que tu veux afficher (par exemple, titre, description, note, etc.)
    id: number;
    title: string;
    description: string;
    // ...
  }
  
  export interface TrendingContentResponse {
    results: Content[];
    // Ajoute d'autres propriétés si nécessaire
  }
  
  export interface CatalogueContentResponse {
    results: Content[];
    // Ajoute d'autres propriétés si nécessaire
  }
  
  export interface UpcomingContentResponse {
    results: Content[];
    // Ajoute d'autres propriétés si nécessaire
  }
  
  export interface SearchResultsResponse {
    results: Content[];
    // Ajoute d'autres propriétés si nécessaire
  }
  
  export interface ContentDetailsResponse {
    // Contient les détails spécifiques d'un contenu
    // Ajoute d'autres propriétés si nécessaire
  }