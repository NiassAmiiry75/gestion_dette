// Importation du type ArticleResponseList depuis le modèle d'article
// import axios from "axios";
import { ArticleResponseList } from "../models/article.model"; 
// Importation du module axiosFetch qui contient des hooks personnalisés pour les requêtes API
import axiosFetch  from "./axios.fetch"; 

// import { useData,usePost } from "./axios.fetch";
// Définition du hook personnalisé useArticles
const useArticles = () => axiosFetch.useData<ArticleResponseList>('/articles'); // Utilisation du hook useData pour récupérer les articles depuis l'API

// Exportation du hook pour l'utiliser dans d'autres composants
export default useArticles;