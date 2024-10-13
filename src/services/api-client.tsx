import axios, { AxiosResponse } from "axios";

const apiClient=axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout:5000,
    headers:{
        'content-Type' : 'application/json',
    }
})
export interface RestResponse<T>{
    message:string,
    status:string,
    results:T
}
// Intercepteur de réponse pour axios
// apiClient.interceptors.response.use(
//     (response: AxiosResponse<RestResponse<any>>) => {
//       // On retourne uniquement les données de la réponse sous le format RestResponse
//       return response.data;
//     },
//     (error) => {
//       // Gestion des erreurs
//       return Promise.reject(error);
//     }
//   );


apiClient.interceptors.response.use(response=>{
    return response.data},

    (error) => {
        //       // Gestion des erreurs
              return Promise.reject(error);
        //     }
});
export default apiClient;