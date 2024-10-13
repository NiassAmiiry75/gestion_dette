import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { authService, CredentialsOrNull } from "../../../services/AuthService";
import { UserConnectOrNull } from "../../../models/user.model";
import { useAuth } from "../../../utils/AuthProvider";

export default function LoginPage() {
  interface Credentials {
    login: string;
    password: string;
  }

  const navigate = useNavigate();
   const authProvider = useAuth(); // Renommé pour éviter le conflit avec AuthProvider
  const [errorLogin, setErrorLogin] = useState("");
  
  const { register, handleSubmit, formState: { errors }, } = useForm<Credentials>();

  const handleConnexion = (credentials: CredentialsOrNull) => {
    authService.login(credentials)
      .then(res => {
        const { results,status } = res.data;
        console.log(status);
        authService.saveToken(results.token);
        // console.log(authService.getTokenInfo());
        authProvider.setUser(authService.getTokenInfo() as UserConnectOrNull);
        // console.log(authProvider.user);
        navigate('/boutique', { replace: true });
      })
      .catch(error => {
        const { data } = error.response;
        setErrorLogin(data.message);
      });
  };
  return (
    <div className="content-login   bg-white shadow-2xl rounded-lg overflow-hidden max-w-6xl w-full grid grid-cols-2">
      
        <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 p-8 text-white flex flex-col justify-center">
        <div className="animate-bounce-slow absolute top-[10px] left-3 transform -translate-x-1/2 w-24 h-24 bg-yellow-400 rounded-full shadow-lg"></div>
  
          <img src="src/assets/logo.png" alt="Logo de la boutique" className="w-28 mx-auto mb-4 animate-pulse" />
          
          <h2 className="text-4xl font-extrabold mb-4 text-center">Bienvenue dans votre boutique<br />Gestion des Dettes</h2>
          <p className="text-lg text-blue-200 mb-6 text-center">La plateforme idéale pour gérer vos ventes</p>
        <div className="animate-bounce-slow absolute bottom-[10px] right-9 transform -translate-y-500 w-24 h-24 bg-yellow-400 rounded-full shadow-lg"></div>
          
        </div>
        
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Connexion</h1>
          <p className="text-lg text-gray-500 text-center mb-6">Connectez-vous pour accéder à votre espace</p>
          <form className="space-y-6" onSubmit={handleSubmit(handleConnexion)}>
          <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
             <input
                type="email"
                id="email"
                {...register('login', { required: "Entrer votre email" })}
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@domaine.com"
              />
              {errors.login && <p className="text-red-500 text-sm">{errors.login.message}</p>}
            </div>

          <div>
           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
           <input
             type="password"
              id="password"
              {...register('password', { required: "Entrez votre mot de passe" })}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre mot de passe"
            />
            {errors.password && <div className="text-sm text-red-800 mt-1">{errors.password.message}</div>}
             </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
            >
              Se connecter
            </button>
            <button
              type="button"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
            >
              Mot de passe oublié ?
            </button>
            {/* <button type="submit"   className="login-button  w-full p-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-150 transform hover:scale-105">Se connecter</button> */}
              {/* Forgot Password */}
              {/* <button
              type="button"
              className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150 transform hover:scale-105"
              onClick={() => console.log('Mot de passe oublié')}
            >
              Mot de passe oublié ?
            </button> */}
              {/* <a href="#" className="block text-center text-blue-600 mt-4 hover:underline">
                          Mot de passe oublié?
                      </a> */}
          </form>
          {errorLogin && <p className="text-red-500 text-center mt-4">{errorLogin}</p>}
        </div>
          {/* Styles des animations */}
          <style>{`
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
  
          @keyframes bounce-fast {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-40px);
            }
          }
  
          .animate-bounce-slow {
            animation: bounce-slow 5s infinite;
          }
  
          .animate-bounce-fast {
            animation: bounce-fast 3s infinite;
          }
  
         
        `}</style>
      </div>
    );
  // return (
  //   <div className="content-login bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full grid">
  //     <div className="relative z-10">
  //       <img src="logo.png" alt="Logo de la boutique" className="w-24 max-auto mb-4 animate-pulse" />
  //       <h2 className="text-4xl font-extrabold mb-4 text-center">Bienvenue dans votre boutique en ligne<br />Gestion des Dettes</h2>
  //       <h3 className="text-xl text-center mb-6">La plateforme idéale pour gérer vos dettes</h3>

  //       <div className="p-10 flex flex-col justify-center">
  //         <h1 className="text-xl text-center text-gray-800 mb-8">Connectez-vous pour accéder à votre espace client</h1>
  //         <p className="text-lg text-blue-200 mb-6 text-center">Connectez-vous pour accéder à votre espace...</p>

  //         {errorLogin && 
  //           <div className="flex items-center p-4 text-sm text-red-800 border mb-4">
  //             <svg className="flex-shrink-0 inline me-3 w-5 h-5" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  //               <path d="M10 5.49l-5.5 5.5 1.42 1.42L10 8.33l4.08 4.08 1.42-1.42L10 5.49z" />
  //             </svg>
  //             <span className="sr-only">Info</span>
  //             <div>
  //               <p className="font-extralight">Erreur de Connexion</p>
  //               <p className="font-medium">{errorLogin}</p>
  //             </div>
  //           </div>
  //         }

  //         <form method="POST" className="space-y-6" onSubmit={handleSubmit(handleConnexion)}>
  //           <div>
  //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
  //             <input
  //               type="email"
  //               id="email"
  //               {...register('login', { required: "Entrer votre email" })}
  //               className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
  //               placeholder="example@domaine.com"
  //             />
  //             {errors.login && <p className="text-red-500 text-sm">{errors.login.message}</p>}
  //           </div>

  //           <div>
  //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
  //             <input
  //               type="password"
  //               id="password"
  //               {...register('password', { required: "Entrez votre mot de passe" })}
  //               className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
  //               placeholder="Entrez votre mot de passe"
  //             />
  //             {errors.password && <div className="text-sm text-red-800 mt-1">{errors.password.message}</div>}
  //           </div>

  //           <button
  //             type="submit"
  //             className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
  //           >
  //             Se connecter
  //           </button>
  //           <button
  //             type="button"
  //             className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
  //           >
  //             Mot de passe oublié ?
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
}
