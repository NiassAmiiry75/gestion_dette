// export interface UserModel {
//   id: number;
//   username: string
// }

// export interface UserConnect {
//   user?: UserModel,
//   token?: string
// }

// export type UserConnectOrNull = UserModel | null



// Définition du modèle d'utilisateur
// export interface UserModel {
//     nom: string;        // Le nom de l'utilisateur
//     prenom: string;     // Le prénom de l'utilisateur
//     telephone: string;  // Numéro de téléphone de l'utilisateur
//     role: string;       // Le rôle de l'utilisateur dans l'application (ex. "admin", "user", etc.)
//   }
  export interface UserModel {
    id: string;
    nom: string;
    prenom: string;
    telephone: string;
    role: string;
    clientId: string;
  }
  
  // export type UserConnectOrNull = UserModel | null;
  
  
  // Définition de l'interface qui peut inclure l'utilisateur et un token
  export interface UserConnect {
    user?: UserModel;   // L'utilisateur connecté (optionnel car il peut ne pas être connecté)
    token?: string;     // Jeton d'authentification associé à l'utilisateur (optionnel)
  }
  
  // Type qui représente soit un utilisateur connecté, soit null
  export type UserConnectOrNull = UserModel | null;