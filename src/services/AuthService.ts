import { jwtDecode } from "jwt-decode";
import apiClient from "./api-client";

interface Credentials {
    login:string,
    password:string
}
export type CredentialsOrNull = Credentials | null;
const login = (credentials: CredentialsOrNull)=>{
    return apiClient.post('/auth/login',credentials)
}
// suppression du token du lacalStorage
const logout =()=>{
    localStorage.removeItem('token')
}
// Etat de la presence d'un token en localStorage
// @returns {boolean}
const isLogged = ()=>{
    const token = localStorage.getItem('token')
    return !!token
}
// Recupération brut du token en localStorage
// @returns {boolean}
const getToken= ()=>{
    return localStorage.getItem('token')
}
// Recupèration du payload du Token,
// @returns {boolean}
const getTokenInfo =()=>{
    return jwtDecode(getToken()!)
    
}
const saveToken =(token:string)=>{
    localStorage.setItem('token',token)
    
}
// Declaratio des services pour  import
export const authService = {
    login, logout,isLogged,getToken,getTokenInfo,saveToken
}