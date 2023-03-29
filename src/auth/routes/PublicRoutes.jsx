import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { MyClothesContext } from '../../context/MyClothesContext'

export const PublicRoutes = ({children}) => {
    const {logged} = useContext(MyClothesContext)
    return (!logged)
        ? children
        : <Navigate to='/home' />
}
