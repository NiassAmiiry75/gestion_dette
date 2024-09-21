import ArticleApproComponent from "./components/ArticleApproComponent";
import ArticleListComponent from "./components/ArticleListComponent";
import "./ArticlePage.css";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const [data, setData] = useState<any>(null);  // Vous pouvez ajuster le type selon votre réponse API
  const [error, setError] = useState<string | null>(null);

  // Fonction pour gérer l'appel à l'API
  const handleFetch = () => {
    fetch("http://localhost:3002/api/v1/articles", {
      method: "GET",
      credentials: "include", // Si vous avez des cookies ou sessions
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        return response.json();
      })
      .then((result) => {
        setData(result); // Sauvegarder les données récupérées
      })
      .catch((err) => {
        setError(err.message); // Capturer et afficher l'erreur
        console.error("Erreur:", err);
      });
  };

  // Utilisation du useEffect pour récupérer les données à l'initialisation
  useEffect(() => {
    handleFetch();
  }, []); // Le tableau vide [] signifie que le useEffect ne s'exécute qu'une fois, au montage du composant

  return (
    <main className="mt-8 mx-4 md:mr-8 rounded-xl bg-white p-4 shadow-sm flex flex-col main-content">
      <div className="mb-4 flex justify-between flex-wrap">
        <span className="text-gray-600 text-xl font-bold mb-2 ssm:mb-0">
          Approvisionnement
        </span>
        <button
          onClick={handleFetch} // Utilisation de la fonction `handleFetch` ici
          className="bg-blue-500 text-white px-4 py-2 rounded"
          data-modal-target="articleModel"
        >
          Nouvelle Article
        </button>
      </div>
      <div className="product-lists">
        {/* Affichage des données ou des composants */}
        {error ? (
          <p className="text-red-500">Erreur: {error}</p>
        ) : data ? (
          <>
            <ArticleListComponent />
            <ArticleApproComponent />
          </>
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </main>
  );
}
