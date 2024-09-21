// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import DashboardPage from './pages/dashboard/DashboardPage'
// import ArticlePage from './pages/articles/ArticlePage'
import ErrorPage from './utils/ErrorPage'

import SecureRouter from './pages/secure/SecureRouter'
import LoginPage from './pages/public/login/LoginPage'
// import AuthGard from './utils/AuthGard'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        {/* <Route  element={<AuthGard/>}> */}
        <Route path='/boutique/*' element={<SecureRouter />}/>
         {/* </Route> */}
        <Route  path='*' element={<ErrorPage />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
