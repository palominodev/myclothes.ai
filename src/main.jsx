import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyClothesAI } from './MyClothesAI'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MyClothesAI />
    </BrowserRouter>
  </React.StrictMode>,
)
