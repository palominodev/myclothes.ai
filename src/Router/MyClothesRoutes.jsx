import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from '../auth/routes/PrivateRoutes'
import { PublicRoutes } from '../auth/routes/PublicRoutes'
import { LoginPage, MainPage, RegisterPage } from '../pages'

export const MyClothesRoutes = () => {

  return (
    <Routes>
      <Route path="login" element={ 
        <PublicRoutes>
          <LoginPage/>
        </PublicRoutes>
       } />

      <Route path="register" element={<RegisterPage/>} />

      <Route path="/*" element={ 
        <PrivateRoutes>
          <MainPage/>
        </PrivateRoutes>
       } />
    </Routes>
  )
}
