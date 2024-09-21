import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService, CredentialsOrNull } from "../../../services/AuthService";

export default function SecureRouter() {
  const navigate = useNavigate();
  
  // State Erreur
  const [errors, setErrors] = useState({ login: "", password: "" });
  
  // Soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    const credentials: CredentialsOrNull = {
      login: data.login as string,
      password: data.password as string,
    };

    if (validateForm(credentials)) {
      authService.login(credentials)
        .then((res) => {
          // Sauvegarde du Token et redirection vers admin
          authService.saveToken(res.data.access_token);
          navigate("/boutique", { replace: true });
        })
        .catch((error) => {
          console.log(error);
          setErrors({ ...errors, login: "Login ou mot de passe incorrect" });
        });
    }
  };

  // Validation du formulaire
  const validateForm = (formData: CredentialsOrNull) => {
    let isValid = true;
    const newErrors = { login: "", password: "" };

    // Valider le login
    if (!formData?.login) {
      newErrors.login = "Veuillez entrer votre email";
      isValid = false;
    }

    // Valider le mot de passe
    if (!formData?.password) {
      newErrors.password = "Veuillez entrer votre mot de passe";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white flex flex-col justify-center">
        <div className="absolute top-0 left-0 bg-yellow-400 w-24 h-24 rounded-full transform -translate-x-12 -translate-y-12 parallax-shape"></div>
        <div className="absolute bottom-0 right-0 bg-yellow-400 w-36 h-36 rounded-full transform translate-x-12 translate-y-12 parallax-shape"></div>

        <div className="relative z-10">
          <img src="logo.png" alt="logo de la boutique" className="w-24 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-extrabold mb-4 text-center">Bienvenue à <b>Gestion Des Dettes</b></h2>
          <p className="text-lg text-blue-200 mb-6 text-center">
            La plateforme idéale pour gérer vos ventes, articles et clients avec efficacité.
          </p>
        </div>
      </div>

      <div className="p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Connexion</h1>
        <p className="text-lg text-gray-500 mb-6 text-center">Connectez-vous pour accéder à votre espace de gestion.</p>

        <form method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              name="login"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre adresse e-mail"
            />
            {errors.login && <p className="text-red-500 text-sm">{errors.login}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre mot de passe"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Mot de passe oublié ? <a href="#" className="text-blue-500 hover:underline">Réinitialiser</a>
        </p>
      </div>
    </div>
  );
}
