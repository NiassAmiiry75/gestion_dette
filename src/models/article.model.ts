// export default interface TachesList {
//   id: number;
//   libelle: string;
//   statut: string;
//   etat: boolean;
//   userId: number; 
// }

// export interface TacheCreation {
// id: number;
// libelle: string;
// statut: string;
// etat: boolean;
// userId: number;
// }

// export interface TacheUpdate {
// id: number;
// updatedTache: Partial<TachesList>;
// }




// article.model.ts

// Définition du modèle d'article
export interface CardModel {
    id: string;
    libelle: string;
    prix: number;
    qteStock: number;
  }
export interface ArticleModel {
    id: string;
    libelle: string;
    // description: string;
    prix: number;
    qteStock: number;
    // categorie: string;
  }
  
  // Définition d'une liste de réponses contenant plusieurs articles
  export interface ArticleResponseList {
    articles: ArticleModel[];  // Liste des articles
    total: number;             // Total des articles disponibles (pour pagination, par exemple)
  }
  