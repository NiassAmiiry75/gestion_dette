
// // Importation des modules nécessaires
// import { useContext, createContext, useState } from "react";

// // Définition de l'interface du User
// interface UserConnectOrNull {
//   id: string;
//   name: string;
//   email: string;
//   // Ajouter d'autres propriétés de l'utilisateur si nécessaire
// }

// // Définition de l'interface pour le contexte d'authentification
// interface AuthContextProps {
//   user: UserConnectOrNull | null;  // L'utilisateur connecté (ou null s'il n'y a personne)
//   setUser: React.Dispatch<React.SetStateAction<UserConnectOrNull | null>>;  // Fonction pour mettre à jour l'utilisateur
// }

// // Création du contexte avec des valeurs par défaut
// export const AuthContext = createContext<AuthContextProps>({
//   user: null, // Valeur par défaut : aucun utilisateur connecté
//   setUser: () => null // Fonction par défaut qui ne fait rien
// });

// // Définition des props que le AuthContextProvider acceptera (enfants du composant)
// export interface Props {
//   children: React.ReactNode;
// }

// // Composant AuthContextProvider qui enveloppe les enfants et fournit le contexte
// export const AuthContextProvider = ({ children }: Props) => {
//   // Utilisation du hook useState pour gérer l'état de l'utilisateur
//   const [user, setUser] = useState<UserConnectOrNull | null>(null);

//   return (
//     // Le contexte est fourni à tous les composants enfants
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Exemple d'utilisation dans un autre composant
// const LoginPage = () => {
//   // Utilisation du contexte d'authentification pour accéder à l'utilisateur et la fonction de mise à jour
//   const { user, setUser } = useContext(AuthContext);

//   // Fonction de connexion (exemple simple)
//   const handleLogin = () => {
//     const newUser = { id: "123", name: "John Doe", email: "john.doe@example.com" };
//     setUser(newUser); // Mise à jour de l'utilisateur
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       {user ? <p>Bienvenue, {user.name}!</p> : <p>Veuillez vous connecter.</p>}
//       <button onClick={handleLogin}>Se connecter</button>
//     </div>
//   );
// };
// AuthContextProps.tsx
// 1. Déclaration de l'interface pour définir la forme des propriétés du contexte d'authentification.

// Importation des modules nécessaires
// import { useContext, createContext, useState } from "react";

import React, { useState, createContext, useContext } from 'react';
import { UserConnectOrNull } from '../models/user.model';
// import { UserConnectOrNull } from '../models/user.model'
interface AuthContextProps {
    // L'utilisateur peut être un objet User ou null, si personne n'est connecté.
    user: UserConnectOrNull | null;
    // Fonction pour mettre à jour l'état de l'utilisateur. Elle prend un argument qui peut être User ou null.
    setUser: React.Dispatch<React.SetStateAction<UserConnectOrNull | null>>;
  }
  
  // 2. Création du contexte avec des valeurs par défaut : un utilisateur null et une fonction vide pour setUser.
  export const AuthContext = createContext<AuthContextProps>({
    user: null,
    setUser: () => null, // Une fonction par défaut qui ne fait rien
  });
  
  // AuthProvider.tsx

//   import { AuthContext, AuthContextProps } from './AuthContextProps'; // Importation de l'interface et du contexte
  
  // 3. Définition des propriétés pour le composant AuthContextProvider
  interface Props {
    // Les composants enfants à englober avec le contexte (toute partie de l'application qui a besoin de l'état user).
    children: React.ReactNode;
  }
  
  // 4. Création du composant AuthContextProvider
  const AuthContextProvider = ({ children }: Props) => {
    // Utilisation du hook useState pour gérer l'état de l'utilisateur, qui est null par défaut.
    const [user, setUser] = useState<UserConnectOrNull | null>(null);
  
    // Retourne le Provider du contexte, qui permet aux composants enfants d'accéder et de mettre à jour l'état de l'utilisateur.
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {children} {/* Les composants enfants auront accès à user et setUser */}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContextProvider; // 5. Exportation du Provider pour l'utiliser dans d'autres parties de l'application.
  // Fin du fichier AuthProvider.tsx

// 1. Exportation par défaut du composant AuthContextProvider
// export default AuthContextProvider; 

// 2. Hook personnalisé pour utiliser facilement le contexte d'authentification dans les composants
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  // Retourne l'authentification (user et setUser) en utilisant useContext pour accéder au AuthContext
  return useContext(AuthContext);
};