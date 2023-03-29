import React, { useContext } from 'react'
import { MyClothesContext } from '../context/MyClothesContext'

export const MenuOptions = () => {

  const { logout } = useContext(MyClothesContext)

  const onLogout = () => {
    logout()
  }

  return (
    <div className='bg-slate-900 text-white absolute top-full left-0 w-4/12 p-4 rounded-br-md'>
        <ul className='flex gap-2 flex-col'>
            <li className='bg-slate-800 p-2 rounded-md hover:bg-slate-900 transition-colors'><a href="#">Inicio</a></li>
            <li className='bg-slate-800 p-2 rounded-md hover:bg-slate-900 transition-colors'><a href="#">Blog</a></li>
            <button 
              onClick={onLogout}
              className='bg-slate-800 p-2 rounded-md hover:bg-slate-900 transition-colors'>
                Cerrar Sesion
            </button>
        </ul>
    </div>
  )
}
