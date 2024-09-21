import { Route, Routes } from "react-router-dom";
import {ArticlePage,DashboardPage,  LayoutSecure,ErrorPage} from "./export";
import ClientPage from "../cilents/components/ClientPage";
import DettePage from "../dettes/components/DettePage";
import UtilisateurPage from "../utilisateurs/components/UtilisateurPage";
import DemandePage from "../demandes/components/DemandePage";

export default function SecureRouter(){
    return(
    
      
     <Routes>
       <Route  index element={<ArticlePage />} />
  
       <Route element={<LayoutSecure/>}>
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path='article' element={<ArticlePage />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/suivi-dette" element={<DettePage />} />
          <Route path="/utilisateur" element={<UtilisateurPage />} />
          <Route path="/demande" element={<DemandePage />} />
       </Route>
       <Route  path='*' element={<ErrorPage />} />

      </Routes>
      
    )
}