import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { StatusCodes } from "http-status-codes";
import { AxiosRequestConfig, CanceledError } from 'axios';
// import axios, { AxiosRequestConfig, CanceledError } from 'axios';


// const apiClient = axios.create({
//      baseURL: "http://localhost:3002/api/v1/auth", // Remplacez par votre URL d'API
//   });
type ResponseType<T> = T | T[] | null;

interface FetchResponse<T> {
  status: StatusCodes;
  results: ResponseType<T>;
  message: string;

}

// Hook useData
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint,{signal:controller.signal, ...requestConfig })  // Assurez-vous que la réponse est typée correctement
      .then((res) => {
         const result = res.data.results;
        console.log(res.data.results);
         // Vérification du type de la réponse
      if (Array.isArray(result)) {
        setData(result[0] || null);  // On prend le premier élément du tableau ou null si le tableau est vide
      } else {
        setData(result);

      }
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

// Hook usePost
const usePost = <RES>(endpoint: string, forData?: any, method: string = 'GET', requestConfig?: AxiosRequestConfig) => { // Correction de 'GET' à 'POST'
  const [data, setData] = useState<RES[] |RES | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .request<FetchResponse<RES>>({signal:controller.signal,
        method,  // Correction de 'methode' à 'method'
        data: forData,
        url: endpoint,
        // signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint, forData, method, requestConfig]);

  return { data, error, isLoading };
};

export default{ useData, usePost };
// // import { useQuery, useMutation, useQueryClient } from 'react-query';
// import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import TachesList, { TacheCreation, TacheUpdate } from '../models/article.model';
// import apiClient from '../services/api-client';
// // import TachesList, { TacheCreation, TacheUpdate } from '../models/tache.model';

// const fetchTaches = async () => {
//   const response = await apiClient.get<{ data: TachesList[] }>('/taches');
//   return response.data.data;
// };

// const postTache = async (newTache: TacheCreation) => {
//   const response = await apiClient.post<{ data: TachesList }>('/taches', newTache);
//   return response.data.data;
// };

// const updateTache = async ({ id, updatedTache }: TacheUpdate) => {
//   const response = await apiClient.post<{ data: TachesList }>(`/taches/${id}`, updatedTache);
//   return response.data.data;
// };

// const deleteTache = async (id: number) => {
//   await apiClient.delete(`/taches/${id}`);
// };

// const completeTache = async (id: number) => {
//   const response = await apiClient.patch<{ data: TachesList }>(`/taches/${id}`);
//   return response.data.data;
// };

// const incompleteTache = async (id: number) => {
//     const response = await apiClient.patch<{ data: TachesList }>(`/taches/incomplete/${id}`);
//     return response.data.data;
//   };

// const axiosFetch = () => {
//   const queryClient = useQueryClient();

//   const { data: taches, isLoading, isError } = useQuery('taches', fetchTaches);

//   const mutationAdd = useMutation(postTache, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('taches');
//     },
//   });

//   const mutationUpdate = useMutation(updateTache, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('taches');
//     },
//   });

//   const mutationDelete = useMutation(deleteTache, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('taches');
//     },
//   });

//   const mutationComplete = useMutation(completeTache, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('taches');
//     },
//   });

//   const mutationinComplete = useMutation(incompleteTache, {
//     onSuccess: () => {
//       queryClient.invalidateQueries('taches');
//     },
//   });

//   return {
//     taches,
//     isLoading,
//     isError,
//     mutationAdd,
//     mutationUpdate,
//     mutationDelete,
//     mutationComplete,
//     mutationinComplete
//   };
// };

// export default axiosFetch;



// import axios, { AxiosRequestConfig, CanceledError } from "axios";
// import { useEffect, useState } from "react";

// const apiClient = axios.create({
//   baseURL: "http://your-api-url.com/api", // Remplacez par votre URL d'API
// });

// type FetchResponse<T> = {
//   status: number;
//   results: T;
//   message: string;
// };

// const useData = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   deps?: any[]
// ) => {
//   const [data, setData] = useState<T | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);

//     apiClient
//       .get<FetchResponse<T>>(endpoint, {
//         signal: controller.signal,
//         ...requestConfig,
//       })
//       .then((res) => {
//         setData(res.data.results);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, [endpoint, requestConfig, ...(deps || [])]);

//   return { data, error, isLoading };
// };

// export default { useData };