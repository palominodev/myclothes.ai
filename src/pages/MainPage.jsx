import { Navigate, Route, Routes } from "react-router-dom"
import { TemplatesBar } from "../Components"
import { AddClothePage } from "./AddClothePage"
import { AddOutfitPage } from "./AddOutfitPage"
import { HomePage } from "./HomePage"
import { PerfilPage } from "./PerfilPage"
import { SavedPage } from "./SavedPage"
import { StorePage } from "./StorePage"
import { QRPage } from './QRPage';

export const MainPage = () => {
  return (
    <TemplatesBar>
        <Routes>
          <Route path="/home" element={ <HomePage />} />
          <Route path='/perfil' element={ <PerfilPage /> } />
          <Route path='/store' element={ <StorePage /> } />
          <Route path='/add-clothe' element={ <AddClothePage /> } />
          <Route path='/add-outfit' element={ <AddOutfitPage /> } />
          <Route path='/saved' element={ <SavedPage /> } />
          <Route path='/qr' element={ <QRPage /> } />


          
          <Route path="/*" element={ <Navigate to={'/home'} /> } />
        </Routes>
        
    </TemplatesBar>
  )
}
